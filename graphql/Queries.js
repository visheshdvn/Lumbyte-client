import client from "../apollo-client"
import { gql } from "@apollo/client"

// index page

export async function getLatestPosts(start, limit) {
  const data = await client.query({
    query: gql`
      query fetchPostIntro($start: Int, $limit: Int) {
        latest: blogposts(sort: "id:DESC", start: $start, limit: $limit) {
          topic {
            topicname
            associatedColour
          }
          banner {
            url
            alternativeText
            formats
          }
          title
          excerpt
          published_at
          minuteRead
          slug
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

// featured post all topics
export async function getfeauredPosts(start, limit) {
  const data = await client.query({
    query: gql`
      query FeaturedOnly($start: Int, $limit: Int) {
        featured: blogposts(
          where: { isfeatured: true }
          start: $start
          limit: $limit
          sort: "id:DESC"
        ) {
          topic {
            topicname
            associatedColour
          }
          banner {
            url
            alternativeText
            formats
          }
          title
          minuteRead
          published_at
          slug
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

export async function getTopPicks(start, limit) {
  const data = client.query({
    query: gql`
      query getTopPick($start: Int, $limit: Int) {
        topPicks: blogposts(
          where: { topPick: true }
          start: $start
          limit: $limit
          sort: "id:desc"
        ) {
          banner {
            url
            alternativeText
          }
          topic {
            topicname
            associatedColour
          }
          topPick
          title
          excerpt
          published_at
          minuteRead
          slug
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
