import { useState, useRef, useEffect } from "react"
import { MenuIcon, XIcon, SearchIcon } from "@heroicons/react/outline"
import { Disclosure, Switch } from "@headlessui/react"
import Link from "next/link"

import { useTheme } from "next-themes"

export default function Navbar() {
  const [enabled, setEnabled] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [navbarHidden, setNavbarHidden] = useState(false)

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

  const { theme, setTheme } = useTheme()

  let prevPos = 0
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const visible = prevPos < currentScrollPos
    setNavbarHidden(visible)
    prevPos = currentScrollPos
  }

  useEffect(() => {
    if (enabled) {
      setTheme("dark")
    } else {
      setTheme("light")
    }

    window.addEventListener("scroll", handleScroll)
  }, [enabled])

  useEffect(() => {})

  return (
    <Disclosure
      as="nav"
      style={{ transition: "top 0.3s" }}
      className={`bg-white fixed w-full ${
        navbarHidden ? "-top-16" : "top-0"
      } dark:bg-black z-50 border-b dark:border-gray-700 md:py-2 py-3`}
    >
      {({ open }) => (
        <>
          <div className="container horizontal-spacing mx-auto">
            <div className="relative flex items-center justify-between h-auto">
              <div className="absolute inset-y-0 left-0 items-center fle md:hidde hidden">
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
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
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
              {/* search widget */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <div
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
                </div> */}

                {/* theme switch below*/}
                <Switch
                  checked={enabled}
                  onChange={() => {
                    setEnabled(!enabled)
                  }}
                  className={`${
                    enabled ? "bg-gray-800" : "bg-gray-200"
                  } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none cursor-pointer`}
                >
                  <span className="sr-only">Switch theme mode</span>
                  <div className="absolute">
                    <span className={`${!enabled && "opacity-0"}`}>🌞</span>
                    <span className={`${enabled && "opacity-0"}`}>🌒</span>
                  </div>
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-bloc w-4 h-4 transform bg-white rounded-full hidden`}
                  />
                </Switch>
              </div>
            </div>
            {/* <div className="w-full pt-3 hidden md:block ">
              <SecondaryNavLink href="/">Home</SecondaryNavLink>
              <SecondaryNavLink href="/">featured</SecondaryNavLink>
              <SecondaryNavLink href="/topic/technology">technology</SecondaryNavLink>
            </div> */}
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">customize me</div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

function SecondaryNavLink({ children, href }) {
  return (
    <Link href={href}>
      <a
        style={{ fontFamily: "Roboto Condensed" }}
        className="uppercase mr-8 font-pt-san font-normal text-sm"
      >
        {children}
      </a>
    </Link>
  )
}
