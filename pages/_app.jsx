import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

//source serif fonts
import "@fontsource/source-serif-pro/400.css"
import "@fontsource/source-serif-pro/600.css"
import "@fontsource/source-serif-pro/700.css"

//source sans fonts
import "@fontsource/source-sans-pro/400.css"
import "@fontsource/source-sans-pro/600.css"
import "@fontsource/source-sans-pro/700.css"

import '../styles/globals.css'

import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}