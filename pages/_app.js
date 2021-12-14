import 'tailwindcss/tailwind.css'
import { useState } from 'react';
import { Header } from '../components/Header';
import { SideNav } from '../components/SideNav';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }) {
  {/* sidebar */ }
  const [sideCollapse, setSideCollapse] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  return <>
    <Header
      setSideCollapse={setSideCollapse}
      setToggleNav={setToggleNav}
      toggleNav={toggleNav}
    />

    <SideNav
      setSideCollapse={setSideCollapse}
      setToggleNav={setToggleNav}
      sideCollapse={sideCollapse}
      toggleNav={toggleNav}
    />

    <Component {...pageProps} />

    <Footer />
  </>
}

export default MyApp
// pages/_app.js
import '../styles/globals.css'