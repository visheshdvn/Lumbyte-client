import client from "../apollo-client"
import { gql } from "@apollo/client"

export async function getPostBySlug(slug) {
  console.log('querying');
  const data =  await client.query({
    query: gql`
      query getPostfromSlug($slug: String!) {
        blogposts(where: { slug: $slug }) {
          id
          title
          date
          tags {
            tagname
          }
          topic {
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

  console.log(JSON.stringify(data, null, 4));

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

