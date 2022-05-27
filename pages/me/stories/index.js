import React, { useState, useEffect } from "react";
import axios from "../../../lib/axios";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
// components
import Navbar from "../../../components/elements/navbar/Navbar-client";
import Footer from "../../../components/elements/footer/Footer";
import { DisplayTags } from "../../../components/micro/showTags";
import FormattedDate from "../../../components/micro/formattedDate";
import HeadTags from "../../../components/headTags/creators/stories";

const TAKE_IN_REQUEST = 10;

const Me = ({ user }) => {
  //   const { about, dp, dpalt } = user;
  const [posts, setPosts] = useState({
    data: [],
    skipped: 0,
    taken: TAKE_IN_REQUEST,
  });
  const { data: session, status } = useSession();

  useEffect(async () => {
    if (session) {
      const {
        data: { data },
      } = await axios.get(
        `/user/${session?.user.username}/stories?skip=0&take=${TAKE_IN_REQUEST}`
      );
      setPosts({ data: data, skipped: 0, taken: TAKE_IN_REQUEST });
    }
  }, [session, status]);

  if (status === "loading" || status === "unauthenticated" || !session) {
    return <div>Loading</div>;
  }

  return (
    <>
      {/* meta tags */}
      <HeadTags title={"My Stories"} />

      {/* body */}
      <Navbar />
      <div className="horizontal-spacing container mx-auto">
        <div className="my-10 grid grid-cols-4 gap-4">
          <section className="order-2 col-span-4 lg:order-1 lg:col-span-3">
            <div className="mb-8 flex border-b px-3 dark:border-zinc-700 lg:px-5">
              <h4 className="border-b-2 border-gray-900 px-2 text-lg font-bold dark:border-neutral-300">
                Stories
              </h4>
            </div>
            <div className="px-3 lg:pr-3 lg:pl-0">
              {!posts.data.length ? (
                <div className="aspect-w-16 aspect-h-6 w-full">
                  <div className="flex items-center justify-center">
                    <h2 className="font-primary text-lg font-bold">
                      No Stories
                    </h2>
                  </div>
                </div>
              ) : (
                <div>
                  {posts.data.map((post) => (
                    <AuthorPagePeek key={post.slug} data={post} />
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="order-1 col-span-4 pb-8 dark:border-zinc-700 lg:order-2 lg:col-span-1 lg:border-l lg:pb-10">
            <div className="pl-2"></div>
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
