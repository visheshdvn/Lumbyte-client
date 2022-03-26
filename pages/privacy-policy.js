import React from "react";
import Link from "next/link";
import Head from "next/head";
// components
import Navbar from "../components/elements/navbar/Navbar-client";
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
            <div className="mx-auto border-b border-zinc-200 pb-3 dark:border-gray-700">
              <h1 className="text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
            </div>
            <p className="mt-5 mb-10 font-medium md:text-lg">
              At LumBytes, we recognize that privacy of your personal
              information is important. Here is information on what types of
              personal information we receive and collect when you use visit
              lumbytes.com, and how we safeguard your information. We never sell
              your personal information to third parties.
            </p>
            {/*  */}
            <div className="mb-10">
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl">Cookies</h2>
              <p className="font-medium md:text-lg">
                LumBytes does use cookies to store information about visitors
                preferences, record user-specific information on which pages the
                user access or visit, customize Web page content based on
                visitors browser type or other information that the visitor
                sends via their browser.
              </p>
            </div>
            {/* Analytics Cookie */}
            <div className="mb-10">
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                Google Analytics Cookie
              </h2>
              <p className="font-medium md:text-lg">
                We use Google Analytics to get insights into consumer
                demography, psychography/consumer behavior, traffic sources, and
                other necessary information. However, we do not share the same
                for any commercial purpose.
              </p>
            </div>
            {/* Image Policy */}
            <div className="mb-10">
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                Image Policy
              </h2>
              <p className="font-medium md:text-lg">
                The images, shown in the article/content, contain the ownership
                of LumBytes. The images, which are from third-party, are given
                credit passes to individual ownership. Images are used merely
                for the reference purpose. <br />
                If you have the ownership of the Images and do not want to let
                us use them; kindly email us at lumbytes@gmail.com to remove the
                same. <br />
                <br />
                We care about the personal information you share online. At some
                points, LumBytes collects personal information so please read
                the policies to make sure you understand our practices fully.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
