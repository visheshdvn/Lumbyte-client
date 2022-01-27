/*
  Warnings:

  - Added the required column `name` to the `Videos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Images" ADD COLUMN     "name" VARCHAR(150) NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "Videos" ADD COLUMN     "name" VARCHAR(150) NOT NULL;
