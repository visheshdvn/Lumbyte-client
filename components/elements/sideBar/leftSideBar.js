import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Popover } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";

const LeftSideBar = () => {
  const { data: session, status } = useSession();
  const { user } = session;
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [theme]);
  
  return (
    <div
      style={{ maxWidth: "312px", minWidth: "312px" }}
      className="fixed flex h-screen items-center justify-center"
    >
      <div className="relative h-full w-full bg-[#161619] pl-8">
        <div className="font-adminPrimary font absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 transform border border-white text-white">
          <div>Image here</div>
          <h1 className="text-center text-xl font-semibold">Vishesh Dhawan</h1>
          <h2 className="text-center text-sm font-normal">Superuser</h2>
        </div>
        <div className="between-rel-paren absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <ul className="text-gray-400">
            <NavItem text="Dashboard" link="/admin" />
            <NavItem text="Blogposts" link="/admin/blogposts" />
            <NavItem text="Tags" link="/admin/tags" />
          </ul>
        </div>
        <div className="borde absolute bottom-8 left-1/2 flex w-60 -translate-x-1/2 transform text-white">
          <div
            style={{ backgroundImage: `url(${user.dp})` }}
            className="mr-4 h-12 w-12 rounded-xl bg-cover bg-center"
          ></div>
          <div className="flex-1 flex-col justify-around">
            <h4 className="font-adminPrimary text-base font-semibold">
              {user.firstname} {user.lastname || ""}
            </h4>
            <h5 className="font-adminPrimary text-xs font-medium">
              {user.role.toLowerCase()}
            </h5>
          </div>
          <div className="flex items-center">
            <Popover className="relative">
              <Popover.Button>
                <i className="arrow up"></i>
              </Popover.Button>
              <Popover.Panel className="absolute -top-16 -left-20 z-10 overflow-hidden rounded-lg border-2 border-black bg-white px-2 py-1">
                <div className="text-grayMain w-24 text-center">
                  <button
                    onClick={() => signOut()}
                    className="font-adminPrimary rounded-lg text-sm font-semibold"
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

  const conditionalClass = path.toLowerCase().startsWith(text.toLowerCase())
    ? "bg-slate-800 text-white"
    : null;
  return (
    <ul>
      <div
        className={`font-adminPrimary flex h-14 w-60 items-center rounded-2xl pl-5 font-semibold ${conditionalClass}`}
      >
        <Link href={link} passHref>
          <a>{text}</a>
        </Link>
      </div>
    </ul>
  );
}

export default LeftSideBar;
