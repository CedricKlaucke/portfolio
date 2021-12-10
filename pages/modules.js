import Head from "next/head"

export default function Home() {
  return (
    <div className="flex flex-col items-center -mb-10 min-h-screen py-2 text-black bg-white dark:text-white dark:bg-black-100">
      <Head>
        <title>Cedric Klaucke</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      {/* main content */}
      <main className="flex flex-col space-y-4 mt-16 mb-10 w-full h-full items-center">
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