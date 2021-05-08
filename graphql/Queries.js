import client from "../apollo-client"
import { gql } from "@apollo/client"

export async function getPostBySlug(slug) {
  const data =  await client.query({
    query: gql`
      query getPostfromSlug($slug: String!) {
        blogposts(where: { slug: $slug }) {
          title
          date
          tags {
            tagname
          }
          topics {
            topicname
          }
          banner {
            caption
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
      `
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

