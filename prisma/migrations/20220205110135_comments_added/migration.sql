/*
  Warnings:

  - Added the required column `commentId` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "commentId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tags" ADD COLUMN     "ogTitle" VARCHAR(55) DEFAULT E'';

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Blogposts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
