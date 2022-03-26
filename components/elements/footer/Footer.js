import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="body-font border-zinc-700 bg-black dark:border-t dark:bg-opacity-50">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <div className="title-font flex items-center justify-center font-medium md:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" passHref>
              <a className="flex items-center justify-center overflow-hidden">
                <img
                  src="/logo/Footer.svg"
                  alt="Lumbytes logo"
                  className="h-7 overflow-visible object-cover object-center sm:h-8 lg:h-9 xl:h-10"
                />
              </a>
            </Link>
          </div>
        </div>
        <p className="sm:border-whiteMain-50 mt-4 flex text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:py-1 sm:pl-4">
          <a
            href="https://www.facebook.com/lumbytes"
            target="_blank"
            rel="noopener"
            className="mr-3 cursor-pointer"
            aria-label="Facebook"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="text-whiteMain h-5 w-5 md:h-6 md:w-6"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/lumbytes"
            target="_blank"
            rel="noopener"
            className="mr-3 cursor-pointer"
            aria-label="Twitter"
          >
            <svg
              // style={{ color: "#1da1f2" }}
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="text-whiteMain h-5 w-5 md:h-6 md:w-6"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          {/* <a target="_blank" className="cursor-pointer mr-3">
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
          </a> */}
        </p>

        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <Link href="/about">
            <a className="ml-5 font-medium text-gray-400 hover:text-neutral-300">
              About
            </a>
          </Link>
          <Link href="/about">
            <a className="ml-5 font-medium text-gray-400 hover:text-neutral-300">
              Contact
            </a>
          </Link>
          <Link href="/privacy-policy">
            <a className="ml-5 font-medium text-gray-400 hover:text-neutral-300">
              Privacy Policy
            </a>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
