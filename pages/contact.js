import React from "react"
import Link from "next/link"
import Head from 'next/head'

const contact = () => {
  return (
    <>
    <Head>
      <title>Lumbytes | Contact</title>
    </Head>
    <section className="my-20">
      <div className="container mx-auto border-b dark:border-gray-700 pb-3">
        <h1 className="font-bungee-shade text-gray-800 dark:text-white xl:text-6xl md:text-5xl sm:text-4xl text-3xl">
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
  )
}

export default contact
