import { useEffect } from "react"
import { useRouter } from "next/router"
import * as gtag from "../lib/gtag"

import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { ApolloProvider } from "@apollo/client"
import client from "../apollo-client"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
