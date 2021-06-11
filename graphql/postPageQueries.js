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
            associatedColour
          }
          title
          banner {
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

export async function getSimilarPosts(topicname, slug) {
  const data = await client.query({
    query: gql`
      query getSImilarPosts($topicname: String, $slug: String) {
        similar: blogposts(
          where: { slug_ne: $slug, tags: { tagname: $topicname } }
          start: 0
          limit: 10
          sort: "id:DESC"
        ) {
          banner {
            url
            alternativeText
          }
          title
          slug
        }
      }
    `,
    variables: {
      topicname,
      slug,
    },
  })

  return data
}

export async function getExtraBytes(slug) {
  const data = await client.query({
    query: gql`
      query extraBytes($slug: String) {
        extraBytes: blogposts(
          where: {
            _or: [{ topPick: true }, { isfeatured: true }]
            slug_ne: $slug
          }
          sort: "id:DESC"
          start: 0
          limit: 5
        ) {
          topic {
            topicname
            associatedColour
          }
          banner {
            url
            alternativeText
          }
          title
          minuteRead
          published_at
          excerpt
          slug
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
