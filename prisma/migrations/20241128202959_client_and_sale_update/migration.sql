/*
  Warnings:

  - The primary key for the `Client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dni` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `Client` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[num_doc]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `num_doc` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Venta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_payment` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ClientType" AS ENUM ('NATURAL', 'JURIDICO');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('EFECTIVO', 'CREDITO', 'DEBITO', 'TRANSFERENCIA');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('BOLETA', 'FACTURA', 'TICKET');

-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_client_id_fkey";

-- DropIndex
DROP INDEX "Client_dni_key";

-- AlterTable
ALTER TABLE "Client" DROP CONSTRAINT "Client_pkey",
DROP COLUMN "dni",
DROP COLUMN "lastname",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "num_doc" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "type" "ClientType" NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ADD CONSTRAINT "Client_pkey" PRIMARY KEY ("num_doc");

-- AlterTable
ALTER TABLE "Venta" ADD COLUMN     "type" "DocumentType" NOT NULL,
ADD COLUMN     "type_payment" "PaymentMethod" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Client_num_doc_key" ON "Client"("num_doc");

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("num_doc") ON DELETE RESTRICT ON UPDATE CASCADE;
