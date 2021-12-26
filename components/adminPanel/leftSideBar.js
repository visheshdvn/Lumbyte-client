import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";

const LeftSideBar = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("light")
  }, [theme]);

  return (
    <div
      style={{ maxWidth: "312px", minWidth: "312px" }}
      className="h-screen flex items-center justify-center p-1 fixed"
    >
      <div className="h-full w-full bg-slate-900 rounded-lg relative">
        <div className="text-white border border-white h-40 w-40 absolute left-1/2 transform -translate-x-1/2 top-10 font-adminPrimary font">
          <div>Image here</div>
          <h1 className="text-center text-xl font-semibold">Vishesh Dhawan</h1>
          <h2 className="text-center text-sm font-normal">Superuser</h2>
        </div>
        <div className="between-rel-parent">
          <ul className="text-gray-400">
            <NavItem text="Dashboard" link="/admin" />
            <NavItem text="Blogposts" link="/admin/blogposts" />
            <NavItem text="Tags" link="#" />
            <NavItem text="Topics" link="#" />
          </ul>
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
