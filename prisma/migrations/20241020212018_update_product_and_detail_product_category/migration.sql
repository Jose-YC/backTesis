/*
  Warnings:

  - Added the required column `base_priece` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "DetalleCategory_category_id_product_id_key";

-- AlterTable
ALTER TABLE "DetalleCategory" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "DetalleCategory_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "base_priece" DOUBLE PRECISION NOT NULL;
