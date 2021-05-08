import React from "react"
import { getSlugs, getPostBySlug } from "../../graphql/Queries"

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const Post = ({ postData }) => {
  const { content, title, date, tags, topic, banner } = postData
  // console.log(postData);
  return (
    <main className="container mx-auto prose prose-red">
      {tags.map((element) => (
        <code>{element.tagname}</code>
      ))}
      <h1>{title}</h1>
      <MDXRemote {...content} />
      {/* <div className="container mx-auto">{content.compiledSource}</div> */}
    </main>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const data = await getPostBySlug(slug)

  const mdxSource = await serialize(data.data.blogposts[0].content)
  const {title, date, tags, banner, topic} = data.data.blogposts[0]
  
  return {
    props: {
      postData: {title, date, tags, topic, banner, content: mdxSource},
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
