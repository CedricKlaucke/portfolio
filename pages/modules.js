import Head from "next/head"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 -mb-10 text-black bg-white dark:text-white dark:bg-black-100">
      <Head>
        <title>Cedric Klaucke</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      {/* main content */}
      <main className="flex flex-col items-center w-full h-full mt-16 mb-10 space-y-4">
        {/* top bar */}
        <div className="flex justify-center w-11/12 h-16 border rounded-xl">
          <div className="flex w-full">
            <a href="#" className="flex items-center justify-center w-1/12 h-16 border-r">
              <span>01</span>
            </a>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>02</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>03</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>04</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>05</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>06</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>07</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>08</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>09</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>10</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>11</span>
            </div>
            <div className="flex items-center justify-center w-1/12">
              <span>12</span>
            </div>
          </div>
          <div className="flex w-full">
            <a href="#" className="flex items-center justify-center w-1/12 h-16 border-r">
              <span>01</span>
            </a>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>02</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>03</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>04</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>05</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>06</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>07</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>08</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>09</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>10</span>
            </div>
            <div className="flex items-center justify-center w-1/12 border-r">
              <span>11</span>
            </div>
            <div className="flex items-center justify-center w-1/12">
              <span>12</span>
            </div>
          </div>
        </div>
      </main>
      {/* end main content */}
    </div>
  )
}