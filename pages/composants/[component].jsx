import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import { getComputerComponents, components } from '../../backend/imports'
import ItemCard from '../../components/ItemCard'

import en from "../../locale/en"
import fr from "../../locale/fr"

export default function Component({ locale, component, cType }) {
    const t = locale === 'en' ? en : fr
    const { query } = useRouter()

    function renderComponents() {
        return component.map((component, index) => {
            return (
                <ItemCard
                    key={index}
                    cType={cType}
                    component={component}
                    button={true}
                    plus={true}
                    link={{ pathname:"/construire/", query: { componentType: query.component, componentID: index }}} 
                    />
            )
        })
    }

    return (
        <>
            <Head>
                <title>TI Tech Support - {t.composantes}</title>
            </Head>
            {query?.return 
            ? <>
                <div className='flex justify-between pb-6'>
                    <h1>{t.achetezComposants}</h1>
                    <button className='p-2 bg-green hover:bg-green-light gold-link rounded-md'>
                        <Link href="/construire">
                            <a>{t.retourner}</a>
                        </Link>
                    </button>
                </div>
            </>
            : <h1>{t.achetezComposants}</h1>
            }
            <div className="space-y-8 my-4 mt-8">
                {renderComponents()}
            </div>
        </>
    )
}

export async function getStaticProps({ locale, params }) {

    return {
        props: {
            locale: locale,
            component: getComputerComponents(locale)[params.component],
            cType: params.component,
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

