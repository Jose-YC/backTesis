/*
  Warnings:

  - You are about to drop the column `subTotal` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `tax` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `transactionId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Order` table. All the data in the column will be lost.
  - Added the required column `state` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mesures_id` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'DELIVERED', 'CANCELLED');

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_user_id_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "subTotal",
DROP COLUMN "tax",
DROP COLUMN "transactionId",
DROP COLUMN "user_id",
ADD COLUMN     "deliveredAt" TIMESTAMP(3),
ADD COLUMN     "state" "OrderStatus" NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "mesures_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Venta" ADD COLUMN     "state" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_mesures_id_fkey" FOREIGN KEY ("mesures_id") REFERENCES "Measures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
