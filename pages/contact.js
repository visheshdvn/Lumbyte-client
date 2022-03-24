import React from "react";
import Link from "next/link";
import Head from "next/head";
// components
import Navbar from "../components/elements/navbar/Navbar-client";

const contact = () => {
  return (
    <>
      <Head>
        <title>Lumbytes | Contact</title>
      </Head>
      
      {/* body */}
      <Navbar />
      <section className="my-20">
        <div className="container mx-auto border-b pb-3 dark:border-gray-700">
          <h1 className="font-bungee-shade text-3xl text-gray-800 dark:text-white sm:text-4xl md:text-5xl xl:text-6xl">
            Contact
          </h1>
        </div>
        <div className="container mx-auto my-5">
          For any queries you can mail us at -{" "}
          <Link href="mailto: abc@example.com">
            <a className="font-bold">lumbytes@gmail.com</a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default contact;
