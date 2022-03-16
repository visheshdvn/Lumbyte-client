/*
  Warnings:

  - You are about to drop the column `ogimg` on the `Tags` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tags" DROP COLUMN "ogimg",
ADD COLUMN     "ogImg" VARCHAR(250) DEFAULT E'https://lumbytes-general.s3.eu-west-1.amazonaws.com/defaultOG-medium.png';
