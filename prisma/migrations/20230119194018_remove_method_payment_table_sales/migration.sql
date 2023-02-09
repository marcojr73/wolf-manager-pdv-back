/*
  Warnings:

  - You are about to drop the column `costPrice` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethod` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `paymentTime` on the `sales` table. All the data in the column will be lost.
  - Added the required column `price` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sales" DROP COLUMN "costPrice",
DROP COLUMN "paymentMethod",
DROP COLUMN "paymentTime",
ADD COLUMN     "price" INTEGER NOT NULL;
