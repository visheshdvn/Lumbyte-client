import { useState, useRef, useEffect } from "react";
import { MenuIcon, XIcon, SearchIcon } from "@heroicons/react/outline";
import { Disclosure, Switch } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTheme } from "next-themes";

export default function Navbar() {
  const [enabled, setEnabled] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [navbarHidden, setNavbarHidden] = useState(false);

  const searchInputFieldRef = useRef(null);

  const searchClickButtonHandler = () => {
    if (
      searchValue === "" ||
      searchValue === null ||
      searchInputFieldRef.current.offsetWidth < 200
    ) {
      searchInputFieldRef.current.focus();
    } else {
      console.log("submition logic here - search term:", searchValue);
    }
  };

  const { theme, setTheme } = useTheme();

  let prevPos = 0;
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevPos < currentScrollPos;
    setNavbarHidden(visible);
    prevPos = currentScrollPos;
  };

  useEffect(() => {
    if (enabled) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    window.addEventListener("scroll", handleScroll);
  }, [enabled]);

  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <div className="body-top-spacing"></div>
      <Disclosure
        as="nav"
        style={{
          transition: "top 0.3s",
          top: `${
            navbarHidden
              ? -1 * document.getElementById("hidebar").offsetHeight + "px"
              : "0px"
          }`,
        }}
        className="dark:bg-darkGray fixed z-40 w-full bg-white"
      >
        {/* ${navbarHidden ? "-top-16" : "top-0"}  */}
        {({ open }) => (
          <>
            <div id="hidebar" className="horizontal-spacing container mx-auto">
              <div className="relative flex h-auto items-center justify-between">
                <div className="fle absolute inset-y-0 left-0 hidden items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center md:items-stretch">
                  {/* <div className="flex-shrink-0 flex items-center"> */}
                  <Link href="/" passHref>
                    <a className="font-antonio font-bold lg:-my-1">
                      <h1 className="tracking-custom xl:text-4.75xl -mr-3 select-none pt-1 pb-2 text-3xl leading-none md:text-4xl lg:pt-3 lg:pb-4">
                        LUMBYTES
                      </h1>
                    </a>
                  </Link>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="bg-grayMain py-2 dark:bg-gray-800 sm:py-2 md:py-2.5">
              <div className="horizontal-spacing container mx-auto flex">
                <div className="flex-1 items-center md:block">
                  <div className="border-whiteMain-50 w-min border-r">
                    <a
                      href="/tags/web"
                      className={`nav-link ${
                        asPath === "/tags/web"
                          ? "font-black text-blue-500"
                          : "font-normal text-white hover:text-blue-500"
                      }`}
                    >
                      WEB
                    </a>
                    <a
                      href="/tags/blockchain"
                      className={`nav-link ${
                        asPath === "/tags/blockchain"
                          ? "font-black text-yellow-500"
                          : "font-normal text-white hover:text-yellow-500"
                      }`}
                    >
                      BLOCKCHAIN
                    </a>
                    <a
                      href="/tags/code"
                      className={`nav-link ${
                        asPath === "/tags/code"
                          ? "font-black text-purple-600"
                          : "font-normal text-white hover:text-purple-600"
                      }`}
                    >
                      CODE
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  {/* search widget */}
                  <div
                    id="searchControl"
                    className="md:fle relative mr-4 hidden align-middle"
                  >
                    <button
                      onClick={searchClickButtonHandler}
                      id="searchButton"
                      className="absolute right-0 z-10 h-full w-12 bg-white focus:outline-none"
                    >
                      <span className="sr-only">Search form</span>
                      <SearchIcon
                        className="m-auto h-6 cursor-pointer"
                        aria-hidden="true"
                      />
                    </button>
                    <input
                      placeholder="Search anything..."
                      type="search"
                      id="searchInput"
                      ref={searchInputFieldRef}
                      name="searchbar"
                      className="z-0 w-12 border-none bg-white py-1 pr-0 focus:outline-none"
                      value={searchValue}
                      onChange={() =>
                        setSearchValue(searchInputFieldRef.current.value)
                      }
                    />
                  </div>

                  {/* theme switch below*/}
                  <Switch
                    checked={enabled}
                    onChange={() => {
                      setEnabled(!enabled);
                    }}
                    className="mr-5 inline-flex w-6 cursor-pointer items-center focus:outline-none"
                  >
                    <span className="sr-only">Switch theme mode</span>
                    <div className="absolute">
                      <div style={{ paddingBottom: "2px" }} className="text-xl">
                        {enabled ? "🌞" : "🌒"}
                      </div>
                    </div>
                  </Switch>

                  {/* social icons */}
                  {/* facebook link */}
                  <div className="border-whiteMain-50 flex border-l py-1">
                    <Link href="https://www.facebook.com/lumbytes">
                      <a
                        target="_blank"
                        rel="noopener"
                        aria-label="Facebook link"
                      >
                        <svg
                          version="1.1"
                          viewBox="0 0 512 512"
                          className="ml-4 mr-2 lg:h-5"
                          height="18"
                          fill="#fafafa"
                        >
                          <path d="M374.245,285.825l14.104,-91.961l-88.233,0l0,-59.677c0,-25.159 12.325,-49.682 51.845,-49.682l40.117,0l0,-78.291c0,0 -36.408,-6.214 -71.214,-6.214c-72.67,0 -120.165,44.042 -120.165,123.775l0,70.089l-80.777,0l0,91.961l80.777,0l0,222.31c16.197,2.542 32.798,3.865 49.709,3.865c16.911,0 33.512,-1.323 49.708,-3.865l0,-222.31l74.129,0Z" />
                        </svg>
                      </a>
                    </Link>

                    {/* twitter link */}
                    <Link href="https://twitter.com/lumbytes">
                      <a
                        target="_blank"
                        rel="noopener"
                        aria-label="Twitter link"
                      >
                        <svg
                          version="1.1"
                          viewBox="0 0 512 512"
                          className="lg:h-5.5 ml-2 h-5"
                          fill="#fafafa"
                        >
                          <path d="M492,109.5c-17.4,7.7-36,12.9-55.6,15.3c20-12,35.4-31,42.6-53.6c-18.7,11.1-39.4,19.2-61.5,23.5  C399.8,75.8,374.6,64,346.8,64c-53.5,0-96.8,43.4-96.8,96.9c0,7.6,0.8,15,2.5,22.1C172,179,100.6,140.4,52.9,81.7  c-8.3,14.3-13.1,31-13.1,48.7c0,33.6,17.1,63.3,43.1,80.7C67,210.7,52,206.3,39,199c0,0.4,0,0.8,0,1.2c0,47,33.4,86.1,77.7,95  c-8.1,2.2-16.7,3.4-25.5,3.4c-6.2,0-12.3-0.6-18.2-1.8c12.3,38.5,48.1,66.5,90.5,67.3c-33.1,26-74.9,41.5-120.3,41.5  c-7.8,0-15.5-0.5-23.1-1.4C62.9,432,113.8,448,168.4,448C346.6,448,444,300.3,444,172.2c0-4.2-0.1-8.4-0.3-12.5  C462.6,146,479,128.9,492,109.5z" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">customize me</div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

function Divider() {
  return (
    <div
      style={{ width: "1px" }}
      className="-mx-1 inline-block h-full border-red-500 bg-red-500"
    />
  );
}
