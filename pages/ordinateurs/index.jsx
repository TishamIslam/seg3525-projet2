import Head from "next/head"

import ComputerCarousel from "../../components/ComputerCarousel"

import en from "../../locale/en"
import fr from "../../locale/fr"

export default function Ordinateurs({ locale }) {
    const t = locale === 'fr' ? fr : en

    return (
        <>
            <Head>
                <title>TI Tech Support - {t.ordinateurs}</title>
            </Head>
            <h1>{t.ordinateurs}</h1>
            <p>{t.ordinateursDesc} {t.lorem} </p>
            <h2 className=" my-2 text-center">{t.voirOrdinateurs}</h2>
            <ComputerCarousel />
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