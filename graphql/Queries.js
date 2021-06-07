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

// index page

export async function getLatestPosts(start, limit) {
  const data = await client.query({
    query: gql`
      query fetchPostIntro($start: Int, $limit: Int) {
        blogposts(sort: "id:DESC", start: $start, limit: $limit) {
          topic {
            topicname
            associatedColour
          }
          banner {
            url
            alternativeText
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
        blogposts(
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

// post page

export async function getAssociatedColor(topicname) {
  const data = await client.query({
    query: gql`
      query fetchLatestPostsOfTopicIntro($topicname: String) {
        topics(where: { topicname: $topicname }) {
          associatedColor
        }
      }
    `,
    variables: {
      topicname,
    },
  })

  return data
}

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

export async function getTopicPageData(topicname, start, limit) {
  const data = await client.query({
    query: gql`
      query fetchLatestPostsOfTopicIntro(
        $topicname: String
        $start: Int
        $limit: Int
      ) {
        blogposts(
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
          excerpt
          published_at
          minuteRead
          slug
        }
        topics(where: { topicname: $topicname }) {
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

export async function getfeauredPostsOnTopic(topicname, start, limit) {
  const data = await client.query({
    query: gql`
      query FeaturedOnly($topicname: String, $start: Int, $limit: Int) {
        blogposts(
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
