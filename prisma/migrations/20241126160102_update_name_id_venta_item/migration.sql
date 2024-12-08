/*
  Warnings:

  - You are about to drop the column `order_id` on the `VentaItem` table. All the data in the column will be lost.
  - Added the required column `venta_id` to the `VentaItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "VentaItem" DROP CONSTRAINT "VentaItem_order_id_fkey";

-- AlterTable
ALTER TABLE "VentaItem" DROP COLUMN "order_id",
ADD COLUMN     "venta_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "VentaItem" ADD CONSTRAINT "VentaItem_venta_id_fkey" FOREIGN KEY ("venta_id") REFERENCES "Venta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
