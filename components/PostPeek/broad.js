import React from "react";
import Link from "next/link";
import Image from "next/image";

import FormattedDate from "../../components/micro/formattedDate";

const BroadPeek = ({
  data: { excerpt, title, slug, author, tags, banner, date },
}) => {
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  let source = null;
  if (validURL(banner.url)) {
    source = banner.url;
  } else {
    source = `${process.env.PROTOCOL}://${process.env.HOSTNAME}${banner.url}`;
  }
  return (
    <article className="flex lg:mb-24 md:mb-20 sm:mb-16 mb-16">
      <Link href={`/post/${slug}`}>
        <div className="grid gap-1 grid-cols-12 text-grayMain dark:text-whiteMain hover:opacity-70 dark:hover:text-gray-400 w-full cursor-pointer">
          <div className="md:col-span-4 col-span-12 h-auto flex items-center md:justify-start justify-center">
            <div
              style={{ aspectRatio: "8/5" }}
              className="relative xl:h-52 lg:h-44 md:h-32 h-44"
            >
              <Image src={source} alt={banner.alternativeText} layout="fill" />
            </div>
          </div>
          <div className="md:col-span-4 col-span-12 flex items-center justify-center md:flex-row flex-col py-3 md:py-0">
            <div className="flex md:hidden">
              {tags.map((tag) => (
                <ShowTags tagname={tag.tagname} color={tag.color} />
              ))}
            </div>
            <h1 className="xl:text-4.5xl lg:text-4xl md:text-2.75 sm:text-4xl text-4.5xl font-raleway font-black xl:leading-tight lg:leading-tight md:leading-tight text-center mt-3 md:mt-0">
              {title}
            </h1>
          </div>
          <div className="md:col-span-4 col-span-12 flex items-center justify-center">
            <div className="xl:h-60 lg:h-44 md:h-32 flex flex-col justify-between items-center">
              <div className="justify-center hidden md:flex">
                {tags.map((tag) => (
                  <ShowTags tagname={tag.tagname} color={tag.color} />
                ))}
              </div>
              <p className="font-serif text-center px-3 lg:text-base text-sm md:max-w-sm mb-3 md:mb-0 my-2 lg:my-0">
                {excerpt}
              </p>
              <div className="flex justify-center items-center">
                <h4 className="font-open-sans xl:text-xl lg:text-lg font-bold">
                  {author.firstname + " " + author.lastname}
                </h4>
                <div
                  style={{ width: "1px", height: "15px" }}
                  className="mx-2 bg-margins"
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

function ShowTags({ tagname, color }) {
  return (
    <Link href={`/tag/${tagname}`}>
      <h3
        style={{ backgroundColor: `${color}`, padding: "2px 4px" }}
        className="text-whiteMain uppercase lg:text-lg md:text-base text-l font-open-sans font-bold md:leading-none lg:leading-none leading-4 margin-tags cursor-pointer"
      >
        {tagname}
      </h3>
    </Link>
  );
}

export default BroadPeek;
