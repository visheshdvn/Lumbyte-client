import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="dark" lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

          {/* depriciate */}
          <link
            href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=PT+Sans+Narrow:wght@700&family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />

          {/* new fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Antonio:wght@700&family=Open+Sans+Condensed:wght@300;700&family=Raleway+Dots&family=Raleway:wght@400;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/logo/FavIcon2.png" />

          {/* google analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="dark:bg-darkGray">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
