/*
  Warnings:

  - Added the required column `num_doc` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Venta" ADD COLUMN     "num_doc" TEXT NOT NULL;
