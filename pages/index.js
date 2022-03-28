import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
import { Container } from "../components/index/container";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 -mb-10 text-black bg-white dark:text-white dark:bg-neutral-900">
      <Head>
        <title>Cedric Klaucke</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* main content */}
      <motion.main
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 1}}
        className="flex flex-col items-center w-full h-full max-w-screen-xl mt-20 mb-12 space-y-6"
      >
        {/* 1st container */}
        <Container
          title={"Gamen"}
          text={
            "Een van mijn favoriete hobby's is gamen. " +
            "Het spel dat ik het meeste speel is World of Warcraft, " +
            "ik speel daarbij ook in een groep van 20 mensen " +
            "waarmee ik 3 keer in de week op vaste tijden game."
          }
          image={"/img/computer.jpeg"}
        />

        {/* 2nd container */}
        <Container left
          title={"Festivals"}
          text={
            "Ik ga graag naar festivals en feesten, " +
            "vooral hardstyle maar ook drum&bass en metal. " +
            "Mij favoriete festivals/feesten zijn: " +
            "Defqon.1, Supremacy en Let it Roll."
          }
          image={"/img/festival.jpg"}
        />

        {/* 3rd container */}
        <Container
          title={"Skateboarden"}
          text={
            "Ik skate al vanaf mij 14de, vaak doe ik dit met een vriendengroep. " +
            "Meestal skaten wij in een skatepark en soms ook op straat."
          }
          image={"/img/skate.jpg"}
        />
        
        {/* 4th container */}
        <Container left
          title={"Boulderen"}
          text={
            "Een andere hobby is boulderen. " +
            "Dit is het klimmen van een korte route op een " +
            "vaak dicht bij de grond gelegen echte of kunstmatige rots " +
            "(ook wel een boulder genoemd) zonder het gebruik van " +
            "een touw of andere vorm van zekering."
          }
          image={"/img/boulder.png"}
        />

        <Container
          title={"Test"}
          text={
            "Een van mijn favoriete hobby's is gamen." +
            "Het spel dat ik het meeste speel is World of Warcraft," +
            "ik speel daarbij ook in een groep van 20 mensen" +
            "waarmee ik 3 keer in de week op vaste tijden game."
          }
          image={"/img/nice.png"}
        />
      </motion.main>
    </div>
  )
}