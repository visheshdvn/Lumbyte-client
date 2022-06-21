import React from "react";
import Image from "next/image";
import Router from "next/router";
import { useSession } from "next-auth/react";
import HeadStories from "../../headTags/unIndexed/creator/stories";
import FormattedDate from "../../micro/formattedDate";
import { cross } from "../../icons/creatorPanel";
import ShowTags from "../../micro/showTags";
import EditBanner from "../../elements/dropzone/image";
import { getValidImageURL } from "../../../utils/checkValidURL";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { moon as moonIcon, sun as sunIcon } from "../../icons/themeSwitch";

const editCreate = ({
  children,
  title,
  slug,
  lastEdited,
  titleRef,
  excerptRef,
  dataState,
  setFileHandler,
  published,
}) => {
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();
  return (
    <>
      {/* head */}
      <HeadStories title={title} />
      {/* body */}
      <div className="horizontal-spacing container mx-auto mt-5 text-neutral-400 dark:text-neutral-500">
        <header className="font-primary flex items-center justify-between">
          <div>
            <div className="mb-1 text-xl font-medium">{slug}</div>
            <div className="text-sm font-medium italic">
              Last edited:{" "}
              <time>
                <FormattedDate date={lastEdited} />
              </time>
            </div>
          </div>

          <div className="flex h-14 items-center">
            <Switch
              checked={theme === "dark"}
              onChange={() => {
                if (theme === "light") {
                  setTheme("dark");
                  return;
                }
                setTheme("light");
              }}
              className="inline-flex cursor-pointer items-center focus:outline-none"
            >
              <span className="sr-only">Switch theme mode</span>
              <div className="mr-5">
                <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full hover:bg-gray-100 dark:hover:bg-gray-500">
                  {theme === "dark" ? <>{moonIcon}</> : <>{sunIcon}</>}
                </div>
              </div>
            </Switch>
            <button
              style={{ width: "20.5px", height: "20.5px" }}
              onClick={() => Router.back()}
            >
              {cross}
            </button>
          </div>
        </header>

        <div className="mt-10 grid grid-cols-11 gap-4">
          {/* main content */}
          <div className="col-span-8 pb-40">
            <div
              className={`mb-5 flex items-center ${
                !!published
                  ? "text-neutral-400"
                  : "text-black dark:text-zinc-50"
              }`}
            >
              {dataState.tags.map((tag) => (
                <ShowTags
                  tagname={tag.tagname}
                  color={tag.color}
                  key={tag.tagname}
                />
              ))}
            </div>

            {/* title */}
            <div
              className={`need-placeholder unstyled-input mb-2 w-full text-4xl font-bold leading-tight ${
                !!published
                  ? "text-neutral-400"
                  : "text-black dark:text-zinc-50"
              }`}
              ref={titleRef}
              contentEditable={!dataState.published}
              suppressContentEditableWarning={true}
              placeholder="Enter Title"
              onPaste={(e) => {
                e.preventDefault();
                var text = (e.originalEvent || e).clipboardData.getData(
                  "text/plain"
                );
                document.execCommand("insertHTML", false, text);
              }}
            >
              {dataState.title}
            </div>

            {/* Excerpt */}
            <div
              ref={excerptRef}
              className={`need-placeholder unstyled-input mt-3 text-base font-medium leading-snug md:mt-0 md:text-lg md:leading-snug lg:leading-snug xl:leading-snug ${
                published
                  ? "text-neutral-400"
                  : "text-neutral-600 dark:text-zinc-300"
              }`}
              contentEditable={!dataState.published}
              suppressContentEditableWarning={true}
              placeholder="Write excerpt"
              onPaste={(e) => {
                e.preventDefault();
                var text = (e.originalEvent || e).clipboardData.getData(
                  "text/plain"
                );
                document.execCommand("insertHTML", false, text);
              }}
            >
              {dataState.excerpt}
            </div>

            <div
              className={`mt-7 mb-8 flex items-center ${
                !published ? "text-black dark:text-zinc-50" : "text-neutral-400"
              }`}
            >
              <div className="aspect-1 overflow-hidden rounded-full">
                <Image
                  src={session.user?.dp || getValidImageURL("/me.jpg")}
                  alt={session.user?.dpalt}
                  width={24}
                  height={24}
                />
              </div>
              <div className="font-primary ml-2 flex items-center text-xs">
                <h3 className="font-semibold">
                  {session.user?.firstname} {session.user?.lastname || ""}
                </h3>
                <div className="ml-4 flex h-3 items-center font-medium">
                  <span className="">
                    <FormattedDate date={new Date().toISOString()} />
                  </span>
                  <span className="mx-2">•</span>
                  <span className="">{dataState.minuteRead} min read</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="aspect-w-16 aspect-h-10 mb-8 w-full">
              <div className="rounded bg-[#D9D9D9] dark:bg-neutral-800">
                <EditBanner
                  setFile={setFileHandler}
                  bannerUrl={dataState.banner}
                />
              </div>
            </div>

            {/* editor holder */}
            <div
              id="content-editor"
              className={`editorjs-editable col-span-2 font-serif ${
                !!published
                  ? "text-neutral-400"
                  : "text-black dark:text-zinc-50"
              }`}
            ></div>
          </div>
          {/* meta */}
          <>{children}</>;
        </div>
      </div>
    </>
  );
};

export default editCreate;
