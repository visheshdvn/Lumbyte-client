import React from "react"
import Link from "next/link"

const BlogLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="font-semibold text-lightBlue-600 border-b-2 border-dotted border-lightBlue-600">
        {children}
      </a>
    </Link>
  )
}

export default BlogLink
