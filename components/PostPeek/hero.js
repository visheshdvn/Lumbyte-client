import React from "react";
import Image from "next/image";
import FormattedDate from "../micro/formattedDate";
import Link from "next/link";

const Hero = ({ big, side, featured }) => {
  const {
    title,
    tags,
    banner,
    banneralt,
    published_at,
    slug,
    author,
    excerpt,
  } = big;

  return (
    <div className="horizontal-spacing-wide container mx-auto mb-14 mt-5 grid h-auto grid-cols-3 gap-0 md:mb-10 lg:mt-8 lg:mb-11 xl:mb-24 xl:grid-cols-4">
      {/* col 1 */}
      <div className="order-3 col-span-3 border-zinc-300 pr-[10px] dark:border-zinc-700 xl:order-1 xl:col-span-1 xl:border-r">
        <h3 className="font-primary mt-8 mb-3 pt-2 text-sm font-bold text-amber-500 xl:mt-0">
          FEATURED
        </h3>
        <div className="flex flex-wrap xl:block xl:space-y-9">
          {featured.map((data) => (
            <FeaturedPeek data={data} key={data.title} />
          ))}
        </div>
      </div>
      {/* col 2 */}
      <div className="order-1 col-span-3 mb-12 pr-[10px] md:col-span-2 md:mb-0 xl:order-2 xl:px-[10px]">
        <div className="aspect-h-10 aspect-w-16 mb-4 overflow-hidden">
          <Link href={`/story/${author.username}/${slug}`} passHref>
            <a>
              <Image
                src={banner}
                alt={banneralt}
                layout="fill"
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL={banner}
                priority
              />
            </a>
          </Link>
        </div>
        {/* author data */}
        <div className="font-primary mb-2 flex items-center text-xs">
          <a href={`/${author.username}`} className="flex">
            {author.dp && (
              <Image
                src={author.dp}
                alt={author.dpalt}
                className="rounded-full object-cover object-center"
                placeholder="blur"
                blurDataURL={author.dp}
                height={20}
                width={20}
              />
            )}
            <h4 className="ml-2 flex items-center font-medium">
              <span className="">
                {author.firstname} {author.lastname || ""}
              </span>
            </h4>
          </a>
          <span className="px-2">•</span>
          <h5 className="text-whiteMain flex items-center font-normal">
            <FormattedDate date={published_at} />
          </h5>
        </div>
        {/* title */}
        <Link href={`/story/${author.username}/${slug}`} passHref>
          <a>
            <h1 className="font-primary mb-1 text-2xl font-bold leading-[125%] hover:underline md:text-3xl">
              {title}
            </h1>
            {/* excerpt */}
            <p className="font-serif text-base font-medium">{excerpt}</p>
          </a>
        </Link>
      </div>
      {/* col 3 */}
      <div className="order-2 col-span-3 md:col-span-1 md:pl-[10px] xl:order-3">
        <h3 className="font-primary mb-3 text-sm font-bold md:pt-2">LATEST</h3>
        <div className="space-y-12 md:space-y-7">
          {side.map((post) => (
            <LatestSide data={post} key={post.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

function LatestSide({
  data: { title, date, slug, author, tags, banner, banneralt, published_at },
}) {
  //   console.log(title);
  return (
    <article>
      <div className="aspect-w-16 aspect-h-9 mb-3">
        <Link href={`/story/${author.username}/${slug}`} passHref>
          <a>
            <Image
              src={banner}
              alt={banneralt}
              layout="fill"
              placeholder="blur"
              blurDataURL="https://lumbytes-general.s3.eu-west-1.amazonaws.com/defaultOG-small.png"
              priority
            />
          </a>
        </Link>
      </div>
      {/* author data */}
      <div className="font-primary mb-2 flex items-center text-xs">
        <a href={`/${author.username}`} className="flex">
          {author.dp && (
            <Image
              src={author.dp}
              alt={author.dpalt}
              className="rounded-full object-cover object-center"
              height={20}
              width={20}
            />
          )}
          <h4 className="ml-2 flex items-center font-medium">
            <span>
              {author.firstname} {author.lastname || ""}
            </span>
          </h4>
        </a>
        <span className="px-1 xl:px-2">•</span>
        <h5 className="text-whiteMain flex items-center font-normal">
          <FormattedDate date={published_at} />
        </h5>
      </div>
      {/* title */}
      <Link href={`/story/${author.username}/${slug}`} passHref>
        <a>
          <h2 className="font-primary text-xl font-semibold leading-tight hover:underline md:text-lg md:leading-tight">
            {title}
          </h2>
        </a>
      </Link>
    </article>
  );
}

function FeaturedPeek({ data: { title, banner, banneralt, author, slug } }) {
  return (
    <div className="mb-8 flex h-20 pr-5 md:w-1/2 xl:mb-0 xl:w-auto xl:pr-0">
      <div className="h-20 w-20">
        <Image
          src={banner}
          alt={banneralt}
          width={200}
          height={200}
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="https://lumbytes-general.s3.eu-west-1.amazonaws.com/defaultOG-small.png"
        />
      </div>
      <div className="h-full flex-1 pl-4">
        <Link href={`/story/${author.username}/${slug}`} passHref>
          <a>
            <h2 className="font-primary line-clamp-3 mb-3 text-base font-semibold leading-[119%] hover:underline md:text-lg md:leading-[119%]">
              {title}
            </h2>
          </a>
        </Link>
        <p className="font-primary text-xs font-medium">
          {author.firstname} {author.lastname || ""}
        </p>
      </div>
    </div>
  );
}

export default Hero;
