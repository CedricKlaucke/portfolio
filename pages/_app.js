import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
// pages/_app.js
import '../styles/globals.css'