import { useEffect } from "react";
import { useRouter } from "next/router";
import { SessionProvider, useSession } from "next-auth/react";
// third party libraries
import * as gtag from "../lib/gtag";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";

// component
import AccessDenied from "../components/accessDenied";

// css
import "../styles/components.css";
import "../styles/form.css";
import "../styles/globals.css";
import "../styles/utilitiy.css";
import "../styles/editorjs.css";

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
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />
      <SessionProvider session={pageProps.session}>
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
        >
          {Component.auth ? (
            <Auth roles={Component.auth.roles}>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

function Auth({ children, roles }) {
  const { data: session, status } = useSession({ required: true });
  const isUser = !!session?.user;

  if (isUser && status === "authenticated") {
    // console.log("session", session.user.roles);
    // console.log("page roles", roles);
    const intersectingRoles = roles.filter((role) =>
      session.user.roles.includes(role)
    );
    // console.log(intersectingRoles);

    if (!!intersectingRoles.length) {
      return children;
    }

    return <AccessDenied />;
  }

  return <div>Loading...</div>;
}

export default MyApp;
