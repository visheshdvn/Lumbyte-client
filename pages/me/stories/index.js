import React, { useState, useEffect } from "react";
import axios from "../../../lib/axios";
import Link from "next/link";
import { useSession } from "next-auth/react";
// components
import Navbar from "../../../components/elements/navbar/Navbar-client";
import Footer from "../../../components/elements/footer/Footer";
import FormattedDate from "../../../components/micro/formattedDate";
import HeadTags from "../../../components/headTags/creators/stories";
import CreatorSideBar from "../../../components/elements/sideBar/creatorsPanelSidebar";
import { edit } from "../../../components/icons/creatorPanel";

const TAKE_IN_REQUEST = 10000;

const Me = () => {
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
        `/user/${session?.user.username}/stories?skip=0&take=${TAKE_IN_REQUEST}&includePublished=true`
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
        <div className="my-10 grid grid-cols-10 gap-4 px-3">
          <CreatorSideBar />
          <div className="col-span-8">
            <div className="mb-16 flex items-center justify-between">
              <h1 className="font-primary text-2xl font-bold leading-none">
                Stories
              </h1>
              <div>
                <button className="h-10 transform rounded-lg border bg-black px-3 text-base font-bold text-white transition-all duration-200 ease-in hover:border-2 hover:border-black hover:bg-white hover:text-black">
                  + Add New
                </button>
              </div>
            </div>
            <main>
              <div className="grid grid-cols-12 gap-4 pb-1">
                <TableHead text="title" span={5} />
                <TableHead text="" />
                <TableHead text="published" span={2} />
                <TableHead text="status" span={2} />
                <TableHead text="manage" span={2} />
              </div>
              <div className="">
                {posts.data.map((post) => (
                  <Peek key={post.slug} data={post} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
      {/* footer */}
      {/* <Footer /> */}
    </>
  );
};

function TableHead({ text, span }) {
  return (
    <h3 className={`uppercase col-span-${span || 1} text-base font-bold`}>
      {text}
    </h3>
  );
}

function Peek({ data }) {
  const { id, published_at, title, excerpt, published } = data;

  return (
    <article className="font-primary grid h-28 grid-cols-12 gap-4 border-t">
      <div className="col-span-5 flex h-full flex-col justify-center">
        <h1 className="font-primary line-clamp-2 mb-2 text-lg font-semibold leading-tight">
          {title}
        </h1>
        <p className="font-primary line-clamp-1 text-sm font-medium leading-tight text-neutral-500">
          {excerpt}
        </p>
      </div>
      <div></div>
      <div className="col-span-2 flex items-center text-sm font-medium">
        {published_at ? <FormattedDate date={published_at} /> : <p>--</p>}
      </div>
      <div className="col-span-2 flex items-center text-sm font-medium">
        {published ? (
          <div className="flex">
            <div className="flex items-center">
              <span className="aspect-1 w-1 rounded-full bg-green-600"></span>
            </div>
            <span className="pl-1 text-green-600">Live</span>
          </div>
        ) : (
          <div className="flex">
            <div className="flex items-center">
              <span className="aspect-1 w-1 rounded-full bg-red-600"></span>
            </div>
            <span className="pl-1 text-red-600">Draft</span>
          </div>
        )}
      </div>
      <div className="col-span-2 flex items-center">
        {/* <Link href={`/me/stories/${id}`} passHref> */}
        <a href={`/me/stories/${id}`}>
          <div className="aspect-1 w-4">{edit}</div>
        </a>
        {/* </Link> */}
      </div>
    </article>
  );
}

export default Me;
