import React from "react"
import { getSlugs, getPostBySlug } from "../../graphql/Queries"
import Image from "next/image"

import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"

const Post = ({ postData }) => {
  const { content, title, date, tags, topic, banner, id } = postData
  console.log(new Date(date).toDateString());
  return (
    <div className="container lg:max-w-6xl mx-auto pt-12">
      <section className="container md:max-w-xl lg:max-w-3xl mx-auto px-3 mb-5">
        {/* {tags.map((element) => (
          <code key={element.tagname} className="mb-12">{element.tagname}</code>
        ))} */}
        <h4>{topic.topicname}</h4>
        <h1 className="md:text-5xl text-4xl font-extrabold mb-5">{title}</h1>
        <time className="text-sm text-gray-500 font-normal">{new Date(date).toDateString()}</time>
      </section>
      <div className="p-3">
        <Image
          src={`http://localhost:1337${banner.url}`}
          width={1366}
          height={972}
          layout="responsive"
          className="object-cover object-center lg:px-0 px-3"
        />
      </div>
      <main
        key={id}
        className="container md:max-w-xl lg:max-w-3xl mx-auto px-3"
      >
        <div className="prose lg:prose-lg mx-auto lg:max-w-3xl">
          <MDXRemote {...content} />
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  console.log("Re-Generating...")
  const { params } = context
  const { slug } = params

  const data = await getPostBySlug(slug)

  const mdxSource = await serialize(data.data.blogposts[0].content)
  const { title, published_at, tags, banner, topic, id } = data.data.blogposts[0]

  return {
    props: {
      postData: { title, date: published_at, tags, topic, banner, id, content: mdxSource },
    },
    revalidate: 1,
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
