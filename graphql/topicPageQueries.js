import client from "../apollo-client";
import { gql } from "@apollo/client";

export async function getAllTags() {
  const data = await client.query({
    query: gql`
      query getAllTags {
        tags {
          tagname
        }
      }
    `,
  });
  return data;
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
          date
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
  });

  return data;
}

// this function gets related posts of a topic but not on that topic
export async function getPostsRelatedToTopic(topicname, start, limit) {
  const data = await client.query({
    query: gql`
      query getPostsRelatedToTopic(
        $topicname: String
        $start: Int
        $limit: Int
      ) {
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
          date
          slug
        }
      }
    `,
    variables: {
      topicname,
      start,
      limit,
    },
  });

  return data;
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
          date
          slug
        }
      }
    `,
    variables: {
      topicname,
      start,
      limit,
    },
  });

  return data;
}

export async function getTagPageData(tagname, start, limit) {
  const data = await client.query({
    query: gql`
      query getTagPageData($tagname: String, $start: Int, $limit: Int) {
        posts: blogposts(
          where: { tags: { tagname: $tagname } }
          sort: "id:DESC"
          start: $start
          limit: $limit
        ) {
          title
          tags {
            tagname
            color
          }
          banner {
            url
            alternativeText
          }
          date
          slug
          excerpt
          author {
            firstname
            lastname
          }
        }

        buildData: tags(where: { tagname: $tagname }) {
          color
          metaDescription
          ogImg {
            url
            alternativeText
          }
        }
      }
    `,
    variables: {
      tagname,
      start,
      limit,
    },
    fetchPolicy: "network-only",
  });

  return data;
}
