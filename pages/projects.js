import Head from "next/head"
import { motion } from "framer-motion"
import Image from "next/image"
import useMediaQuery from "/hooks/useMediaQuery";

export default function Home() {
  const projects = [
    {
      title: "Novel Site",
      image: "/projects/novel-site.png",
      link: "https://novel-site-five.vercel.app/",
    }, {
      title: "Pokemon API",
      image: "/projects/poke-api.png",
      link: "https://poke-api-murex.vercel.app/",
    }
  ]

  return (
    <div className="flex flex-col items-center min-h-screen py-2 -mb-10 text-black bg-white dark:text-white dark:bg-neutral-900">
      <Head>
        <title>Cedric Klaucke</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center w-full h-full max-w-screen-xl mt-16 mb-10 space-y-4 xl:justify-between"
      >
        {projects.map((item, index) => {
          const isPhone = useMediaQuery("(max-width: 768px)")
          let imageWidth = 624
          let imageHeight = 351

          if (isPhone) {
            imageWidth = 320
            imageHeight = 180
          }

          const linkClass = `relative flex flex-col overflow-hidden border-2 rounded-2xl dark:border-neutral-800 ${index == 0 && "mt-4"}`

          return (
            <a href={item.link} target="_blank" className={linkClass} key={`project ${index}`}>
              <div className="flex items-center justify-center w-full h-12 border-b-2 dark:border-neutral-800">
                <span className="text-xl font-bold">{item.title || "Title"}</span>
              </div>
              <Image
                src={item.image || "/img/nice.gif"}
                alt="foto"
                layout="fixed"
                objectFit="cover"
                objectPosition="center"
                priority={false}
                width={imageWidth}
                height={imageHeight}
              />
            </a>
          )
        })}
      </motion.main>
    </div>
  )
}