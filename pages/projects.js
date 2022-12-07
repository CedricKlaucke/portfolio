import Head from "next/head"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 -mb-10 text-black bg-white dark:text-white dark:bg-neutral-900">
      <Head>
        <title>Cedric Klaucke</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      {/* main content */}
      <motion.main
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 1}}
        className="flex flex-col items-center w-full h-full mt-16 mb-10 space-y-4 "
      >
        Word nog aan gewerkt
        {/* <iframe src="https://poke-api-murex.vercel.app/" /> */}

        {/* <iframe src="https://novel-site-five.vercel.app/" /> */}
      </motion.main>
      {/* end main content */}
    </div>
  )
}