import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="dark">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=PT+Sans+Narrow:wght@700&family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/logo/FavIcon2.png" />
        </Head>
        <body className="dark:bg-darkGray">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
