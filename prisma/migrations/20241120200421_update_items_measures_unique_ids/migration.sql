/*
  Warnings:

  - You are about to drop the column `user_id` on the `Venta` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[measures_id,product_id]` on the table `ItemsMeasures` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "user_id";

-- CreateIndex
CREATE UNIQUE INDEX "ItemsMeasures_measures_id_product_id_key" ON "ItemsMeasures"("measures_id", "product_id");
