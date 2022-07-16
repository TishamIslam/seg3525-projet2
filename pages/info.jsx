import Head from "next/head"

import ComputerCarousel from "../components/ComputerCarousel"
import EmbeddedYTVid from "../components/EmbeddedYoutubeVideo"

import en from "../locale/en"
import fr from "../locale/fr"

export default function Information({ locale }) {
    const t = locale === 'fr' ? fr : en

    return (
        <>
            <Head>
                <title>TI Tech Support - Information</title>
            </Head>
            <h1 className="mb-2">{t.infoImportantes}</h1>

            <h2>{t.commentDecider}</h2>
            <p>{t.commentDeciderDesc}</p>
            <h3 className="pt-4 text-center text-lg">{t.modifierBuild}</h3>
            <ComputerCarousel />

            <h2 className="my-2 mt-8">{t.choisirComposants}</h2>
            <p>{t.choisirComposantsDesc}</p>
            <EmbeddedYTVid URL="https://www.youtube.com/embed/_Cg-MNGuYWY" />

            <h2 className="my-2 mt-8">{t.commentConstruire}</h2>
            <p>{t.commentConstruireDesc}</p>
            <EmbeddedYTVid URL="https://www.youtube.com/embed/PXaLc9AYIcg" />
        </>
    )
}

export async function getStaticProps({ locale }) {

  return {
      props: {
          locale: locale
      }
  }
}