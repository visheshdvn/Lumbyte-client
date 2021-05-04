import "../styles/globals.css"
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
