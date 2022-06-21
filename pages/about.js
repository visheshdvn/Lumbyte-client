import React from "react";
import Link from "next/link";
import Head from "next/head";
// components
import Navbar from "../components/elements/navbar/Navbar";
import Footer from "../components/elements/footer/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>Lumbytes | Contact</title>
      </Head>

      {/* body */}
      <Navbar />
      <section className="horizontal-spacing container my-20 mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {/* About */}
          <div className="col-span-3 mb-10 lg:col-span-2">
            <div className="container mx-auto border-b border-zinc-200 pb-3 dark:border-gray-700">
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl xl:text-4xl">
                About
              </h1>
            </div>
            <p className="container mx-auto mt-5 font-medium md:text-lg">
              Welcome to LumByes! <br />
              At LumBytes, we aim to cover all the aspects of technology that
              affects your everyday life. From blockchains to artificial
              intellegence, education to making money, we aim to deliver the
              latest buzz in the industry fastest with entertainment and
              transparency.
            </p>
          </div>

          {/* Contact */}
          <div className="col-span-3 lg:col-span-2">
            <div className="container mx-auto border-b border-zinc-200 pb-3 dark:border-gray-700">
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl xl:text-4xl">
                Contact
              </h1>
            </div>
            <div className="container mx-auto my-5 font-medium md:text-lg">
              For any queries you can mail us at -{" "}
              <Link href="mailto: abc@example.com" passHref>
                <a className="font-bold underline-offset-2 hover:underline">
                  lumbytes@gmail.com
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <Footer />
    </>
  );
};

export default About;
