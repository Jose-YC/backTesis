/*
  Warnings:

  - You are about to drop the column `transactionId` on the `Venta` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "ClientType" ADD VALUE 'GENERAL';

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "transactionId";
