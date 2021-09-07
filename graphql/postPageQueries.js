import client from "../apollo-client";
import { gql } from "@apollo/client";

export async function getPostBySlug(slug) {
  const data = await client.query({
    query: gql`
      query getPostfromSlug($slug: String!) {
        blogposts(where: { slug: $slug }) {
          id
          metadescription
          minuteRead
          published_at
          author {
            username
            firstname
            lastname
            dp {
              url
              alternativeText
            }
            about
          }
          tags {
            tagname
            color
          }
          title
          banner {
            alternativeText
            url
          }
          content
          date
        }
      }
    `,
    variables: {
      slug,
    },
    // pollInterval: 1
    fetchPolicy: "network-only",
  });

  return data;
}

export async function getSimilarPosts(slug, tag1, tag2) {
  const data = await client.query({
    query: gql`
      query getSImilarPosts($slug: String, $tag1: String, $tag2: String) {
        similar: blogposts(
          where: {
            slug_ne: $slug
            _or: [{ tags: { tagname: $tag1 } }, { tags: { tagname: $tag2 } }]
          }
          start: 0
          limit: 3
          sort: "id:DESC"
        ) {
          banner {
            url
            alternativeText
          }
          title
          slug
          tags {
            tagname
          }
        }
      }
    `,
    variables: {
      slug,
      tag1,
      tag2,
    },
  });
  return data;
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
          date
          excerpt
          slug
        }
      }
    `,
    variables: {
      slug,
    },
  });

  return data;
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
  });

  return data;
}
