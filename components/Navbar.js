import { useState, useRef } from "react"
import { MenuIcon, XIcon, SearchIcon } from "@heroicons/react/outline"
import { Disclosure, Switch } from "@headlessui/react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [enabled, setEnabled] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const searchInputFieldRef = useRef(null)

  const searchClickButtonHandler = () => {
    if (
      searchValue === "" ||
      searchValue === null ||
      searchInputFieldRef.current.offsetWidth < 200
    ) {
      searchInputFieldRef.current.focus()
    } else {
      console.log("submition logic here - search term:", searchValue)
    }
  }

  return (
    <Disclosure
      as="nav"
      className="bg-white text-gray-800 fixed top-0 w-full z-50"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 py-1 sm:py-4 sm:px-6 lg:px-8">
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
                    <a className="hidden sm:flex sm:items-center h-24 w-72 relative overflow-visible">
                      <Image
                        className="block h-8 w-auto"
                        src="/icons/LumBytes_light.png"
                        alt="Lumbytes"
                        width={220}
                        height={73}
                        // layout="fill"
                        // objectFit="contain"
                        className="object-cover object-center overflow-visible"
                      />
                      {/* <h1 className="hidden sm:flex sm:items-center text-4xl font-serif ml-1 text-gray-700">
                        LumBytes
                      </h1> */}
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="h-24 w-72 relative sm:hidden p-0 z-20 flex justify-center overflow-hidden">
                      <Image
                        className="block h-8 w-auto"
                        src="/icons/Icon_only-big.png"
                        alt="Lumbytes"
                        // layout="fill"
                        // objectFit="cover"
                        height={90}
                        width={90}
                        className="object-cover object-center transform scale-50"
                      />
                      {/* <h1 className="hidden sm:flex sm:items-center text-4xl font-serif ml-1 text-gray-700">
                        LumBytes
                      </h1> */}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div
                  id="searchControl"
                  className="relative align-middle mr-4 hidden md:flex"
                >
                  <button
                    onClick={searchClickButtonHandler}
                    id="searchButton"
                    className="w-12 h-full absolute focus:outline-none right-0 bg-white z-10"
                  >
                    <span className="sr-only">Search form</span>
                    <SearchIcon
                      className="h-6 m-auto cursor-pointer"
                      aria-hidden="true"
                    />
                  </button>
                  <input
                    placeholder="Search anything..."
                    type="search"
                    id="searchInput"
                    ref={searchInputFieldRef}
                    name="searchbar"
                    className="bg-white border-none focus:outline-none py-1 pr-0 w-12 z-0"
                    value={searchValue}
                    onChange={() =>
                      setSearchValue(searchInputFieldRef.current.value)
                    }
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

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">customize me</div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
