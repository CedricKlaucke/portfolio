import 'tailwindcss/tailwind.css'
import { useState } from 'react';
import { useCycle } from 'framer-motion';
import { Header } from './../components/Header';
import { SideNav } from './../components/SideNav';

function MyApp({ Component, pageProps }) {
  {/* sidebar nav toggle */ }
  const [toggleNav, setToggleNav] = useCycle(false, true);

  {/* sidebar collapse */ }
  const [sideCollapse, setSideCollapse] = useState(false);

  const [sideRotate, setSideRotate] = useState();
  
  return <>
    <Header
      setSideCollapse={setSideCollapse}
      setSideRotate={setSideRotate}
      setToggleNav={setToggleNav}
      toggleNav={toggleNav}
    />

    <SideNav
      setSideCollapse={setSideCollapse}
      setSideRotate={setSideRotate}
      setToggleNav={setToggleNav}
      sideCollapse={sideCollapse}
      sideRotate={sideRotate}
      toggleNav={toggleNav}
    />
    
    <Component {...pageProps} />
  </>
}

export default MyApp
// pages/_app.js
import '../styles/globals.css'
