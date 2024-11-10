/*
  Warnings:

  - You are about to drop the column `ecategory_id` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_ecategory_id_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "ecategory_id",
ADD COLUMN     "category_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
