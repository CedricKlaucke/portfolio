import { AnimatePresence, motion } from "framer-motion";
import { SideNavLi } from "./SideNav.li";

export const SideNav = ({
  setToggleNav,
  toggleNav,
}) => {
  const items = [
    {
      link: "/",
      svg: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" className="w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" /></svg>,
      text: "Home",
    }, {
      link: "/",
      svg: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>,
      text: "Over mij",
    }, {
      link: "/",
      svg: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>,
      text: "Mijn CV",
    }, {
      link: "projects",
      svg: "",
      text: "Projecten",
    }
  ]

  const bottomItems = [
    {
      link: "",
      svg: <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" className="w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/></svg>,
      text: "Profile",
    }, {
      link: "",
      svg: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" className="w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"/></svg>,
      text: "Logout",
    }
  ]

  return (
    <AnimatePresence>
      {toggleNav && (
        <>
          <motion.aside
            className="fixed top-0 left-0 z-20 flex flex-col w-64 h-full text-black bg-white border-r shadow-md dark:text-white dark:bg-neutral-850 dark:border-neutral-800"
            initial={{ opacity: 0, x: -256 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: -256 }}
          >
            <ul className="flex flex-col py-4 mt-16">
              {items.map((item, index) => {
                return (
                  <SideNavLi key={`sidenav ${index}`}
                    link={item.link}
                    svg={item.svg}
                    text={item.text}
                    setToggleNav={setToggleNav}
                    toggleNav={toggleNav}
                  />
                )
              })}
            </ul>

            {/* bottom list */}
            <ul className="absolute bottom-0 left-0 flex flex-col w-full py-4 space-y-1 overflow-hidden bg-white border-t dark:bg-neutral-850 dark:border-neutral-800">
              {bottomItems.map((item, index) => {
                return (
                  <SideNavLi key={`sidenav.bottom ${index}`}
                    link={item.link}
                    svg={item.svg}
                    text={item.text}
                    setToggleNav={setToggleNav}
                    toggleNav={toggleNav}
                  />
                )
              })}
            </ul>
          </motion.aside>

          {/* close menu on outside click */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => { setToggleNav(!toggleNav) }}
            className="fixed z-10 w-full h-screen bg-black/25"
          />
        </>
      )}
    </AnimatePresence>
  )
}