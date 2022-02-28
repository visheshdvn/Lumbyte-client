/*
  Warnings:

  - You are about to drop the column `count` on the `Blogposts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blogposts" DROP COLUMN "count",
ADD COLUMN     "n" BIGSERIAL NOT NULL;
