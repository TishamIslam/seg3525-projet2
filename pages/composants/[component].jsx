import { useRouter } from 'next/router'
import Head from 'next/head'

import { computerComponents, components } from '../../backend/imports'
import ItemCard from '../../components/ItemCard'

import en from "../../locale/en"
import fr from "../../locale/fr"

export default function Component({ locale, component}) {
    const t = locale === 'en' ? en : fr

    function renderComponents() {
        return component.map((obj, index) => {
            return (
                <ItemCard key={index} image={obj.img} imageAlt={obj.alt} button={true}
                    plus={true} text={<><p>{obj.name}</p><p>Prix: ${obj.price}</p></>} />
            )
        })
    }

    return (
        <>
            <Head>
                <title>TI Tech Support - {t.composantes}</title>
            </Head>
            <h1>{t.achetezComposants}</h1>
            <div className="space-y-4 my-4">
                {renderComponents()}
            </div>
        </>
    )
}

export async function getStaticProps({ locale, params }) {

    return {
        props: {
            locale: locale,
            component: computerComponents[params.component]
        }
    }
}

export async function getStaticPaths() {


    const locales = ['en', 'fr']
    const paths = []
    components.forEach(component => {
        for (let locale of locales) {
            paths.push({
                params: { component: component }, locale: locale
            })
        }
    })
    return {
        paths: paths,
        fallback: false,
    }

}

