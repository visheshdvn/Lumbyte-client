import React from "react";
import Link from "next/link";
import DateMinute from "../micro/dateMinute";
import { isValidURL } from "../../utils/checkValidURL";
import FormattedDate from "../micro/formattedDate";

const Latest = ({ big, side }) => {
  const { title, tags, banner, date, slug, author } = big;

  let source = null;
  if (isValidURL(banner.url)) {
    source = bannerUrl;
  } else {
    source = `${process.env.PROTOCOL}://${process.env.HOSTNAME}${banner.url}`;
  }

  return (
    <div
      style={{ minHeight: "12rem" }}
      className="container xl:h-100 lg:h-96 md:h-80 h-auto mx-auto horizontal-spacing grid gap-1 grid-cols-12 lg:my-12 md:my-5 my-3"
    >
      <div className="xl:col-span-9 md:col-span-8 col-span-12 relative overflow-hidden">
        <Link href={`/post/${slug}`}>
          <a className="relative">
            <div className="h-full w-full relative">
              <img
                src={source}
                alt={banner.alternativeText}
                className="between-rel-parent"
              />

              <div
                style={{ backgroundColor: "rgba(38, 38, 17, 0.85)" }}
                className="w-4/5 absolute bottom-8 px-5 py-6"
              >
                <div className="flex mb-4">
                  {tags.map((tag) => (
                    <ShowTags tagname={tag.tagname} color={tag.color} />
                  ))}
                </div>
                <h1 className="text-whiteMain font-raleway font-black text-4xl">
                  {title}
                </h1>
                <div className="mt-4 flex items-center">
                  <h4 className="font-open-sans text-whiteMain text-xl font-bold">
                    {author.firstname + " " + author.lastname}
                  </h4>
                  <div
                    style={{ width: "1px", height: "15px" }}
                    className="bg-whiteMain-50 mx-2"
                  />
                  <h5 className="text-whiteMain font-light">
                    <FormattedDate date={date} />
                  </h5>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="xl:col-span-3 md:col-span-4 col-span-12 pl-3">
        {side.map((item) => (
          <SideHeads
            title={item.title}
            date={item.date}
            slug={item.slug}
            author={author}
          />
        ))}
      </div>
    </div>
  );
};

function ShowTags({ tagname, color }) {
  return (
    <Link href={`/tag/${tagname}`}>
    <h3
      style={{ backgroundColor: `${color}`, padding: "2px 4px" }}
      className="text-whiteMain uppercase mr-4 text-lg font-raleway font-black leading-none"
    >
      {tagname}
    </h3>
    </Link>
  );
}

function SideHeads({ title, date, slug, author }) {
  return (
    <div className="text-grayMain dark:text-whiteMain hover:opacity-70 dark:hover:text-gray-400 special-dividers">
      <Link href={`/post/${slug}`}>
        <a>
          <h1
            style={{ fontSize: "32px" }}
            className="font-raleway font-black leading-tight"
          >
            {title}
          </h1>
        </a>
      </Link>
      <div style={{ paddingTop: "2px" }} className="flex items-center">
        <h4 className="font-open-sans text-lg font-bold">
          {author.firstname + " " + author.lastname}
        </h4>
        <div
          style={{ width: "1px", height: "15px" }}
          className="mx-2 bg-margins"
        />
        <h5 className="font-light text-sm">
          <FormattedDate date={date} />
        </h5>
      </div>
    </div>
  );
}

export default Latest;
