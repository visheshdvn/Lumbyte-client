import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {ApolloProvider} from '@apollo/client'
import client from '../apollo-client'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}

export default MyApp
