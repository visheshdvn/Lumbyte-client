import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import {
  HomeIcon as HomeIconSolid,
  PencilAltIcon as PencilAltIconSolid,
  TagIcon as TagIconSolid,
} from "@heroicons/react/solid";
import {
  HomeIcon as HomeIconOutline,
  PencilAltIcon as PencilAltIconOutline,
  TagIcon as TagIconOutline,
} from "@heroicons/react/outline";

const LeftSideBar = () => {
  const { data: session, status } = useSession();
  const { user } = session;

  return (
    <>
      <div className="w-80">
        <div
          style={{ maxWidth: "312px", minWidth: "312px" }}
          className="font-primary fixed flex h-screen items-center justify-center"
        >
          <div className="bg-darkGray relative h-full w-full border-zinc-800 pl-8 dark:border-r dark:bg-black">
            <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 transform border border-white text-white">
              <div>Image here</div>
              <h1 className="text-center text-xl font-semibold">
                Vishesh Dhawan
              </h1>
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
                <h4 className="text-base font-semibold">
                  {user.firstname} {user.lastname || ""}
                </h4>
                <h5 className="text-xs font-medium">
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
                        className="rounded-lg text-sm font-medium"
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
      </div>
    </>
  );
};

function NavItem({ text, link }) {
  const router = useRouter();
  let path = router.pathname.replace("/admin/", "");
  const thisPath = path.toLowerCase().startsWith(text.toLowerCase());

  const conditionalClass = path.toLowerCase().startsWith(text.toLowerCase())
    ? "bg-slate-800 text-white font-bold"
    : "font-medium";

  const icon = {
    Dashboard: thisPath ? (
      <HomeIconSolid className="mr-2 h-5 w-5" />
    ) : (
      <HomeIconOutline className="mr-2 h-5 w-5" />
    ),
    Blogposts: thisPath ? (
      <PencilAltIconSolid className="mr-2 h-5 w-5" />
    ) : (
      <PencilAltIconOutline className="mr-2 h-5 w-5" />
    ),
    Tags: thisPath ? (
      <TagIconSolid className="mr-2 h-5 w-5" />
    ) : (
      <TagIconOutline className="mr-2 h-5 w-5" />
    ),
  }[text];

  return (
    <ul>
      <div
        className={`font-primary flex h-14 w-60 items-center rounded-2xl pl-5 ${conditionalClass}`}
      >
        {icon}
        <Link href={link} passHref>
          <a>{text}</a>
        </Link>
      </div>
    </ul>
  );
}

export default LeftSideBar;
