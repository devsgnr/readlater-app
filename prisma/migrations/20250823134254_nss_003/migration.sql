-- CreateTable
CREATE TABLE "public"."payment" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "accessCode" TEXT NOT NULL,
    "reference" TEXT,
    "trans" TEXT,
    "status" TEXT,
    "transaction" TEXT,
    "trxref" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."payment" ADD CONSTRAINT "payment_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "public"."member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
