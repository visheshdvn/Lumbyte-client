-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "password" VARCHAR(250) NOT NULL,
    "facebook" VARCHAR(50),
    "twitter" VARCHAR(50),
    "instagram" VARCHAR(50),
    "linkedin" VARCHAR(50),
    "github" VARCHAR(50),
    "behance" VARCHAR(50),
    "pintrest" VARCHAR(50),
    "eyeem" VARCHAR(50),
    "px365" VARCHAR(50),
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "disabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminAccount" (
    "id" SERIAL NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "restricted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AdminAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blogposts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "slug" TEXT NOT NULL,
    "metaDescription" VARCHAR(200),
    "excerpt" VARCHAR(150),
    "content" TEXT,
    "banner" VARCHAR(255),
    "banneralt" VARCHAR(255),
    "minuteRead" SMALLINT DEFAULT 1,
    "featured" BOOLEAN DEFAULT false,
    "topPick" BOOLEAN DEFAULT false,
    "date" TIMESTAMP(0),
    "authorId" TEXT,
    "topicsId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "published_at" TIMESTAMP(3),
    "published" BOOLEAN NOT NULL DEFAULT false,
    "blocked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Blogposts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstname" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50),
    "username" VARCHAR(20) NOT NULL,
    "about" VARCHAR(200),
    "dp" TEXT,
    "dpalt" TEXT,
    "email" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(15),
    "role" VARCHAR(50) NOT NULL DEFAULT E'public',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "adminGrant" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "tagname" VARCHAR(40) NOT NULL,
    "color" VARCHAR(25),
    "metaDescription" VARCHAR(200),
    "ogimg" VARCHAR(250),
    "ogalt" VARCHAR(30),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "published_at" TIMESTAMP(3),
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topics" (
    "id" SERIAL NOT NULL,
    "topicname" VARCHAR(50),
    "metaDescription" VARCHAR(200),
    "ogimg" VARCHAR(250),
    "ogalt" VARCHAR(30),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "published_at" TIMESTAMP(3),
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Topics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AccountToBlogposts" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BlogpostsToTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_userId_key" ON "Account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AdminAccount_userId_key" ON "AdminAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Blogposts_slug_key" ON "Blogposts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Blogposts_content_key" ON "Blogposts"("content");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_id_key" ON "Tags"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_tagname_key" ON "Tags"("tagname");

-- CreateIndex
CREATE UNIQUE INDEX "Topics_topicname_key" ON "Topics"("topicname");

-- CreateIndex
CREATE UNIQUE INDEX "_AccountToBlogposts_AB_unique" ON "_AccountToBlogposts"("A", "B");

-- CreateIndex
CREATE INDEX "_AccountToBlogposts_B_index" ON "_AccountToBlogposts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BlogpostsToTags_AB_unique" ON "_BlogpostsToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_BlogpostsToTags_B_index" ON "_BlogpostsToTags"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminAccount" ADD CONSTRAINT "AdminAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blogposts" ADD CONSTRAINT "Blogposts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blogposts" ADD CONSTRAINT "Blogposts_topicsId_fkey" FOREIGN KEY ("topicsId") REFERENCES "Topics"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountToBlogposts" ADD FOREIGN KEY ("A") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountToBlogposts" ADD FOREIGN KEY ("B") REFERENCES "Blogposts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogpostsToTags" ADD FOREIGN KEY ("A") REFERENCES "Blogposts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogpostsToTags" ADD FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
