/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "cpf" TEXT NOT NULL DEFAULT '000.000.000.00';

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");
