import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Link from "next/link";
import Image from "next/image";
// components
import Navbar from "../../components/elements/navbar/Navbar-client";
import Footer from "../../components/elements/footer/Footer";
import { PrismaClient } from "@prisma/client";
import ShowTags, { DisplayTags } from "../../components/micro/showTags";
import FormattedDate from "../../components/micro/formattedDate";
import UserTags from "../../components/headTags/public/userTags";

const TAKE_IN_REQUEST = 10;

const Me = ({ user }) => {
  const { firstname, lastname, username, about, dp, dpalt, role, account } =
    user;
  const [posts, setPosts] = useState({
    data: [],
    skipped: 0,
    taken: TAKE_IN_REQUEST,
  });

  useEffect(async () => {
    const {
      data: { status, data },
    } = await axios.get(
      `/blogposts?_select=excerpt&_select=minuteRead&_select=banner&_select=tags&_select=banneralt&take=${TAKE_IN_REQUEST}`
    );

    setPosts({ data: data, skipped: 0, taken: TAKE_IN_REQUEST });
  }, []);

  return (
    <>
      {/* meta tags */}
      <UserTags
        firstname={firstname}
        lastname={lastname}
        username={username}
        about={about}
        ogImg={dp}
        ogAlt={dpalt}
      />

      {/* body */}
      <Navbar />
      <div className="horizontal-spacing container mx-auto">
        <div className="my-10 grid grid-cols-4 gap-4">
          <section className="col-span-4 pb-10 dark:border-zinc-700 lg:col-span-1 lg:border-r">
            <div className="top-0 flex items-center lg:flex-col">
              <img
                src={dp}
                alt={dpalt}
                className="aspect-1 border-grayMain mb-2 h-24 rounded-full border-4 md:h-32 lg:h-44 xl:h-52"
              />
              <div className="ml-3 md:ml-5 lg:ml-0 lg:text-center">
                <h1 className="text-2xl font-bold md:text-3xl lg:text-2xl">
                  {firstname} {lastname || ""}
                </h1>
                <h2 className="font-primary text-sm text-neutral-500 dark:text-zinc-200 lg:mt-1">
                  {role.toLowerCase()} on LumBytes
                </h2>
              </div>
              <p className="mt-8 hidden px-3 text-center text-sm lg:block">
                {about}
              </p>
            </div>
          </section>
          <section className="col-span-4 lg:col-span-3">
            <div className="mb-10 flex border-b px-5 dark:border-zinc-700">
              <h4 className="border-b-2 border-gray-900 px-2 text-lg font-bold dark:border-neutral-300 ">
                Posts
              </h4>
            </div>
            <div>
              {posts.data.map((post) => (
                <AuthorPagePeek key={post.slug} data={post} />
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

function AuthorPagePeek({ data }) {
  const {
    banner,
    banneralt,
    published_at,
    minuteRead,
    slug,
    title,
    tags,
    excerpt,
    author,
  } = data;

  return (
    <article className="mb-16 lg:mb-20">
      <div className="flex">
        <div className="relative flex-1 md:pr-3">
          <div className="mb-2 flex">
            <DisplayTags tags={tags} />
          </div>
          <Link href={`/story/${author.username}/${slug}`} prefetch={false}>
            <h1
              style={{ lineHeight: "111%" }}
              className="mb-1 cursor-pointer text-xl font-bold hover:underline md:text-2xl"
            >
              {title}
            </h1>
          </Link>
          <p className="md:line-clamp-1 mb-10 hidden font-serif">{excerpt}</p>

          {/* date time */}
          <div className="font-primary bottom-1 mt-3 flex items-center justify-start text-sm md:absolute md:mt-0">
            <h5 className="font-normal">
              <FormattedDate date={published_at || created_at} />
              <span className="px-2">•</span>
              <span>{minuteRead} minutes read</span>
            </h5>
          </div>
        </div>
        <div className="flex items-center">
          <Link href={`/story/${author.username}/${slug}`} passHref>
            <a>
              <div className="lg:aspect-h-10 lg:aspect-w-16 aspect-w-1 aspect-h-1 w-25 relative bg-cover bg-center md:w-32 lg:w-52">
                <Image
                  src={banner}
                  alt={banneralt}
                  layout="fill"
                  className="object-cover object-center"
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Me;

export async function getServerSideProps(ctx) {
  const {
    params: { profile },
  } = ctx;

  const prisma = new PrismaClient();
  const { user } = prisma;

  let userData = await user.findUnique({
    where: {
      username: profile,
    },
    select: {
      firstname: true,
      lastname: true,
      username: true,
      email: true,
      about: true,
      dp: true,
      dpalt: true,
      role: true,
      account: {
        select: {
          facebook: true,
          twitter: true,
          linkedin: true,
          instagram: true,
          github: true,
          behance: true,
          px365: true,
        },
      },
    },
  });

  prisma.$disconnect();

  if (!userData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: userData,
    },
  };
}
