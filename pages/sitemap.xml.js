import fs from "fs";
import { PrismaClient } from "@prisma/client";

const Sitemap = () => {};

export async function getServerSideProps({ res }) {
  const { blogposts } = new PrismaClient();

  const posts = await blogposts.findMany({
    select: {
      slug: true,
      updated_at: true,
    },
    where: {
      published: true,
    },
  });

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
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://lumbytes.com</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.5</priority>
            </url>
          `;
        })
        .join("")}
      ${posts
        .map(({ slug, updated_at }) => {
          return `
            <url>
              <loc>${baseUrl}/post/${encodeURIComponent(slug)}</loc>
              <lastmod>${new Date(updated_at).toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;
