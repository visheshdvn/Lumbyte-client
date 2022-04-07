// generate sitemap for tags
// generate sitemap for
import fs from "fs";
import { PrismaClient } from "@prisma/client";

const Sitemap = () => {};

export async function getServerSideProps({ res }) {
  const prisma = new PrismaClient();
  const { blogposts, tags } = prisma;

  const posts = await blogposts.findMany({
    select: {
      slug: true,
      updated_at: true,
    },
    where: {
      published: true,
    },
  });

  const tagList = await tags.findMany({
    select: {
      tagname: true,
      updated_at: true,
    },
    where: {
      published: true,
    },
  });

  prisma.$disconnect();

  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://lumbytes.com",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
        "post",
        "search.js",
        "index.js",
        "topic",
        "api",
        ".next",
        "auth",
        "tags",
        "[profile]",
        "___next_launcher.js",
        "___vc_bridge.js",
        "node_modules",
        "package.json",
        "package-lock.json",
        "out",
        "admin",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath.replace(".js", "")}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>https://lumbytes.com</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
      ${staticPages
        .map((url) => {
          return `
            <sitemap>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </sitemap>
          `;
        })
        .join("")}
      ${posts
        .map(({ slug, updated_at }) => {
          return `
            <sitemap>
              <loc>${baseUrl}/post/${encodeURIComponent(slug)}</loc>
              <lastmod>${new Date(updated_at).toISOString()}</lastmod>
            </sitemap>
          `;
        })
        .join("")}
      ${tagList
        .map(({ tagname, updated_at }) => {
          return `
            <sitemap>
              <loc>${baseUrl}/tags/${encodeURIComponent(tagname)}</loc>
              <lastmod>${new Date(updated_at).toISOString()}</lastmod>
            </sitemap>
          `;
        })
        .join("")}
    </sitemapindex>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;
