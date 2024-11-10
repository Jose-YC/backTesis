/*
  Warnings:

  - You are about to drop the column `value` on the `DetalleMeasures` table. All the data in the column will be lost.
  - You are about to drop the column `min_stock` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Product` table. All the data in the column will be lost.
  - Added the required column `min_stock` to the `DetalleMeasures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `DetalleMeasures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetalleMeasures" DROP COLUMN "value",
ADD COLUMN     "min_stock" INTEGER NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "min_stock",
DROP COLUMN "stock";
