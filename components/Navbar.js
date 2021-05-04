/* This example requires Tailwind CSS v2.0+ */
import { useState, useRef } from "react"
import { MenuIcon, XIcon, SearchIcon } from "@heroicons/react/outline"
import { Disclosure, Switch } from "@headlessui/react"
import Link from "next/link"

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const [enabled, setEnabled] = useState(false)
  // const [searchValue, setSearchValue] = useState(null)

  const searchInputFieldRef = useRef(null)

  const searchClickButtonHandler = () => {
    searchInputFieldRef.current.focus()
  }

  return (
    <Disclosure as="nav" className="bg-white text-gray-800 fixed top-0 w-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto p-3 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a className="sm:flex sm:items-center">
                      <img
                        className="block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Lumbyte"
                      />
                      <h1 className="hidden sm:flex sm:items-center text-4xl font-serif ml-1 text-gray-700">
                        LumBytes
                      </h1>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button className="p-1 rounded-full text-gray-800 focus:outline-none transform focus:scale-150 transition duration-200 ease-in-out mr-2">
                  <span className="sr-only">Search form</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                <div
                  id="searchControl"
                  className="relative flex align-middle mr-4"
                >
                  <button
                    onClick={searchClickButtonHandler}
                    id="searchButton"
                    className="w-12 h-full absolute focus:outline-none right-0 bg-white z-10"
                  >
                    <span className="sr-only">Search form</span>
                    <SearchIcon className="h-6 m-auto cursor-pointer" aria-hidden="true" />
                  </button>
                  <input
                    placeholder="Click here to search anything..."
                    type="search"
                    id="searchInput"
                    ref={searchInputFieldRef}
                    name="searchbar"
                    className="bg-white border-none focus:outline-none py-1 pr-0 w-12 z-0 focus:border-b focus:border-black"
                  />
                </div>
                {/* theme switch below*/}
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? "bg-gray-800" : "bg-gray-200"
                  } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none cursor-pointer`}
                >
                  <span className="sr-only">Switch theme mode</span>
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                  />
                </Switch>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
