import React, { useState, useEffect } from "react";
import axios from "../../../lib/axios";
import Link from "next/link";
import { useSession } from "next-auth/react";
import qs from "qs";
// components
import Navbar from "../../../components/elements/navbar/Navbar-client";
import Footer from "../../../components/elements/footer/Footer";
import FormattedDate from "../../../components/micro/formattedDate";
import HeadTags from "../../../components/headTags/unIndexed/creator/stories";
import CreatorSideBar from "../../../components/elements/sideBar/creatorsPanelSidebar";
import { edit } from "../../../components/icons/creatorPanel";
import { useRouter } from "next/router";

const TAKE_IN_REQUEST = 10000;

const Me = () => {
  const [posts, setPosts] = useState({
    data: [],
    skipped: 0,
    taken: TAKE_IN_REQUEST,
  });
  const { data: session, status } = useSession();

  const router = useRouter();

  async function fetchData() {
    const {
      data: { data },
    } = await axios.get(
      `/user/${session.user.username}/stories?${qs.stringify({
        skip: 0,
        take: TAKE_IN_REQUEST,
        includePublishStatus: true,
        ...router.query,
      })}`
    );
    setPosts({ data: data, skipped: 0, taken: TAKE_IN_REQUEST });
  }

  useEffect(async () => {
    if (session) {
      fetchData();
    }
  }, [session, status, router.query]);

  if (status === "loading" || status === "unauthenticated" || !session) {
    return <div>Loading</div>;
  }

  return (
    <>
      {/* meta tags */}
      <HeadTags title={"My Stories"} />

      {/* body */}
      <Navbar />
      <div
        style={{ minHeight: "65vh" }}
        className="horizontal-spacing container mx-auto mb-20"
      >
        <div className="my-10 grid grid-cols-10 gap-4 px-3">
          <div className="col-span-2 border-r dark:border-zinc-700">
            <div className="fixed">
              <CreatorSideBar />
            </div>
          </div>
          <div className="col-span-8">
            <div className="mb-16 flex items-center justify-between">
              <h1 className="font-primary text-2xl font-bold leading-none">
                Stories
              </h1>
              <div>
                <Link href={"/me/stories/create"}>
                  <a>
                    <button className="h-10 transform rounded-lg border bg-black px-3 text-base font-bold text-white transition-all duration-200 ease-in hover:border-2 hover:border-black hover:bg-white hover:text-black">
                      + Add New
                    </button>
                  </a>
                </Link>
              </div>
            </div>
            <main>
              <div className="grid grid-cols-12 gap-4 pb-1">
                <TableHead text="title" span={5} />
                <TableHead text="space" className="hidden" />
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
      <Footer />
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
  console.log(title, id);

  return (
    <article className="font-primary h-27 grid grid-cols-12 gap-4 border-t dark:border-zinc-700">
      <div className="col-span-5 flex h-full flex-col justify-center">
        <h1 className="font-primary line-clamp-2 mb-2 text-lg font-semibold leading-tight">
          {title}
        </h1>
        <p className="font-primary line-clamp-1 text-sm font-medium leading-tight text-neutral-500">
          {excerpt}
        </p>
      </div>
      <span>&nbsp;</span>
      <div className="col-span-2 flex items-center text-sm font-medium">
        {published_at ? <FormattedDate date={published_at} /> : <p>--</p>}
      </div>
      <div className="col-span-2 flex items-center text-sm font-medium">
        {published !== false ? (
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
