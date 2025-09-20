import { AuthSessionType } from "@/context/AuthContext";
import { prisma } from "@/lib/prisma-client";
import { InitializePaystackPayment } from "./payments";
import { GraphQLDateTime } from "graphql-iso-date";

export interface GraphQLCTX {
  session: AuthSessionType;
  prisma: typeof prisma;
}

const Resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    hello: (_parent: any, _args: any, ctx: GraphQLCTX) => {
      return ctx.session.user.id;
    },
    fetchMember: async (_parent: any, _args: any, ctx: GraphQLCTX) => {
      const member = await ctx.prisma.member.findUnique({
        where: { userId: ctx.session.user.id },
        include: { membershipFee: true },
      });

      return member;
    },
    getPayments: async (_parent: any, args: any, ctx: GraphQLCTX) => {
      const { page, pageSize } = args;
      const skip = (page - 1) * pageSize;

      const [items, totalCount] = await Promise.all([
        ctx.prisma.payment.findMany({
          skip,
          take: pageSize,
          where: { userId: ctx.session.user.id },
          orderBy: { createdAt: "desc" },
        }),
        ctx.prisma.payment.count({ where: { userId: ctx.session.user.id } }),
      ]);

      const totalPages = Math.ceil(totalCount / pageSize);

      return {
        items,
        totalCount,
        totalPages,
        currentPage: page,
        pageSize,
      };
    },
    getMembershipFees: async (_parent: any, _args: any, ctx: GraphQLCTX) => {
      const fees = await ctx.prisma.membershipFee.findMany();
      return fees;
    },
  },
  Mutation: {
    createMember: async (_parent: any, args: any, ctx: GraphQLCTX) => {
      const { member } = args;
      const creation = await ctx.prisma.member.create({
        data: { ...member, userId: ctx.session.user.id },
      });

      return creation;
    },
    updateMember: async (_parent: any, args: any, ctx: GraphQLCTX) => {
      const { updateMember } = args;
      const update = await ctx.prisma.member.update({
        data: { ...updateMember },
        where: { userId: ctx.session.user.id },
      });

      return update;
    },
    updateTotalDue: async (_parent: any, args: any, ctx: GraphQLCTX) => {
      const { updateTotalDue } = args;
      const { amount } = updateTotalDue;

      const update = ctx.prisma.$executeRaw`
        UPDATE "member"
        SET "totalDue" = GREATEST("totalDue" - ${amount}, 0)
        WHERE "userId" = ${ctx.session.user.id};
      `;

      return update;
    },
    initializePayment: async (_parent: any, args: any, ctx: GraphQLCTX) => {
      const { initPay } = args;
      const payload = { ...initPay, email: ctx.session.user.email };

      return await InitializePaystackPayment(payload);
    },
    createPayment: async (_parent: any, args: any, ctx: GraphQLCTX) => {
      const d = new Date();
      const date = { periodMonth: d.getMonth(), periodYear: d.getFullYear() };

      const { createPay } = args;
      const payload = { ...createPay, ...date };

      const create = await ctx.prisma.payment.create({
        data: { ...payload, userId: ctx.session.user.id },
      });

      return create;
    },
    updatePayment: async (_parent: any, args: any, ctx: GraphQLCTX) => {
      const { updatePay } = args;
      const { id, ...rest } = updatePay;

      const update = await ctx.prisma.payment.update({
        data: { ...rest },
        where: { id, userId: ctx.session.user.id },
      });

      return update;
    },
  },
};

export { Resolvers };
