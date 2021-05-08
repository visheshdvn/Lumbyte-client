import React from "react"
import { getSlugs, getPostBySlug } from "../../graphql/Queries"

const Post = ({ postData }) => {
  const { content } = postData
  console.log(content)
  return <div className="container mx-auto">{content}</div>
}

export async function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const data = await getPostBySlug(slug)

  return {
    props: {
      postData: data.data.blogposts[0],
    },
  }
}

export async function getStaticPaths() {
  const { data } = await getSlugs()

  return {
    paths: data.blogposts.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  }
}

export default Post
