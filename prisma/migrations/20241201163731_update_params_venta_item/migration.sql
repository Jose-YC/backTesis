/*
  Warnings:

  - You are about to drop the column `num_doc` on the `Venta` table. All the data in the column will be lost.
  - Added the required column `income` to the `VentaItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemsMeasures" ALTER COLUMN "income" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "num_doc";

-- AlterTable
ALTER TABLE "VentaItem" ADD COLUMN     "income" DOUBLE PRECISION NOT NULL;
