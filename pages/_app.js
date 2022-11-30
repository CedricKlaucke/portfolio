import "tailwindcss/tailwind.css";
import { useState } from "react";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { Footer } from "../components/Footer";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  {/* sidebar */ }
  const [toggleNav, setToggleNav] = useState(false);

  return <>
    <Header
      setToggleNav={setToggleNav}
      toggleNav={toggleNav}
    />

    <SideNav
      setToggleNav={setToggleNav}
      toggleNav={toggleNav}
    />

    <AnimatePresence exitBeforeEnter initial={false}>
      <Component {...pageProps} />
    </AnimatePresence>

    <Footer />
  </>
}

export default MyApp
// pages/_app.js
import "../styles/globals.css"