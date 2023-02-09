-- AlterTable
ALTER TABLE "sales" ALTER COLUMN "sales" SET DEFAULT 0,
ALTER COLUMN "sales" DROP DEFAULT;
DROP SEQUENCE "sales_sales_seq";
