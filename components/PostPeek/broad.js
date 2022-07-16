import React from "react";
import Image from "next/image";
import Link from "next/link";

import FormattedDate from "../../components/micro/formattedDate";
import ShowTags from "../../components/micro/showTags";

const BroadPeek = ({
  data: {
    excerpt,
    title,
    slug,
    author: { firstname, lastname, dp, dpalt, username },
    tags,
    banner,
    banneralt,
    published_at,
    created_at,
  },
}) => {
  return (
    <article className="mb-16 flex dark:text-white sm:mb-16 md:mb-20 lg:mb-24">
      <div className=" z-0 grid w-full grid-cols-12 gap-1">
        <div className="col-span-12 flex h-auto items-center justify-center md:col-span-4 md:justify-start">
          <div
            style={{ aspectRatio: "8/5" }}
            className="relative h-36 md:h-32 lg:h-44"
          >
            <a href={`/story/${username}/${slug}`}>
              <Image
                src={banner}
                alt={banneralt}
                layout="fill"
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="https://lumbytes-general.s3.eu-west-1.amazonaws.com/defaultOG-small.png"
              />
            </a>
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
          <Link href={`/story/${username}/${slug}`} passHref>
            <a className="text-2.75xl font-primary sm:text-3.5xl lg:text-3.5xl mt-3 transform text-center font-bold leading-tight transition-all duration-300 hover:underline sm:leading-tight md:mt-0 md:text-2xl md:leading-tight lg:leading-tight">
              {title}
            </a>
          </Link>
        </div>
        <div className="col-span-12 flex items-center justify-center md:col-span-4">
          <div className="flex flex-col items-center justify-between md:h-32 lg:h-44 lg:pl-5">
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
            {/* author and date */}
            <div className="font-primary flex items-center justify-center text-sm">
              <Link href={`/${username}`} passHref>
                <a className="flex">
                  {(dp && (
                    <Image
                      src={dp}
                      alt={dpalt}
                      width={20}
                      height={20}
                      className="overflow-hidden rounded-full"
                    />
                  )) || (
                    <div className="aspect-1 flex h-[20px] items-center justify-center rounded-full bg-gray-800">
                      {/* {defaultUser} */}
                      <svg
                        viewBox="0 0 18 19"
                        xmlns="http://www.w3.org/2000/svg"
                        className="aspect-1 w-full scale-75 transform rounded-full bg-transparent fill-white"
                      >
                        <path d="M4.5 4.5C4.5 6.981 6.519 9 9 9C11.481 9 13.5 6.981 13.5 4.5C13.5 2.019 11.481 0 9 0C6.519 0 4.5 2.019 4.5 4.5ZM17 19H18V18C18 14.141 14.859 11 11 11H7C3.14 11 0 14.141 0 18V19H17Z" />
                      </svg>
                    </div>
                  )}
                  <h5 className="ml-2 font-medium">
                    {firstname} {lastname || ""}
                  </h5>
                </a>
              </Link>
              <span className="px-1">•</span>
              <h5 className="font-normal">
                <FormattedDate date={published_at || created_at} />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BroadPeek;
