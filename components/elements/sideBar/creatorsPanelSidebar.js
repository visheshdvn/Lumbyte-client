import React from "react";
import Image from "next/image";
import Link from "next/link";
import { dashboard, stories, tags } from "../../icons/creatorPanel";

const CreatorSideBar = () => {
  return (
    <aside className="">
      <div className="mb-16 flex items-center">
        <div className="aspect-1 w-7 overflow-hidden rounded-full lg:w-10">
          <Image
            src="/logo/Logo-SimpletextDark.png"
            alt="LumBytes"
            width={40}
            height={40}
          />
        </div>
        <h1 className="font-primary pl-3 text-2xl font-bold">Creator</h1>
      </div>
      <div className="mb-10">
        <QuickLink text="Dashboard" link={"/me/dashboard"} icon={dashboard} />
      </div>
      <div className="mb-10">
        <h2 className="font-primary mb-2 text-base font-medium">Manage</h2>
        <QuickLink text="Stories" icon={stories} link={"/me/stories"} />
        <QuickLink
          text="Drafts"
          link={"/me/stories"}
          query={{ status: "draft" }}
        />
        <QuickLink
          text="Live"
          link={"/me/stories"}
          query={{ status: "live" }}
        />
      </div>
      <div className="mb-10">
        <QuickLink text="Tags" icon={tags} />
        <QuickLink text="Notifications" />
      </div>
    </aside>
  );
};

function QuickLink({ link, icon, text, query }) {
  return (
    <Link href={link ? { pathname: link, query } : "#"} passHref>
      <a className="">
        <div className="mb-3 flex items-center">
          {icon ? (
            <div className="aspect-1 w-4">{icon}</div>
          ) : (
            <div className="aspect-1 w-4"></div>
          )}
          <h2 className="font-primary flex h-full items-center pl-2 font-medium">
            {text}
          </h2>
        </div>
      </a>
    </Link>
  );
}

export default CreatorSideBar;
