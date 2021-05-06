import React from "react"

const postIntro = () => {
  return (
    <section className="text-gray-600 body-font mb-20">
      <div className="container mx-auto flex flex-col">
        <h1 className="lg:text-4xl lg:mb-3 leading-6">Title of blog here</h1>
        <div className="lg:w-full mx-auto">
          <div className="h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-5">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-0">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Phoebe Caulfield
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              </div>
            </div>
            <div className="sm:w-2/3 sm:py-0 border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="text-base mb-2">
                Ea eu occaecat reprehenderit aliquip ad ullamco consequat irure
                aliqua irure mollit culpa dolor. Nulla et veniam irure tempor
                eiusmod quis anim voluptate nostrud. Fugiat minim et
                reprehenderit consequat eu veniam ea enim. Minim amet irure
                ipsum enim qui irure sint. Nisi mollit veniam id consequat
                veniam.
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
      </div>
    </section>
  )
}

export default postIntro
