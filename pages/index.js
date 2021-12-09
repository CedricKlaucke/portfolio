import useDarkMode from "./hooks/useDarkMode";
import Head from "next/head";
import Image from "next/image";
import useMediaQuery from "./hooks/useMediaQuery";

export default function Home() {

  {/* tailwind darkmode */ }
  const [colorTheme, setTheme] = useDarkMode();

  {/* mediaquery */ }
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isPhone = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col min-h-screen py-2 items-center text-black-0 bg-white dark:text-white dark:bg-black-100">
      <Head>
        <title>Cedric Klaucke</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* main content */}
      <main className="flex flex-col w-full h-full max-w-screen-xl space-y-6 mt-20 items-center">
        {/* 1st container */}
        {isDesktop && (
          <div className="flex flex-col md:flex-row w-full md:h-96 border-2 rounded-2xl overflow-hidden dark:bg-black-100 dark:border-black-300">
            <div className="flex flex-col w-full md:border-r-2 border-b-2 border-r-0 md:border-b-0 dark:border-black-300">
              <div className="flex w-full border-b-2 h-16 items-center justify-center dark:border-black-300">
                <span className="font-bold text-xl">Gamen</span>
              </div>
              <div className="flex flex-col h-full p-10 items-center justify-center">
                <span>Een van mijn favoriete hobby's is gamen.</span>
                <span>Het spel dat ik het meeste speel is World of Warcraft,</span>
                <span>ik speel daarbij ook in een groep van 20 mensen</span>
                <span>waarmee ik 3 keer in de week op vaste tijden game.</span>
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
          </div>
        )}

        {isTablet && !isDesktop && (
          <div>
            je moeder
          </div>
        )}

        {isPhone && (
          <div className="flex flex-col md:flex-row w-11/12 md:h-96 border-2 rounded-2xl overflow-hidden dark:bg-black-100 dark:border-black-300">
            <div className="flex flex-col w-full md:border-r-2 border-b-2 border-r-0 md:border-b-0 dark:border-black-300">
              <div className="flex w-full border-b-2 h-16 items-center justify-center dark:border-black-300">
                <span className="font-bold text-xl">Gamen</span>
              </div>
              <div className="flex flex-col h-full p-2 items-center justify-center">
                <span>
                  Een van mijn favoriete hobby's is gamen.
                  Het spel dat ik het meeste speel is World of Warcraft,
                  ik speel daarbij ook in een groep van 20 mensen
                  waarmee ik 3 keer in de week op vaste tijden game.
                </span>
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
        )}

        {/* 2nd container */}
        {isDesktop && (
          <div className="flex flex-col md:flex-row w-full md:h-96 border-2 rounded-2xl overflow-hidden dark:bg-black-100 dark:border-black-300">
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
              <div className="flex flex-col h-full items-center justify-center">
                <span>Ik ga graag naar festivals en feesten,</span>
                <span>vooral hardstyle maar ook drum&bass en metal.</span>
                <span>Mij favoriete festivals/feesten zijn:</span>
                <span>Defqon.1, Supremacy en Let it Roll.</span>
              </div>
            </div>
          </div>
        )}

        {isTablet && !isDesktop && (
          <div>
            je moeder
          </div>
        )}

        {isPhone && (
          <div className="flex flex-col md:flex-row w-11/12 md:h-96 border-2 rounded-2xl overflow-hidden dark:bg-black-100 dark:border-black-300">
            <div className="flex flex-col w-full md:border-r-2 border-b-2 border-r-0 md:border-b-0 dark:border-black-300">
              <div className="flex w-full border-b-2 h-16 items-center justify-center dark:border-black-300">
                <span className="font-bold text-xl">Festivals</span>
              </div>
              <div className="flex flex-col h-full m-2 items-center justify-center">
                <span>
                  Ik ga graag naar festivals en feesten,
                  vooral hardstyle maar ook drum&bass en metal.
                  Mij favoriete festivals/feesten zijn:
                  Defqon.1, Supremacy en Let it Roll.
                </span>
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
        )}

        {/* 3rd container */}
        {isDesktop && (
          <div className="flex flex-col md:flex-row w-full md:h-96 border-2 rounded-2xl overflow-hidden dark:bg-black-100 dark:border-black-300">
            <div className="flex flex-col w-full md:border-r-2 border-b-2 border-r-0 md:border-b-0 dark:border-black-300">
              <div className="flex w-full border-b-2 h-16 items-center justify-center dark:border-black-300">
                <span className="font-bold text-xl">Boulderen</span>
              </div>
              <div className="flex flex-col h-full items-center justify-center">
                <span>Een andere hobby is boulderen.</span>
                <span>Dit is het klimmen van een korte route op een</span>
                <span>vaak dicht bij de grond gelegen echte of kunstmatige rots</span>
                <span>(ook wel een boulder genoemd) zonder het gebruik van</span>
                <span>een touw of andere vorm van zekering.</span>
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
          </div>
        )}

        {isTablet && !isDesktop && (
          <div>
            je moeder
          </div>
        )}

        {isPhone && (
          <div className="flex flex-col md:flex-row w-11/12 md:h-96 border-2 rounded-2xl overflow-hidden dark:bg-black-100 dark:border-black-300">
            <div className="flex flex-col w-full md:border-r-2 border-b-2 border-r-0 md:border-b-0 dark:border-black-300">
              <div className="flex w-full border-b-2 h-16 items-center justify-center dark:border-black-300">
                <span className="font-bold text-xl">Boulderen</span>
              </div>
              <div className="flex flex-col h-full m-2 items-center justify-center">
                <span>
                  Een andere hobby is boulderen.
                  Dit is het klimmen van een korte route op een
                  vaak dicht bij de grond gelegen echte of kunstmatige rots
                  (ook wel een boulder genoemd) zonder het gebruik van
                  een touw of andere vorm van zekering.
                </span>
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
        )}
      </main>
      {/* end main content */}
    </div>
  )
}