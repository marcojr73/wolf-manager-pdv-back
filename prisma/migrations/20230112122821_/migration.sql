/*
  Warnings:

  - You are about to drop the column `allPurchases` on the `clients` table. All the data in the column will be lost.
  - Added the required column `adressId` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clients" DROP COLUMN "allPurchases",
ADD COLUMN     "adressId" INTEGER NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "adress" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "adress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_adressId_fkey" FOREIGN KEY ("adressId") REFERENCES "adress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
