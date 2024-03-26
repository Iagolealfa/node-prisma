/*
  Warnings:

  - Added the required column `body` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "subtitle" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "updateAt" SET DEFAULT CURRENT_TIMESTAMP;
