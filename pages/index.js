import Head from "next/head";
import Image from "next/image";
import useMediaQuery from "./hooks/useMediaQuery";

export default function Home() {
  {/* mediaquery */ }
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isPhone = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col items-center min-h-screen py-2 -mb-10 text-black bg-white dark:text-white dark:bg-neutral-900">
      <Head>
        <title>Cedric Klaucke</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* main content */}
      <main className="flex flex-col items-center w-full h-full max-w-screen-xl mt-20 mb-10 space-y-6">
        {/* 1st container */}
        {isDesktop && (
          <div className="flex w-full overflow-hidden border-2 h-96 rounded-2xl dark:bg-neutral-900 dark:border-neutral-800">
            <div className="flex flex-col w-full border-r-2 dark:border-neutral-800">
              <div className="flex items-center justify-center w-full h-16 border-b-2 dark:border-neutral-800">
                <span className="text-xl font-bold">Gamen</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full p-10">
                <span>Een van mijn favoriete hobby's is gamen.</span>
                <span>Het spel dat ik het meeste speel is World of Warcraft,</span>
                <span>ik speel daarbij ook in een groep van 20 mensen</span>
                <span>waarmee ik 3 keer in de week op vaste tijden game.</span>
              </div>
            </div>
            <div className="relative flex image">
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
          <div/>
        )}

        {isPhone && (
          <div className="flex flex-col w-11/12 overflow-hidden border-2 rounded-2xl dark:bg-neutral-900 dark:border-neutral-800">
            <div className="flex flex-col w-full border-b-2 dark:border-neutral-800">
              <div className="flex items-center justify-center w-full h-16 border-b-2 dark:border-neutral-800">
                <span className="text-xl font-bold">Gamen</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full p-2">
                <span>
                  Een van mijn favoriete hobby's is gamen.
                  Het spel dat ik het meeste speel is World of Warcraft,
                  ik speel daarbij ook in een groep van 20 mensen
                  waarmee ik 3 keer in de week op vaste tijden game.
                </span>
              </div>
            </div>
            <div className="relative flex image">
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
          <div className="flex flex-col w-full overflow-hidden border-2 md:flex-row md:h-96 rounded-2xl dark:bg-neutral-900 dark:border-neutral-800">
            <div className="relative flex image">
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
            <div className="flex flex-col w-full border-b-2 border-r-0 md:border-l-2 md:border-b-0 dark:border-neutral-800">
              <div className="flex items-center justify-center w-full h-16 border-b-2 dark:border-neutral-800">
                <span className="text-xl font-bold">Festivals</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <span>Ik ga graag naar festivals en feesten,</span>
                <span>vooral hardstyle maar ook drum&bass en metal.</span>
                <span>Mij favoriete festivals/feesten zijn:</span>
                <span>Defqon.1, Supremacy en Let it Roll.</span>
              </div>
            </div>
          </div>
        )}

        {isTablet && !isDesktop && (
          <div/>
        )}

        {isPhone && (
          <div className="flex flex-col w-11/12 overflow-hidden border-2 md:flex-row md:h-96 rounded-2xl dark:bg-neutral-900 dark:border-neutral-800">
            <div className="flex flex-col w-full border-b-2 border-r-0 md:border-r-2 md:border-b-0 dark:border-neutral-800">
              <div className="flex items-center justify-center w-full h-16 border-b-2 dark:border-neutral-800">
                <span className="text-xl font-bold">Festivals</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full m-2">
                <span>
                  Ik ga graag naar festivals en feesten,
                  vooral hardstyle maar ook drum&bass en metal.
                  Mij favoriete festivals/feesten zijn:
                  Defqon.1, Supremacy en Let it Roll.
                </span>
              </div>
            </div>
            <div className="relative flex image">
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
          <div className="flex flex-col w-full overflow-hidden border-2 md:flex-row md:h-96 rounded-2xl dark:bg-neutral-900 dark:border-neutral-800">
            <div className="flex flex-col w-full border-b-2 border-r-0 md:border-r-2 md:border-b-0 dark:border-neutral-800">
              <div className="flex items-center justify-center w-full h-16 border-b-2 dark:border-neutral-800">
                <span className="text-xl font-bold">Boulderen</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <span>Een andere hobby is boulderen.</span>
                <span>Dit is het klimmen van een korte route op een</span>
                <span>vaak dicht bij de grond gelegen echte of kunstmatige rots</span>
                <span>(ook wel een boulder genoemd) zonder het gebruik van</span>
                <span>een touw of andere vorm van zekering.</span>
              </div>
            </div>
            <div className="relative flex image">
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
            Tablet layout word nog aan gewerkt
          </div>
        )}

        {isPhone && (
          <div className="flex flex-col w-11/12 overflow-hidden border-2 md:flex-row md:h-96 rounded-2xl dark:bg-neutral-900 dark:border-neutral-800">
            <div className="flex flex-col w-full border-b-2 border-r-0 md:border-r-2 md:border-b-0 dark:border-neutral-800">
              <div className="flex items-center justify-center w-full h-16 border-b-2 dark:border-neutral-800">
                <span className="text-xl font-bold">Boulderen</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full m-2">
                <span>
                  Een andere hobby is boulderen.
                  Dit is het klimmen van een korte route op een
                  vaak dicht bij de grond gelegen echte of kunstmatige rots
                  (ook wel een boulder genoemd) zonder het gebruik van
                  een touw of andere vorm van zekering.
                </span>
              </div>
            </div>
            <div className="relative flex image">
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
    </div>
  )
}