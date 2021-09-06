import React from "react";
import Link from "next/link";
import { isValidURL } from "../../utils/checkValidURL";
import FormattedDate from "../micro/formattedDate";
import ShowTags from "../micro/showTags";

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
      className="grid gap-1 grid-cols-12 container xl:h-100 h-auto mx-auto horizontal-spacing xl:mt-12 xl:mb-12 lg:mt-5 lg:mb-11 md:mt-0 md:mb-10 sm:mt-4 mt-3 mb-14"
    >
      <div className="xl:col-span-9 col-span-12 overflow-hidden">
        <div className="h-full w-full flex flex-wrap relative">
          <a href={`/post/${slug}`}>
            <img
              src={source}
              alt={banner.alternativeText}
              className="transform scale-105 hidden sm:block"
            />
            <div
              style={{
                backgroundImage: `url(${source})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="border h-96 w-screen sm:hidden"
            ></div>
          </a>

          <div
            style={{ backgroundColor: "rgba(38, 38, 17, 0.85)" }}
            className="lg:w-4/5 w-11/12 absolute bottom-8 md:px-5 md:py-6 px-4 py-5"
          >
            <div className="flex">
              {tags.map((tag) => (
                <ShowTags
                  tagname={tag.tagname}
                  color={tag.color}
                  key={tag.tagname}
                />
              ))}
            </div>
            <a href={`/post/${slug}`}>
              <h1 className="text-whiteMain font-raleway font-black lg:my-4 sm:my-3 my-2 leading-tight xl:text-4xl lg:text-3.75 md:text-2.75xl sm:text-3xl text-2xl">
                {title}
              </h1>
            </a>
            <div className="flex items-center">
              <h4 className="font-open-sans text-whiteMain lg:text-lg md:text-lg text-sm font-bold">
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
      </div>
      <div className="xl:col-span-3 col-span-12 pl-3 mt-4 md:mt-4 lg:mt-5 xl:mt-0">
        {side.map((item) => (
          <SideHeads
            title={item.title}
            date={item.date}
            slug={item.slug}
            author={author}
            key={item.slug}
          />
        ))}
      </div>
    </div>
  );
};

function SideHeads({ title, date, slug, author }) {
  return (
    <div className="text-grayMain dark:text-whiteMain hover:opacity-70 dark:hover:text-gray-400 special-dividers">
      <a href={`/post/${slug}`} className="">
        <h1
          // style={{ fontSize: "32px" }}
          className="font-raleway font-black leading-tight xl:text-3.5 lg:text-3.75 md:text-2.75xl sm:text-3xl text-2xl text-center md:text-left"
        >
          {title}
        </h1>
      </a>
      <div className="flex items-center pt-1 justify-center md:justify-start">
        <h4 className="font-open-sans md:text-lg text-sm font-bold">
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
