/*
  Warnings:

  - Added the required column `value` to the `DetalleMeasures` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "DetalleCategory" DROP CONSTRAINT "DetalleCategory_category_id_fkey";

-- DropForeignKey
ALTER TABLE "DetalleCategory" DROP CONSTRAINT "DetalleCategory_product_id_fkey";

-- DropForeignKey
ALTER TABLE "DetalleMeasures" DROP CONSTRAINT "DetalleMeasures_measures_id_fkey";

-- DropForeignKey
ALTER TABLE "DetalleMeasures" DROP CONSTRAINT "DetalleMeasures_product_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_rolName_fkey";

-- AlterTable
ALTER TABLE "DetalleMeasures" ADD COLUMN     "value" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rolName_fkey" FOREIGN KEY ("rolName") REFERENCES "Rol"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleMeasures" ADD CONSTRAINT "DetalleMeasures_measures_id_fkey" FOREIGN KEY ("measures_id") REFERENCES "Measures"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleMeasures" ADD CONSTRAINT "DetalleMeasures_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleCategory" ADD CONSTRAINT "DetalleCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleCategory" ADD CONSTRAINT "DetalleCategory_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
