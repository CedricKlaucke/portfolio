import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen -mb-10 text-black bg-white dark:text-white dark:bg-neutral-900">
      <Head>
        <title>Cedric Klaucke</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <motion.main
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 1}}
        className="flex flex-col items-center w-full h-full mt-16 mb-10 space-y-4 "
      >
        <iframe src="./Cedric_CV.pdf" style={{position: "fixed", top: "0", left: "0", bottom: "0", right: "0", width: "100%", height: "100%", border: "none", margin: "0", padding: "0", overflow: "hidden"}}>
          Your browser doesn't support iframes
        </iframe>
      </motion.main>
    </div>
  )
}