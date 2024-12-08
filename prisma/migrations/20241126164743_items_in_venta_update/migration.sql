/*
  Warnings:

  - You are about to drop the column `itemsInOrder` on the `Venta` table. All the data in the column will be lost.
  - Added the required column `itemsInVenta` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "itemsInOrder",
ADD COLUMN     "itemsInVenta" INTEGER NOT NULL;
