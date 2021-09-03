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
    <article className="flex mb-24">
      <Link href={`/post/${slug}`}>
        <div className="text-grayMain dark:text-whiteMain hover:opacity-70 dark:hover:text-gray-400 grid gap-1 grid-cols-12 w-full cursor-pointer">
          <div className="col-span-4 h-64 flex items-center">
            <div style={{ aspectRatio: "8/5" }} className="relative h-60">
              <Image
                src={source}
                alt={banner.alternativeText}
                layout="fill"
              />
            </div>
          </div>
          <div className="col-span-4 flex items-center justify-center">
            <h1 className="text-4.5xl font-raleway font-black leading-tight text-center">
              {title}
            </h1>
          </div>
          <div className="col-span-4 flex items-center justify-center">
            <div className="h-60 flex flex-col justify-between items-center">
              <div className="flex justify-center">
                {tags.map((tag) => (
                  <ShowTags tagname={tag.tagname} color={tag.color} />
                ))}
              </div>
              <p className="font-serif text-center px-3 text-lg max-w-sm">{excerpt}</p>
              <div className="flex justify-center items-center">
                <h4 className="font-open-sans text-xl font-bold">
                  {author.firstname + " " + author.lastname}
                </h4>
                <div
                  style={{ width: "1px", height: "15px" }}
                  className="mx-2 bg-margins"
                />
                <h5 className="font-light text-xl">
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
          className="text-whiteMain uppercase text-lg font-open-sans font-bold leading-none margin-tags cursor-pointer"
        >
          {tagname}
        </h3>
    </Link>
  );
}

export default BroadPeek;
