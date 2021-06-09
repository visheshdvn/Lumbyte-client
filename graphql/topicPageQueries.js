import client from "../apollo-client"
import { gql } from "@apollo/client"

export async function getAllTopicNames() {
  const data = await client.query({
    query: gql`
      query getAllTopics {
        topics {
          topicname
        }
      }
    `,
  })

  return data
}

export async function getLatestPostsOfTopic(topicname, start, limit) {
  const data = await client.query({
    query: gql`
      query fetchLatestPostsOfTopicIntro(
        $topicname: String
        $start: Int
        $limit: Int
      ) {
        latest: blogposts(
          where: { topic: { topicname: $topicname } }
          sort: "id:DESC"
          start: $start
          limit: $limit
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
          slug
          excerpt
        }

        color: topics(where: { topicname: $topicname }) {
          associatedColour
        }
      }
    `,
    variables: {
      topicname,
      start,
      limit,
    },
  })

  return data
}

// this function gets related posts of a topic but not on that topic
export async function getPostsRelatedToTopic(topicname, start, limit) {
  const data = await client.query({
    query: gql`
      query getPostsRelatedToTopic($topicname: String, $start: Int, $limit: Int) {
        # but not of topic
        related: blogposts(
          where: {
            tags: { tagname: $topicname }
            topic: { topicname_ne: $topicname }
          }
          start: $start
          limit: $limit
          sort: "id:desc"
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
          slug
        }
      }
    `,
    variables: {
        topicname,
        start,
        limit
    }
  })

  return data
}

export async function getfeauredPostsOfTopic(topicname, start, limit) {
  const data = await client.query({
    query: gql`
      query FeaturedOnly($topicname: String, $start: Int, $limit: Int) {
        featured: blogposts(
          where: { isfeatured: true, topic: { topicname: $topicname } }
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
          }
          title
          minuteRead
          published_at
          slug
        }
      }
    `,
    variables: {
      topicname,
      start,
      limit,
    },
  })

  return data
}
