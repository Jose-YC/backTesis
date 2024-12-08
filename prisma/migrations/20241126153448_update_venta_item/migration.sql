/*
  Warnings:

  - Added the required column `mesures_id` to the `VentaItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VentaItem" ADD COLUMN     "mesures_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "VentaItem" ADD CONSTRAINT "VentaItem_mesures_id_fkey" FOREIGN KEY ("mesures_id") REFERENCES "Measures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
