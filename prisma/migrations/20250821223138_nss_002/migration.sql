-- CreateTable
CREATE TABLE "public"."member" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "certification" TEXT,
    "profession" TEXT,
    "role" TEXT,
    "status" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "member_userId_key" ON "public"."member"("userId");

-- AddForeignKey
ALTER TABLE "public"."member" ADD CONSTRAINT "member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
