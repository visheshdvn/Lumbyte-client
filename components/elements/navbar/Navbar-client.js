import { useState, useRef, useEffect } from "react";
import { MenuIcon, XIcon, SearchIcon } from "@heroicons/react/outline";
import { Disclosure, Switch } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import {
  facebook as facebookSVG,
  twitter as twitterSVG,
} from "../../icons/social/navbar";
import { maleUser as defaultUser } from "../../icons/user";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [navbarHidden, setNavbarHidden] = useState(false);
  const { data: session, status } = useSession();
  const user = session?.user;

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
    window.addEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <div className="md:pt-113 pt-24"></div>
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
        className="fixed z-40 w-full bg-white dark:bg-black"
      >
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
                      <h1 className="tracking-custom -mr-3 flex select-none items-center pb-2 pt-1 text-3xl leading-none md:text-4xl lg:pb-3 lg:pt-2 xl:text-4xl">
                        LUMBYTES
                      </h1>
                    </a>
                  </Link>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="border-zinc-700 bg-black py-2 dark:border-y dark:bg-black sm:py-2 md:py-2.5">
              <div className="horizontal-spacing container mx-auto flex justify-end md:justify-start">
                <div className="hidden flex-1 items-center md:flex">
                  <div className="w-min">
                    <a
                      href="/tags/web"
                      className={`nav-link ${
                        asPath === "/tags/web"
                          ? "font-bold text-blue-500"
                          : "font-normal text-white hover:text-blue-500"
                      }`}
                    >
                      WEB
                    </a>
                    <a
                      href="/tags/blockchain"
                      className={`nav-link ${
                        asPath === "/tags/blockchain"
                          ? "font-bold text-yellow-500"
                          : "font-normal text-white hover:text-yellow-500"
                      }`}
                    >
                      BLOCKCHAIN
                    </a>
                    <a
                      href="/tags/code"
                      className={`nav-link ${
                        asPath === "/tags/code"
                          ? "font-bold text-purple-600"
                          : "font-normal text-white hover:text-purple-600"
                      }`}
                    >
                      CODE
                    </a>
                  </div>
                </div>

                <div className="flex h-6 items-center lg:h-8">
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
                    checked={theme === "dark"}
                    onChange={() => {
                      if (theme === "light") {
                        setTheme("dark");
                      } else {
                        setTheme("light");
                      }
                    }}
                    className="mr-5 inline-flex w-6 cursor-pointer items-center focus:outline-none"
                  >
                    <span className="sr-only">Switch theme mode</span>
                    <div className="absolute">
                      <div style={{ paddingBottom: "2px" }} className="text-xl">
                        {theme === "dark" ? "🌞" : "🌒"}
                      </div>
                    </div>
                  </Switch>

                  {/* social icons */}
                  {/* facebook link */}
                  <div className="border-whiteMain-50 flex h-full items-center border-l px-1">
                    <Link href="https://www.facebook.com/lumbytes" passHref>
                      <a
                        target="_blank"
                        rel="noopener"
                        aria-label="Facebook link"
                      >
                        {facebookSVG}
                      </a>
                    </Link>

                    {/* twitter link */}
                    <Link href="https://twitter.com/lumbytes">
                      <a
                        target="_blank"
                        rel="noopener"
                        aria-label="Twitter link"
                      >
                        {twitterSVG}
                      </a>
                    </Link>
                  </div>

                  <Popover className="border-whiteMain-50 relative h-full border-l pl-5 text-white">
                    <Popover.Button className="h-full outline-none">
                      <div className="aspect-1 lg:h-[30px h-full overflow-hidden rounded-full">
                        {(session && session.user.dp && (
                          <Image
                            src={user.dp}
                            alt={user.dpalt || "default user"}
                            height={40}
                            width={40}
                          />
                        )) || (
                          <div className="aspect-1 flex items-center justify-center rounded-full border-2">
                            {defaultUser}
                          </div>
                        )}
                      </div>
                    </Popover.Button>
                    <Popover.Panel className="absolute right-0 z-20 translate-y-2 transform rounded border-2 border-black bg-white p-2 text-black">
                      <div className="flex min-w-[112px] flex-col">
                        {(status === "authenticated" && !!session.user && (
                          <>
                            <PopoverLink
                              text="Dashboard"
                              link={`/${user.username}`}
                            />
                            <PopoverLink
                              text="Settings"
                              link={`/me/settings`}
                            />
                            <PopoverLink
                              text="Admin"
                              link={`/admin`}
                            />
                            <PopoverButton text="Sign Out" action={signOut} />
                          </>
                        )) || (
                          <>
                            <PopoverLink text="Sign In" link="/auth/signin" />
                          </>
                        )}
                      </div>
                    </Popover.Panel>
                  </Popover>
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

function PopoverButton({ text, action }) {
  return (
    <button
      onClick={action}
      className="font-primary mb-2 rounded border border-white px-2 py-1 text-left text-sm font-medium hover:border-gray-200 hover:bg-zinc-200"
    >
      {text}
    </button>
  );
}

function PopoverLink({ text, link }) {
  return (
    <Link href={`${link}`}>
      <a className="font-primary mb-2 rounded border border-white px-2 py-1 text-left text-sm font-medium hover:border-gray-200 hover:bg-zinc-200">
        {text}
      </a>
    </Link>
  );
}
