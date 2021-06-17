import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { ApolloProvider } from "@apollo/client"
import client from "../apollo-client"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
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
