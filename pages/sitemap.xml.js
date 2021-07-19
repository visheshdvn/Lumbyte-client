import fs from "fs"
import client from "../apollo-client"
import { gql } from "@apollo/client"

const Sitemap = () => {}

async function getSlugs() {
  const data = await client.query({
    query: gql`
      query {
        blogposts {
          slug
          updated_at
        }
      }
    `,
  })

  return data
}

async function getAllTopicNames() {
  const data = await client.query({
    query: gql`
      query getAllTopics {
        topics {
          topicname
          updated_at
        }
      }
    `,
  })

  return data
}

console.log(process.cwd())

export async function getServerSideProps({ res }) {
  const {
    data: { blogposts },
  } = await getSlugs()
  const {
    data: { topics },
  } = await getAllTopicNames()

  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://www.lumbytes.com",
  }[process.env.NODE_ENV]

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
      ].includes(staticPage)
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`
    })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.lumbytes.com/</loc>
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
          `
        })
        .join("")}
      ${blogposts
        .map(({ slug, updated_at }) => {
          return `
            <url>
              <loc>${baseUrl}/post/${slug}</loc>
              <lastmod>${new Date(updated_at).toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join("")}
      ${topics
        .map(({ topicname, updated_at }) => {
          return `
            <url>
              <loc>${baseUrl}/topic/${encodeURIComponent(topicname)}</loc>
              <lastmod>${new Date(updated_at).toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `
        })
        .join("")}
    </urlset>
  `

  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
