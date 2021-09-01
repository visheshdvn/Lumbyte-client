import client from "../apollo-client";
import { gql } from "@apollo/client";

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
          }
          title
          excerpt
          date
          minuteRead
          slug
        }
      }
    `,
    variables: {
      start,
      limit,
    },
    fetchPolicy: "network-only",
  });

  return data;
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
          }
          title
          minuteRead
          date
          slug
        }
      }
    `,
    variables: {
      start,
      limit,
    },
    fetchPolicy: "network-only",
  });

  return data;
}

export async function getTopPicks(start, limit) {
  const data = await client.query({
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
          date
          minuteRead
          slug
        }
      }
    `,
    variables: {
      start,
      limit,
    },
    fetchPolicy: "network-only",
  });

  return data;
}

export async function getIndexPageData(start, limit) {
  const data = await client.query({
    query: gql`
      query getIndexPageData {
        latest: blogposts(start: 0, limit: 1, sort: "id:desc") {
          ...commonData
        }

        latestSide: blogposts(start: 1, limit: 3, sort: "id:desc") {
          title
          date
          slug
          author {
            firstname
            lastname
          }
        }

        featured: blogposts(
          where: { topPick: true }
          start: 0
          limit: 2
          sort: "id:DESC"
        ) {
          excerpt
          ...commonData
        }

        readMore: blogposts(start: 4, limit: 10, sort: "id:desc") {
          excerpt
          ...commonData
        }
      }

      fragment commonData on Blogposts {
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
        author {
          firstname
          lastname
        }
      }
    `,
    variables: {
      start,
      limit,
    },
    fetchPolicy: "network-only",
  });
  return data;
}
