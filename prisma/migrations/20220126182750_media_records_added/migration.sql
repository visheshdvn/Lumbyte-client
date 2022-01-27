-- AlterTable
ALTER TABLE "Blogposts" ALTER COLUMN "metaDescription" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "Tags" ALTER COLUMN "metaDescription" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "Topics" ALTER COLUMN "metaDescription" SET DEFAULT E'';

-- CreateTable
CREATE TABLE "Images" (
    "id" TEXT NOT NULL,
    "url" VARCHAR(300) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Videos" (
    "id" TEXT NOT NULL,
    "url" VARCHAR(300) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Videos_pkey" PRIMARY KEY ("id")
);
