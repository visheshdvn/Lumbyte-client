-- AlterTable
ALTER TABLE "Blogposts" ADD COLUMN     "commenting" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Tags" ALTER COLUMN "ogimg" SET DEFAULT E'';
