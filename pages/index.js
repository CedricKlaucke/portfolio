import useDarkMode from "./hooks/useDarkMode";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";

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
      height: 134,
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

  {/* mediaquery */ }
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <div className="flex flex-col min-h-screen py-2 items-center text-black-0 bg-white dark:text-white dark:bg-black-100">
      <Head>
        <title>Cedric Klaucke</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="fixed flex flex-row w-full h-16 top-0 left-0 items-center justify-between border-b shadow-md z-20 text-black-0 bg-white dark:text-white dark:bg-black-200 dark:border-black-300">
        {/* menu icon */}
        <a onClick={function () { setToggleNav(!toggleNav); setSideCollapse(false); setSideRotate(false) }} className="flex flex-col justify-between hover:cursor-pointer ml-5 h-6 w-6">
          <motion.div
            className="h-1 w-full rounded-full bg-black-0 dark:bg-white"
            animate={{
              rotate: toggleNav ? 45 : 0,
              y: toggleNav ? 10 : 0
            }}
          />
          <motion.div
            className="h-1 w-full rounded-full bg-black-0 dark:bg-white"
            animate={{
              opacity: toggleNav ? 0 : 1,
              x: toggleNav ? -50 : 0
            }}
          />
          <motion.div
            className="h-1 w-full rounded-full bg-black-0 dark:bg-white"
            animate={{
              rotate: toggleNav ? -45 : 0,
              y: toggleNav ? -10 : 0
            }}
          />
        </a>

        {/* center text */}
        <a href="/" className="flex items-center">
          <span className="text-xl tracking-wide">Cedric Klaucke</span>
        </a>

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
            className="fixed flex flex-col w-64 h-full top-0 left-0 border-r shadow-md z-10 text-black-0 bg-white dark:text-white dark:bg-black-200 dark:border-black-300"
            initial={{ opacity: 0, x: -256 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: -256 }}
          >
            {/* top list */}
            <ul className="flex flex-col py-4 space-y-1 mt-16">
              <li> {/* 1st top item */}
                <a href="/" className="relative flex flex-row h-11 pr-6 items-center border-l-4 border-transparent hover:border-purple-700 hover:bg-gray-50 focus:outline-none dark:hover:bg-black-300">
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
                <a href="#" className="relative flex flex-row h-11 pr-6 items-center border-l-4 border-transparent hover:border-purple-700 hover:bg-gray-50 focus:outline-none dark:hover:bg-black-300">
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
                <a href="#" className="relative flex flex-row h-11 pr-6 items-center border-l-4 border-transparent hover:border-purple-700 hover:bg-gray-50 focus:outline-none dark:hover:bg-black-300">
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
                <a onClick={function () { setSideCollapse(!sideCollapse); setSideRotate(!sideRotate) }} className="relative flex flex-row h-11 pr-6 items-center border-l-4 border-transparent hover:border-purple-700 hover:bg-gray-50 hover:cursor-pointer focus:outline-none dark:hover:bg-black-300">
                  <span className="inline-flex justify-center items-center ml-4">
                    <div className="flex flex-col w-5 h-5 justify-center items-center">
                      <motion.div
                        className="fixed w-5 h-1 rounded-lg bg-black-0 dark:bg-white"
                        animate={{ rotate: sideCollapse ? 0 : 90 }}
                      />
                      <motion.div
                        className="fixed w-5 h-1 rounded-lg bg-black-0 dark:bg-white"
                        animate={{ rotate: sideCollapse ? 0 : 180 }}
                      />
                    </div>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">School</span>
                </a>
              </li>

              <AnimatePresence> {/* 4th top item content */}
                {sideCollapse && (
                  <motion.ul
                    className="overflow-hidden border-t border-b bg-gray-100 dark:bg-black-100 dark:border-black-300"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  >
                    <motion.li variants={item}> {/* 1st collapse item */}
                      <a href="/modules" className="relative flex flex-row h-11 pr-6 items-center border-l-4 border-transparent hover:border-purple-700 hover:bg-gray-50 focus:outline-none dark:hover:bg-black-300">
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
                      <a href="#" className="relative flex flex-row h-11 pr-6 items-center border-l-4 border-transparent hover:border-purple-700 hover:bg-gray-50 focus:outline-none dark:hover:bg-black-300">
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
                      <a href="#" className="relative flex flex-row h-11 pr-6 items-center border-l-4 border-transparent hover:border-purple-700 hover:bg-gray-50 focus:outline-none dark:hover:bg-black-300">
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
                <a href="#" className="relative flex flex-row h-11 pr-6 items-center border-l-4 border-transparent hover:border-purple-700 hover:bg-gray-50 focus:outline-none dark:hover:bg-black-300">
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
            </ul>

            {/* bottom list */}
            <ul className="absolute overflow-hidden flex flex-col bottom-0 left-0 py-4 space-y-1 w-full border-t bg-white dark:bg-black-200 dark:border-black-300">
              <li> {/* 1st bottom item */}
                <a href="#" className="relative flex flex-row h-11 pr-6 items-center border-l-4 border-transparent hover:border-purple-700 hover:bg-gray-50 focus:outline-none dark:hover:bg-black-300">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="user"
                      className="w-5 h-5"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
                </a>
              </li>

              <li> {/* 2nd bottom item */}
                <a href="#" className="relative flex flex-row h-11 pr-6 items-center border-l-4 border-transparent hover:border-purple-700 hover:bg-gray-50 focus:outline-none dark:hover:bg-black-300">
                  <span className="inline-flex justify-center items-center ml-4">
                    {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-in-alt" class="svg-inline--fa fa-sign-in-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path></svg> */}

                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="sign-out-alt"
                      className="w-5 h-5"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
                </a>
              </li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
      {/* end side navbar */}

      {/* main content */}
      <main className="flex flex-col w-full h-full space-y-6 mt-16 items-center">
        {/* 1st container */}
        {isDesktop ?
          /* desktop */
          <div className="flex flex-col md:flex-row w-11/12 md:h-96 border-2 rounded-2xl overflow-hidden dark:bg-black-100 dark:border-black-300">
            <div className="flex flex-col w-full md:border-l-2 border-b-2 border-r-0 md:border-b-0 dark:border-black-300">
              <div className="flex w-full border-b-2 h-16 items-center justify-center dark:border-black-300">
                <span className="font-bold text-xl">Gamen</span>
              </div>
              <div className="flex h-full items-center justify-center">
                <span>main text</span>
              </div>
            </div>
            <div className="image relative flex">
              <Image
                src="/img/computer.jpeg"
                alt="foto"
                layout="fixed"
                objectFit="cover"
                objectPosition="center"
                priority={false}
                width={682}
                height={384}
              />
            </div>
          </div> :
          /* mobile */
          <div className="flex flex-col md:flex-row w-11/12 md:h-96 border-2 rounded-2xl overflow-hidden dark:bg-black-100 dark:border-black-300">
            <div className="flex flex-col w-full md:border-r-2 border-b-2 border-r-0 md:border-b-0 dark:border-black-300">
              <div className="flex w-full border-b-2 h-16 items-center justify-center dark:border-black-300">
                <span className="font-bold text-xl">Gamen</span>
              </div>
              <div className="flex h-full items-center justify-center">
                <span>main text</span>
              </div>
            </div>
            <div className="image relative flex">
              <Image
                src="/img/computer.jpeg"
                alt="foto"
                layout="fixed"
                objectFit="cover"
                objectPosition="center"
                priority={false}
                width={500}
                height={200}
              />
            </div>
          </div>
        }

        {/* 2nd container */}
        {isDesktop ?
          /* desktop */
          <div className="flex flex-col md:flex-row w-11/12 md:h-96 border-2 rounded-2xl overflow-hidden dark:bg-black-100 dark:border-black-300">
            <div className="image relative flex">
              <Image
                src="/img/festival.jpg"
                alt="foto"
                layout="fixed"
                objectFit="cover"
                objectPosition="center"
                priority={false}
                width={682}
                height={384}
              />
            </div>
            <div className="flex flex-col w-full md:border-l-2 border-b-2 border-r-0 md:border-b-0 dark:border-black-300">
              <div className="flex w-full border-b-2 h-16 items-center justify-center dark:border-black-300">
                <span className="font-bold text-xl">Festivals</span>
              </div>
              <div className="flex h-full items-center justify-center">
                <span>main text</span>
              </div>
            </div>
          </div> :
          /* mobile */
          <div className="flex flex-col md:flex-row w-11/12 md:h-96 border-2 rounded-2xl overflow-hidden dark:bg-black-100 dark:border-black-300">
            <div className="flex flex-col w-full md:border-r-2 border-b-2 border-r-0 md:border-b-0 dark:border-black-300">
              <div className="flex w-full border-b-2 h-16 items-center justify-center dark:border-black-300">
                <span className="font-bold text-xl">Festivals</span>
              </div>
              <div className="flex h-full items-center justify-center">
                <span>main text</span>
              </div>
            </div>
            <div className="image relative flex">
              <Image
                src="/img/festival.jpg"
                alt="foto"
                layout="fixed"
                objectFit="cover"
                objectPosition="center"
                priority={false}
                width={500}
                height={200}
              />
            </div>
          </div>
        }

        {/* 3rd container */}
        {isDesktop ?
          /* desktop */
          <div className="flex flex-col md:flex-row w-11/12 md:h-96 border-2 rounded-2xl overflow-hidden dark:bg-black-100 dark:border-black-300">
            <div className="flex flex-col w-full md:border-l-2 border-b-2 border-r-0 md:border-b-0 dark:border-black-300">
              <div className="flex w-full border-b-2 h-16 items-center justify-center dark:border-black-300">
                <span className="font-bold text-xl">Boulderen</span>
              </div>
              <div className="flex h-full items-center justify-center">
                <span>main text</span>
              </div>
            </div>
            <div className="image relative flex">
              <Image
                src="/img/boulder.png"
                alt="foto"
                layout="fixed"
                objectFit="cover"
                objectPosition="center"
                priority={false}
                width={682}
                height={384}
              />
            </div>
          </div> :
          /* mobile */
          <div className="flex flex-col md:flex-row w-11/12 md:h-96 border-2 rounded-2xl overflow-hidden dark:bg-black-100 dark:border-black-300">
            <div className="flex flex-col w-full md:border-r-2 border-b-2 border-r-0 md:border-b-0 dark:border-black-300">
              <div className="flex w-full border-b-2 h-16 items-center justify-center dark:border-black-300">
                <span className="font-bold text-xl">Boulderen</span>
              </div>
              <div className="flex h-full items-center justify-center">
                <span>main text</span>
              </div>
            </div>
            <div className="image relative flex">
              <Image
                src="/img/boulder.png"
                alt="foto"
                layout="fixed"
                objectFit="cover"
                objectPosition="center"
                priority={false}
                width={500}
                height={200}
              />
            </div>
          </div>
        }
      </main>
      {/* end main content */}
    </div>
  )
}