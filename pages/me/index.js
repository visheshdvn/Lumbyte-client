import React from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import Head from "next/head";

const index = () => {
  const { data: session, status } = useSession();
  console.log(session);

  if (session) {
    Router.push(`/${session.user.username}`);
  }

  const defaultMarkup = <></>;

  const fallbackMarkup =
    status === "loading" ? (
      <></>
    ) : (
      <>
        <Head>
          <title>Sign In to Lumbytes</title>
        </Head>
        <div className="flex h-screen w-screen items-center justify-center">
          <div className="rounded">
            <h1 className="font-primary mb-5 text-3xl font-medium">
              Sign In to access this page
            </h1>
            <div className="flex justify-center">
              <button
                onClick={() => Router.push("/auth/signin")}
                className="font-primary mx-3 h-11 rounded border-2 border-black bg-black px-4 font-medium text-white"
              >
                Sign In
              </button>
              <button
                onClick={() => Router.back()}
                className="font-primary mx-3 h-11 rounded border-2 border-black bg-white px-3 font-medium text-black"
              >
                Return to previous page
              </button>
            </div>
          </div>
        </div>
      </>
    );

  return session ? defaultMarkup : fallbackMarkup;
};

export default index;
