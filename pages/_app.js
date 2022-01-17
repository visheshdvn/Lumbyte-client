import { useEffect } from "react";
import { useRouter } from "next/router";
import { SessionProvider, useSession } from "next-auth/react";
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
import AccessDenied from "../components/accessDenied";

// import Auth from "../utils/protected-page";
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
          {Component.auth ? (
            <Auth roles={Component.auth.roles}>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}

          {/* {router.pathname.startsWith("/admin") ? null : <Footer />} */}
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

function Auth({ children, roles }) {
  const { data: session, status } = useSession({ required: true });
  const isUser = !!session?.user;

  if (isUser && status === "authenticated") {
    if (roles.includes(session.user.role)) {
      return children;
    }
    
    return <AccessDenied />;
  }

  return <div>Loading...</div>;
}

export default MyApp;
