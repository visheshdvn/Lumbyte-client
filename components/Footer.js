import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="body-font bg-gray-800">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a className="items-center flex justify-center overflow-hidden">
                <img
                  src="/logo/logo.svg"
                  alt="Lumbytes logo"
                  className="object-cover object-center overflow-visible xl:h-11 lg:h-10 sm:h-9 h-7"
                />
              </a>
            </Link>
          </div>
        </div>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-1 sm:mt-0 mt-4 flex">
          <a
            href="https://facebook.com"
            target="_blank"
            className="cursor-pointer mr-3"
          >
            <svg
              style={{ color: "#4267b2" }}
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a target="_blank" className="cursor-pointer mr-3">
            <svg
              style={{ color: "#1da1f2" }}
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a target="_blank" className="cursor-pointer mr-3">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 text-red-500"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          {/* <a target="_blank" className="cursor-pointer mr-3">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a> */}
        </p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-gray-500">
          <Link href="/contact">
            <a className="text-gray-400">Contact</a>
          </Link>
        </span>
      </div>
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #9400d3, #ff0000)",
        }}
        className="h-1 w-full"
      ></div>
    </footer>
  )
}

export default Footer
