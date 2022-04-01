import React from "react";
import Image from "next/image";
import FormattedDate from "../micro/formattedDate";
import ShowTags from "../micro/showTags";

const Latest = ({ big, side }) => {
  const { title, tags, banner, banneralt, published_at, slug, author } = big;

  return (
    <div
      style={{ minHeight: "12rem" }}
      className="horizontal-spacing container mx-auto mt-3 mb-14 grid h-auto grid-cols-12 gap-1 sm:mt-4 md:mt-0 md:mb-10 lg:mt-5 lg:mb-11 xl:mt-12 xl:mb-12"
    >
      <div className="col-span-12 overflow-hidden xl:col-span-9">
        <div className="aspect-h-10 aspect-w-16">
          <Image
            src={banner}
            alt={banneralt}
            layout="fill"
            className="hidden object-cover object-center sm:block"
            placeholder="blur"
            blurDataURL="https://lumbytes-general.s3.eu-west-1.amazonaws.com/defaultOG-large.png"
          />
          <div className="">
            {/* <div className="absolute bottom-8 hw-11/12 border border-red-900 px-4 py-5 md:px-5 md:py-6 lg:w-4/5"></div> */}
            <div
              style={{ backgroundColor: "rgba(38, 38, 17, 0.85)" }}
              className="absolute bottom-8 w-11/12 px-4 py-5 md:px-5 md:py-6 lg:w-4/5"
            >
              <div className="flex">
                {tags.map((tag) => (
                  <ShowTags
                    tagname={tag.tagname}
                    color={tag.color}
                    key={tag.tagname}
                    textClass="text-zinc-50"
                  />
                ))}
              </div>
              <a href={`/post/${slug}`}>
                <h1 className="font-primary lg:text-3.5xl md:text-2.75xl xl:text-3.5xl my-0 text-xl font-black leading-10 text-zinc-50 sm:my-3 sm:text-3xl md:my-2 lg:my-4">
                  {title}
                </h1>
              </a>
              <div className="font-primary flex items-center text-sm text-zinc-50">
                <a href={`/${author.username}`} className="flex">
                  {author.dp && (
                    <div className="relative mr-2 h-5 w-5 overflow-hidden rounded-full">
                      <Image
                        src={author.dp}
                        alt={author.dpalt}
                        layout="fill"
                        className="object-cover object-center"
                        placeholder="blur"
                        blurDataURL={author.dp}
                      />
                    </div>
                  )}
                  <h4 className="font-medium">
                    <span className="">
                      {author.firstname} {author.lastname || ""}
                    </span>
                  </h4>
                </a>
                <span className="px-2">•</span>
                <h5 className="text-whiteMain font-normal">
                  <FormattedDate date={published_at} />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 mt-4 pl-3 md:mt-4 lg:mt-5 xl:col-span-3 xl:mt-0">
        {side.map((item) => (
          <SideHeads
            title={item.title}
            date={item.published_at}
            slug={item.slug}
            tags={item.tags}
            author={item.author}
            key={item.slug}
          />
        ))}
      </div>
    </div>
  );
};

function SideHeads({ title, date, slug, author, tags }) {
  return (
    // special-dividers
    <>
      <div className="special-dividers">
        {/* tags */}
        <div className="flex justify-center md:justify-start">
          {tags.map((tag) => (
            <ShowTags
              tagname={tag.tagname}
              color={tag.color}
              key={tag.tagname}
            />
          ))}
        </div>
        {/* title */}
        <a href={`/post/${slug}`} className="">
          <h1
            style={{ lineHeight: "111%" }}
            className="font-primary md:text-2.75xl my-3 text-center text-2xl font-bold hover:opacity-90 sm:text-3xl md:text-left"
          >
            {title}
          </h1>
        </a>
        {/* author and date */}
        <div className="font-primary flex items-center justify-center text-sm md:justify-start">
          <a href={`/${author.username}`} className="flex">
            {author.dp && (
              <div className="relative mr-2 h-5 w-5 overflow-hidden rounded-full">
                <Image
                  src={author.dp}
                  alt={author.dpalt}
                  layout="fill"
                  className="object-cover object-center"
                  placeholder="blur"
                  blurDataURL={author.dp}
                />
              </div>
            )}
            <h4 className="text-whiteMain font-medium">
              <span>
                {author.firstname} {author.lastname || ""}
              </span>
            </h4>
          </a>
          <span className="px-2">•</span>
          <h5 className="text-whiteMain font-normal">
            <FormattedDate date={date} />
          </h5>
        </div>
      </div>
    </>
  );
}

export default Latest;
