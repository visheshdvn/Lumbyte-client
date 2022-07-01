import React from "react";
import Image from "next/image";
import FormattedDate from "../micro/formattedDate";
import ShowTags from "../micro/showTags";
import Link from "next/link";

const Hero = ({ big, side, featured }) => {
  console.log("featred", featured);
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
    <div className="horizontal-spacing-wide container mx-auto mb-14 mt-5 grid h-auto grid-cols-4 gap-4 md:mb-10 lg:mt-8 lg:mb-11 xl:mb-24">
      <div>
        <h3 className="font-primary mb-3 pt-2 text-sm font-bold text-amber-500">
          FEATURED
        </h3>
        <div className="space-y-6">
          {featured.map((data) => (
            <FeaturedPeek data={data} key={data.title} />
          ))}
        </div>
      </div>
      <div className="col-span-2">
        <div className="aspect-h-10 aspect-w-16 mb-4">
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
            <h1 className="font-primary mb-3 text-3xl font-bold hover:underline">
              {title}
            </h1>
          </a>
        </Link>
        {/* excerpt */}
        <p className="font-serif text-base font-medium">{excerpt}</p>
      </div>
      <div>
        <h3 className="font-primary mb-3 pt-2 text-sm font-bold">LATEST</h3>
        <div className="space-y-7">
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
          <h2 className="font-primary text-base font-semibold hover:underline leading-[125%]">
            {title}
          </h2>
        </a>
      </Link>
    </article>
  );
}

function FeaturedPeek({ data: { title, banner, banneralt, author, slug } }) {
  console.log(banner);
  return (
    <div className="flex h-24">
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
            <h2 className="font-primary line-clamp-3 mb-3 text-base font-semibold leading-[119%] hover:underline">
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
