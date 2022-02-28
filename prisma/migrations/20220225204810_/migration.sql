/*
  Warnings:

  - You are about to drop the column `created` on the `Blogposts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blogposts" DROP COLUMN "created",
ADD COLUMN     "count" BIGSERIAL NOT NULL;
