import { useEffect, useState } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition, Switch } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { sun as SunIcon, moon as moonIcon } from "../../icons/themeSwitch";

const navigation = [
  { name: "Web", href: "/tags/web" },
  { name: "Blockchain", href: "/tags/blockchain" },
  { name: "Code", href: "/tags/code" },
  // { name: "Technology", href: "/tags/technology" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();
  const user = session?.user;

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="h-16"></div>
      <Disclosure
        as="nav"
        // style={{paddingTop: "2px"}}
        className="fixed top-0 z-40 w-full bg-white dark:bg-black"
      >
        {({ open }) => (
          <>
            <div
              style={{ paddingTop: "2px" }}
              className="horizontal-spacing-wide container mx-auto"
            >
              <div
                style={{ height: "57px" }}
                className="relative flex items-center justify-between"
              >
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href={"/"} passHref>
                      <a className="font-primary mb-0 h-8 w-auto font-bold leading-none">
                        <p className="block text-2xl lg:hidden">LB</p>
                        <p
                          style={{ fontSize: "26px", paddingTop: "2px" }}
                          className="hidden lg:block"
                        >
                          LumBytes
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div className="hidden items-center md:ml-16 md:flex">
                    <div className="flex space-x-8">
                      {navigation.map((item) => (
                        <Link href={item.href} passHref key={item.name}>
                          <a
                            className="font-primary text-sm font-medium hover:underline"
                            //   aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                  <button
                    type="button"
                    className="hidden rounded-full bg-white p-1 text-gray-600 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* theme switch below*/}
                  <Switch
                    checked={false}
                    onChange={() => {
                      if (theme === "light") {
                        setTheme("dark");
                      } else {
                        setTheme("light");
                      }
                    }}
                    // style={{ marginTop: "2px" }}
                    className="inline-flex w-6 cursor-pointer items-center focus:outline-none"
                  >
                    <span className="sr-only">Switch theme mode</span>
                    <div
                      style={{ width: "30px", height: "30px" }}
                      className="absolute flex transform items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-500"
                    >
                      <div className="h-5 w-5 text-xl">
                        {loaded && theme === "dark" ? (
                          <>{moonIcon}</>
                        ) : (
                          <>{SunIcon}</>
                        )}
                      </div>
                    </div>
                  </Switch>
                  {/* <ThemeSwitch /> */}

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-5 pl-3">
                    <div>
                      <Menu.Button className="aspect-1 flex overflow-hidden rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-white">
                        <span className="sr-only">Open user menu</span>
                        {(session && session.user.dp && (
                          <Image
                            src={user.dp}
                            alt={user.dpalt || "default user"}
                            height={32}
                            width={32}
                          />
                        )) || (
                          <div className="aspect-1 flex h-[32px] items-center justify-center rounded-full border-2 border-gray-800">
                            {/* {defaultUser} */}
                            <svg
                              viewBox="0 0 18 19"
                              xmlns="http://www.w3.org/2000/svg"
                              className="aspect-1 w-full scale-75 transform rounded-full bg-transparent fill-gray-800"
                            >
                              <path d="M4.5 4.5C4.5 6.981 6.519 9 9 9C11.481 9 13.5 6.981 13.5 4.5C13.5 2.019 11.481 0 9 0C6.519 0 4.5 2.019 4.5 4.5ZM17 19H18V18C18 14.141 14.859 11 11 11H7C3.14 11 0 14.141 0 18V19H17Z" />
                            </svg>
                          </div>
                        )}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={"div"}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                      show={true}
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {(status === "authenticated" && !!session.user && (
                          <>
                            <Menu.Item>
                              {/* user profile button */}
                              <ItemLink
                                text={`@${user.username}`}
                                link={`/${user.username}`}
                              />
                            </Menu.Item>
                            <div className="mb-1 px-2">
                              <hr className="text-black" />
                            </div>
                            {/* dashboard button */}
                            {session.user.roles.includes("CREATOR") && (
                              <ItemLink
                                text="Dashboard"
                                link={`/me/dashboard`}
                              />
                            )}
                            {/* admin panel link */}
                            {session.user.roles.includes("ADMIN") && (
                              <ItemLink text="Admin" link={`/admin`} />
                            )}
                            {/* settings link */}
                            <Menu.Item>
                              <ItemLink text="Settings" link={`/me/settings`} />
                            </Menu.Item>
                            {/* sign out button */}
                            <ItemButton text="Sign Out" action={signOut} />
                          </>
                        )) || (
                          <>
                            <ItemLink text="Sign In" link="/auth/signin" />
                          </>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <div
              style={{ height: "2px" }}
              className="w-full bg-black dark:bg-zinc-700"
            ></div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 border px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link href={item.href} passHref key={item.name}>
                    <a
                      className="font-primary block rounded-md px-3 py-2 text-base font-medium"
                      // aria-aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
                <hr />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

function ItemButton({ text, action }) {
  return (
    <button
      onClick={action}
      className="font-primary block w-full px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100"
    >
      {text}
    </button>
  );
}

function ItemLink({ text, link }) {
  return (
    <Link href={`${link}`}>
      <a className="font-primary block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
        {text}
      </a>
    </Link>
  );
}
