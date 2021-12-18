import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { SessionProvider } from "next-auth/react";
import axios from "axios";

axios.defaults.baseURL="http://localhost:3000/api"

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider attribute="class">
          {router.pathname.startsWith("/admin") ? null : <Navbar />}
          <Component {...pageProps} />
          {router.pathname.startsWith("/admin") ? null : <Footer />}
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
