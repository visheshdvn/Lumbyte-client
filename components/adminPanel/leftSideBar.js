import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Popover } from "@headlessui/react";
import { signOut } from "next-auth/react";

const LeftSideBar = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, [theme]);

  return (
    <div
      style={{ maxWidth: "312px", minWidth: "312px" }}
      className="h-screen flex items-center justify-center fixed"
    >
      <div className="h-full w-full bg-[#161619] relative pl-8">
        <div className="text-white border border-white h-40 w-40 absolute left-1/2 transform -translate-x-1/2 top-10 font-adminPrimary font">
          <div>Image here</div>
          <h1 className="text-center text-xl font-semibold">Vishesh Dhawan</h1>
          <h2 className="text-center text-sm font-normal">Superuser</h2>
        </div>
        <div className="between-rel-paren absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="text-gray-400">
            <NavItem text="Dashboard" link="/admin" />
            <NavItem text="Blogposts" link="/admin/blogposts" />
            <NavItem text="Tags" link="/admin/tags" />
            <NavItem text="Topics" link="/admin/topics" />
            <NavItem text="Media" link="/admin/media" />
          </ul>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 borde w-60 flex text-white">
          <div
            style={{ backgroundImage: "url(/me.jpg)" }}
            className="h-12 w-12 bg-cover bg-center rounded-xl mr-4"
          ></div>
          <div className="flex-col flex-1 justify-around">
            <h4 className="text-base font-semibold font-adminPrimary">
              Vishesh Dhawan
            </h4>
            <h5 className="text-xs font-medium font-adminPrimary">Superuser</h5>
          </div>
          <div className="flex items-center">
            <Popover className="relative">
              <Popover.Button>
                <i className="arrow up"></i>
              </Popover.Button>
              <Popover.Panel className="absolute z-10 -top-16 -left-20 bg-white rounded-lg overflow-hidden px-2 py-1 border-2 border-black">
                <div className="w-24 text-grayMain text-center">
                  <button
                    onClick={() => signOut()}
                    className="rounded-lg text-sm font-adminPrimary font-semibold"
                  >
                    Sign Out
                  </button>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

function NavItem({ text, icon, link }) {
  const router = useRouter();
  let path = router.pathname.replace("/admin/", "");
  console.log("sidebar rendering");

  const conditionalClass = path.toLowerCase().startsWith(text.toLowerCase())
    ? "bg-slate-800 text-white"
    : null;
  return (
    <ul>
      <div
        className={`h-14 w-60 rounded-2xl flex items-center pl-5 font-adminPrimary font-semibold ${conditionalClass}`}
      >
        <Link href={link} passHref>
          <a>{text}</a>
        </Link>
      </div>
    </ul>
  );
}

export default LeftSideBar;
