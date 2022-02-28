/*
  Warnings:

  - The primary key for the `Blogposts` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_commentId_fkey";

-- DropForeignKey
ALTER TABLE "_AccountToBlogposts" DROP CONSTRAINT "_AccountToBlogposts_B_fkey";

-- DropForeignKey
ALTER TABLE "_BlogpostsToTags" DROP CONSTRAINT "_BlogpostsToTags_A_fkey";

-- AlterTable
ALTER TABLE "Blogposts" DROP CONSTRAINT "Blogposts_pkey",
ADD COLUMN     "created" BIGSERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Blogposts_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Blogposts_id_seq";

-- AlterTable
ALTER TABLE "Comments" ALTER COLUMN "commentId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_AccountToBlogposts" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_BlogpostsToTags" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Blogposts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountToBlogposts" ADD FOREIGN KEY ("B") REFERENCES "Blogposts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogpostsToTags" ADD FOREIGN KEY ("A") REFERENCES "Blogposts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
