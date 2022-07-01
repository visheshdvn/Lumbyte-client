// components
import BroadPeek from "../components/PostPeek/broad";
import Latest from "../components/PostPeek/latest";
import Hero from "../components/PostPeek/hero";
import Navbar from "../components/elements/navbar/Navbar";
import Footer from "../components/elements/footer/Footer";

import MetaIndex from "../utils/headTags/public/headIndex";
import prisma from "../lib/prisma";

const MAX_RESPONSE = 20;

export default function Home({ latest, latestSide, readMore }) {
  if (Object.keys(latest).length === 0) {
    return <h1>No Data</h1>;
  }

  return (
    <>
      <MetaIndex />
      <Navbar />

      {/* <Latest big={latest} side={latestSide} /> */}
      <Hero big={latest} side={latestSide} />

      <section className="">
        <div className="horizontal-spacing container mx-auto">
          <h1 className="wide-head">Read more</h1>
          {readMore.map((item) => {
            return <BroadPeek data={item} key={item.slug} />;
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { blogposts } = prisma;

  let data = await blogposts.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      banner: true,
      banneralt: true,
      metaDescription: true,
      content: true,
      minuteRead: true,
      featured: true,
      topPick: true,
      published_at: true,
      updated_at: true,
      author: {
        select: {
          id: true,
          firstname: true,
          lastname: true,
          username: true,
          dp: true,
          dpalt: true,
        },
      },
      tags: {
        select: {
          tagname: true,
          color: true,
        },
      },
    },
    skip: 0,
    take: MAX_RESPONSE,
    orderBy: {
      n: "desc",
    },
    where: {
      published: true,
    },
  });

  if (data.length === 0) {
    return {
      props: {
        latest: {},
        latestSide: [],
        readMore: [],
      },
      // revalidate: 14400,
    };
  }

  await prisma.$disconnect();

  data = JSON.parse(JSON.stringify(data));
  const latest = data.slice(0, 1);
  const latestSide = data.slice(1, 3);
  const readMore = data.slice(3, 20);

  return {
    props: {
      latest: latest[0],
      latestSide,
      readMore,
    },
    // revalidate: 14400,
  };
}
