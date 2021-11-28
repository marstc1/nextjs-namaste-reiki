import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '@fontsource/rubik'

import { ParallaxProvider } from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp
