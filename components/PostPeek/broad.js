import React from "react";
import Image from "next/image";
import Link from "next/link";

import FormattedDate from "../../components/micro/formattedDate";
import ShowTags from "../../components/micro/showTags";
import { getValidImageURL } from "../../utils/checkValidURL";

const BroadPeek = ({
  data: { excerpt, title, slug, author, tags, banner, banneralt, date },
}) => {
  
  return (
    <article className="mb-16 flex sm:mb-16 md:mb-20 lg:mb-24">
      <Link href={`/post/${slug}`}>
        <div className="text-grayMain dark:text-whiteMain z-0 grid w-full cursor-pointer grid-cols-12 gap-1 hover:opacity-70 dark:hover:text-gray-400">
          <div className="col-span-12 flex h-auto items-center justify-center md:col-span-4 md:justify-start">
            <div
              style={{ aspectRatio: "8/5" }}
              className="relative h-44 md:h-32 lg:h-44 xl:h-52"
            >
              <Image
                src={banner}
                alt={banneralt}
                layout="fill"
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL={banner}
              />
            </div>
          </div>
          <div className="col-span-12 flex flex-col items-center justify-center py-3 md:col-span-4 md:flex-row md:py-0">
            <div className="z-10 flex md:hidden">
              {tags.map((tag) => (
                <ShowTags
                  tagname={tag.tagname}
                  color={tag.color}
                  key={tag.tagname}
                />
              ))}
            </div>
            {/* <a href={`/post/${slug}`}> */}
            <h1 className="xl:text-4.5xl md:text-2.75xl text-2.75xl font-raleway mt-3 text-center font-black leading-tight sm:text-4xl sm:leading-tight md:mt-0 md:leading-tight lg:text-4xl lg:leading-tight xl:leading-tight">
              {title}
            </h1>
            {/* </a> */}
          </div>
          <div className="col-span-12 flex items-center justify-center md:col-span-4">
            <div className="flex flex-col items-center justify-between md:h-32 lg:h-44 xl:h-52">
              <div className="hidden justify-center md:flex">
                {tags.map((tag) => (
                  <ShowTags
                    tagname={tag.tagname}
                    color={tag.color}
                    key={tag.tagname}
                  />
                ))}
              </div>
              <p className="my-2 mb-3 px-3 text-center font-serif text-sm md:mb-0 md:max-w-sm lg:my-0 lg:text-base">
                {excerpt}
              </p>
              <div className="flex items-center justify-center">
                <h4 className="font-open-sans font-bold lg:text-lg xl:text-xl">
                  {author.firstname + " " + author.lastname}
                </h4>
                <div
                  style={{ width: "1px", height: "15px" }}
                  className="bg-margins mx-2"
                />
                <h5 className="font-light">
                  <FormattedDate date={date} />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BroadPeek;
