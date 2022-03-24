import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Link from "next/link";
// components
import Navbar from "../../components/elements/navbar/Navbar-client";
import Footer from "../../components/elements/footer/Footer";
import { PrismaClient } from "@prisma/client";
import ShowTags, { DisplayTags } from "../../components/micro/showTags";
import FormattedDate from "../../components/micro/formattedDate";

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

      {/* body */}
      <Navbar />
      <div className="horizontal-spacing container mx-auto">
        <div className="my-10 grid grid-cols-4 gap-4">
          <section className="col-span-1 border-r border-neutral-400 pb-10">
            <div className="flex flex-col items-center">
              <img
                src={dp}
                alt={dpalt}
                className="aspect-1 border-grayMain mb-2 h-52 rounded-full border-4"
              />
              <h1 className="text-2xl font-bold">
                {firstname} {lastname || ""}
              </h1>
              <h2 className="font-primary mt-1 text-sm text-neutral-500">
                {role.toLowerCase()} on LumBytes
              </h2>
              <p className="mt-8 px-2 text-center text-sm">{about}</p>
            </div>
          </section>
          <section className="col-span-3">
            <div className="mb-10 flex border-b px-5">
              <h4 className="border-b-2 border-gray-900 px-2 text-lg font-bold ">
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
  } = data;

  return (
    <article className="mb-20">
      <div className="flex">
        <div className="relative flex-1 pr-5">
          <div className="mb-2 flex">
            <DisplayTags tags={tags} />
          </div>
          <Link href={`/post/${slug}`} prefetch={false}>
            <h1
              style={{ lineHeight: "111%" }}
              className="mb-1 cursor-pointer text-2xl font-bold"
            >
              {title}
            </h1>
          </Link>
          <p className="line-clamp-1 mb-10 font-serif">{excerpt}</p>

          {/* date time */}
          <div className="font-primary absolute bottom-1 flex items-center justify-center text-sm">
            <h5 className="font-normal">
              <FormattedDate date={published_at || created_at} />
              <span className="px-2">•</span>
              <span>{minuteRead} minutes read</span>
            </h5>
          </div>
        </div>
        <div className="flex items-center">
          <div
            style={{ backgroundImage: `url(${banner})` }}
            className="aspect-h-10 aspect-w-16 w-52 bg-cover bg-center"
          ></div>
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
