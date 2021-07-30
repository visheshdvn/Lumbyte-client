import React from "react"
import Link from "next/link"

const BlogLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="blog-link" target="_blank">
        {children}
      </a>
    </Link>
  )
}

export default BlogLink
