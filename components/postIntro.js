import React from "react"
import Image from "next/image"
import {
  UserCircleIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/outline"

const postIntro = () => {
  return (
    <article className="text-gray-600 body-font overflow-hidden md:mb-20 mb-10">
      <div className="mx-auto flex md:flex-col">
        <div className="w-auto md:order-1 order-2 md:max-w-max pl-2 md:pl-0">
          <h1 className="text-base leading-5 lg:text-3xl md:text-2xl md:mb-3 mb-2 font-bold">
            Elit Lorem eu voluptate consectetur duis laboris veniam labore
            commodo fugiat amet enim ex ipsum.
          </h1>
          <div className="md:hidden font-normal">
              <span>Date</span> {' | '}
              <span>3Min read</span>
          </div>
        </div>
        {/* <div className="lg:w-full mx-auto"> */}
        <div className="mobileImageSize overflow-hidden relative h-28 md:h-64 lg:h-72 md:w-full md:order-2 order-1">
          <Image
            alt="Post Banner"
            // width={1024}
            // height={350}
            className="object-cover object-center"
            src="https://source.unsplash.com/random/"
            layout="fill"
            objectFit="cover"
          />
          {/* </div> */}
        </div>
        <div className="md:flex flex-col sm:flex-row mt-5 md:order-3 order-3 hidden">
          <div className="w-full md:w-1/4 text-center sm:pr-4 sm:py-0">
            <div className="flex flex-col">
              <div className="flex">
                <UserCircleIcon className="h-5 w-5" />
                <h2 className="pl-2 font-medium text-gray-900 text-sm text-left flex items-center mb-1">
                  Phoebe Caulfield
                </h2>
              </div>
              <div className="flex">
                <CalendarIcon className="h-5 w-5" />
                <h2 className="pl-2 font-medium text-gray-900 text-sm text-left flex items-center mb-1">
                  Date
                </h2>
              </div>
              <div className="flex">
                <ClockIcon className="h-5 w-5" />
                <h2 className="pl-2 font-medium text-gray-900 text-sm text-left flex items-center">
                  Minute read
                </h2>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-3/4 py-0 border-gray-200 border-t-0 pt-0 mt-0 text-left">
            <p className="text-base mb-2">
              Ea eu occaecat reprehenderit aliquip ad ullamco consequat irure
              aliqua irure mollit culpa dolor. Nulla et veniam irure tempor
              eiusmod quis anim voluptate nostrud. Fugiat minim et reprehenderit
              consequat eu veniam ea enim. Minim amet irure ipsum enim qui irure
              sint. Nisi mollit veniam id consequat veniam.
            </p>
            <a className="text-indigo-500 inline-flex items-center cursor-pointer hover:bg-indigo-500 hover:text-white">
              Read More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default postIntro
