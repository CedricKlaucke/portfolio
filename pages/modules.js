import useDarkMode from "./useDarkMode"
import Head from "next/head"
import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useCycle } from "framer-motion"

export default function Home() {
  {/* sidebar nav toggle */ }
  const [toggleNav, setToggleNav] = useCycle(false, true)

  {/* sidebar collapse */ }
  const [sideCollapse, setSideCollapse] = useState(false)

  const [sideRotate, setSideRotate] = useState()

  const container = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.75,
        staggerChildren: 0.25,
        staggerDirection: -1
      }
    },
    show: {
      height: 132,
      opacity: 1,
      transition: {
        duration: 0.75,
        staggerChildren: 0.25
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  {/* tailwind darkmode */ }
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <div className="flex flex-col items-center min-h-screen py-2 text-black bg-white dark:text-white dark:bg-black">
      <Head>
        <title>Cedric Klaucke</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <header className="fixed flex flex-row items-center justify-between top-0 left-0 w-full h-16 border-b shadow-md z-20 text-black bg-white dark:text-white dark:bg-black">
        {/* menu icon */}
        <a onClick={function () { setToggleNav(!toggleNav); setSideCollapse(false); setSideRotate(false) }} className="flex flex-col justify-between hover:cursor-pointer ml-5 h-6 w-6">
          <motion.div
            className="h-1 w-full rounded-full bg-black dark:bg-white"
            animate={{
              rotate: toggleNav ? 45 : 0,
              y: toggleNav ? 10 : 0
            }}
          />
          <motion.div
            className="h-1 w-full rounded-full bg-black dark:bg-white"
            animate={{
              opacity: toggleNav ? 0 : 1,
              x: toggleNav ? -50 : 0
            }}
          />
          <motion.div
            className="h-1 w-full rounded-full bg-black dark:bg-white"
            animate={{
              rotate: toggleNav ? -45 : 0,
              y: toggleNav ? -10 : 0
            }}
          />
        </a>

        {/* center text */}
        <div className="flex items-center">
          <span className="text-xl tracking-wide">Cedric Klaucke</span>
        </div>

        {/* darkmode icon/button */}
        <div className="flex flex-col h-6 w-6 mr-5">
          <AnimatePresence>
            {colorTheme === "light" ? (
              <motion.svg
                /* motion stuff */
                key="expanded"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                exit={{ opacity: 0, y: -25 }}
                /* svg stuff */
                onClick={() => setTheme("light")}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sun"
                className="fixed h-6 w-6 hover:cursor-pointer"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                />
              </motion.svg>
            ) : (
              <motion.svg
                /* motion stuff */
                key="collapsed"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                exit={{ opacity: 0, y: -25 }}
                /* svg stuff */
                onClick={() => setTheme("dark")}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="moon"
                className="fixed h-6 w-6 hover:cursor-pointer"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* side navbar */}
      <AnimatePresence>
        {toggleNav && (
          <motion.aside
            className="fixed flex flex-col top-0 left-0 w-64 h-full border-r shadow-md z-10 text-black bg-white dark:text-white dark:bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            {/* top list */}
            <motion.ul
              className="flex flex-col py-4 space-y-1 mt-16"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ x: -100 }}
            >
              <li> {/* 1st top item */}
                <a href="/" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-purple-700 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="home"
                      className="w-5 h-5"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Home</span>
                </a>
              </li>

              <li> {/* 2nd top item */}
                <a href="/over_mij" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-purple-700 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Over mij</span>
                </a>
              </li>

              <li> {/* 3rd top item */}
                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-purple-700 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Mijn CV</span>
                </a>
              </li>

              <li> {/* 4th top item */}
                <a onClick={function () { setSideCollapse(!sideCollapse); setSideRotate(!sideRotate) }} className="hover:cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-purple-700 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <motion.div animate={{ rotate: sideRotate ? -90 : 0 }}>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-down"
                        className="w-5 h-5"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
                        />
                      </svg>
                    </motion.div>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">School</span>
                </a>
              </li>

              <AnimatePresence> {/* 4th top item content */}
                {sideCollapse && (
                  <motion.ul
                    className="overflow-hidden border-t border-b bg-gray-100 dark:bg-gray-900"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  >
                    <motion.li variants={item}> {/* 1st collapse item */}
                      <a href="/modules/01" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-purple-700 pr-6">
                        <span className="inline-flex justify-center items-center ml-6">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                          </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Modules</span>
                      </a>
                    </motion.li>

                    <motion.li variants={item}> {/* 2nd collapse item */}
                      <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-purple-700 pr-6">
                        <span className="inline-flex justify-center items-center ml-6">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                          </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">die ding</span>
                      </a>
                    </motion.li>

                    <motion.li variants={item}> {/* 3rd collapse item */}
                      <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-purple-700 pr-6">
                        <span className="inline-flex justify-center items-center ml-6">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                          </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">die ding</span>
                      </a>
                    </motion.li>
                  </motion.ul>
                )}
              </AnimatePresence>

              <li> {/* 5th top item */}
                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-purple-700 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Contact</span>
                </a>
              </li>
            </motion.ul>

            {/* bottom list */}
            <motion.ul
              className="absolute flex flex-col bottom-0 left-0 py-4 space-y-1 w-full border-t bg-white dark:bg-black"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ y: 100 }}
            >
              <li> {/* 1st bottom item */}
                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-purple-700 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
                </a>
              </li>

              <li> {/* 2nd bottom item */}
                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-purple-700 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
                </a>
              </li>
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
      {/* end side navbar */}

      {/* main content */}
      <main className="flex flex-col space-y-4 mt-16 w-full h-full items-center">
        {/* top bar */}
        <div className="flex w-11/12 h-16 border rounded-xl justify-center">
          <div className="flex w-full">
            <a href="#" className="flex w-1/12 h-16 items-center justify-center border-r">
              <span>01</span>
            </a>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>02</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>03</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>04</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>05</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>06</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>07</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>08</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>09</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>10</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>11</span>
            </div>
            <div className="flex w-1/12 items-center justify-center">
              <span>12</span>
            </div>
          </div>
          <div className="flex w-full">
            <a href="#" className="flex w-1/12 h-16 items-center justify-center border-r">
              <span>01</span>
            </a>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>02</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>03</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>04</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>05</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>06</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>07</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>08</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>09</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>10</span>
            </div>
            <div className="flex w-1/12 items-center justify-center border-r">
              <span>11</span>
            </div>
            <div className="flex w-1/12 items-center justify-center">
              <span>12</span>
            </div>
          </div>
        </div>
      </main>
      {/* end main content */}
    </div>
  )
}