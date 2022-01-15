import { useEffect } from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
// third party libraries
import axios from "axios";
import * as gtag from "../lib/gtag";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { ThemeProvider } from "next-themes";

// css
import "../styles/components.css";
import "../styles/form.css";
import "../styles/globals.css";
import "../styles/utilitiy.css";

// component
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

axios.defaults.baseURL = "http://localhost:3000/api";

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
          {/* {router.pathname.startsWith("/admin") ? null : <Navbar />} */}
          <Component {...pageProps} />
          {/* {router.pathname.startsWith("/admin") ? null : <Footer />} */}
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
