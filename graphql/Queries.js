import client from "../apollo-client"
import { gql } from "@apollo/client"

export async function getPostBySlug(slug) {
  const data = await client.query({
    query: gql`
      query getPostfromSlug($slug: String!) {
        blogposts(where: { slug: $slug }) {
          id
          metadescription
          minuteRead
          published_at
          topic {
            topicname
          }
          title
          banner {
            alternativeText
            url
            formats
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
export async function getPostIntroIndex(start, limit) {
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
          slug
          excerpt
        }
      }
    `,
    variables: {
      start,
      limit,
    },
  })

  return data
}
