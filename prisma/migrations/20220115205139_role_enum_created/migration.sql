/*
  Warnings:

  - You are about to alter the column `color` on the `Tags` table. The data in that column could be lost. The data in that column will be cast from `VarChar(25)` to `VarChar(7)`.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPERUSER', 'ADMIN', 'CREATOR', 'PUBLIC');

-- AlterTable
ALTER TABLE "Tags" ALTER COLUMN "color" SET DEFAULT E'#3B82F6',
ALTER COLUMN "color" SET DATA TYPE VARCHAR(7);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'PUBLIC';
