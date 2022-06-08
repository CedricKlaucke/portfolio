import Head from "next/head";
import { motion } from "framer-motion";
import { Container } from "../components/index/Container";
import { content } from "../arrays/indexArray";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 -mb-10 text-black bg-white dark:text-white dark:bg-neutral-900">
      <Head>
        <title>Cedric Klaucke</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <motion.main
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 1}}
        className="flex flex-col items-center w-full h-full max-w-screen-xl mt-20 mb-12 space-y-6"
      >
        {content.map((items, index) => {
          return (
            <Container key={index}
              title={items.title}
              text={items.text}
              image={items.image}
              left={index % 2}
            />
          );
        })}
      </motion.main>
    </div>
  )
}