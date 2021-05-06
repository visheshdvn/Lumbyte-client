import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
