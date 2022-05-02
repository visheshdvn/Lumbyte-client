/*
  Warnings:

  - You are about to drop the column `behance` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `eyeem` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `facebook` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `pintrest` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `px365` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the `AdminAccount` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AdminAccount" DROP CONSTRAINT "AdminAccount_userId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "behance",
DROP COLUMN "eyeem",
DROP COLUMN "facebook",
DROP COLUMN "instagram",
DROP COLUMN "pintrest",
DROP COLUMN "px365";

-- DropTable
DROP TABLE "AdminAccount";
