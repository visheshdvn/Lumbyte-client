import client from "../apollo-client"
import { gql } from "@apollo/client"

export async function getPostBySlug(slug) {
  const data = await client.query({
    query: gql`
      query getPostfromSlug($slug: String!) {
        blogposts(where: { slug: $slug }) {
          id
          title
          published_at
          tags {
            tagname
          }
          topic {
            topicname
          }
          banner {
            height
            width
            alternativeText
            url
          }
          content
        }
      }
    `,
    variables: {
      slug,
    },
  })

  return data
}

export async function getSlugs() {
  const data = await client.query({
    query: gql`
      query {
        blogposts {
          slug
        }
      }
    `,
  })

  return data
}

export const getTags = gql`
  query {
    tags {
      tagname
    }
  }
`
export async function getPostIntroIndexPage(start, limit) {
  const data = await client.query({
    query: gql`
      query fetchPostIntro($start: Int, $limit: Int) {
        blogposts(sort: "published_at:DESC", start: $start, limit: $limit) {
          topic {
            topicname
          }
          title
          banner {
            url
          }
          published_at
        }
      }
    `,
    variables: {
      start, limit
    }
  })
}
