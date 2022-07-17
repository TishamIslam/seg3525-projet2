import Link from "next/link"
import Head from "next/head"

import { components } from "../../backend/imports"

import en from "../../locale/en"
import fr from "../../locale/fr"

export default function Components({ locale, components }) {
    const t = locale === 'en' ? en : fr
    return (
        <>
            <Head>
                <title>TI Tech Support - {t.composantes}</title>
            </Head>
            <h1 className="text-3xl">{t.listeComposants}</h1>

            <ul>
                {components.map((component, index) => {
                    return (
                        <li className="my-4" key={index}>
                            <Link href={"/composants/" + component}><a className="green-link font-medium text-xl" >{t[component]}</a></Link>
                            <details>
                                <summary>{t.detailsAPropos} {t[component]}</summary>
                                <p>
                                    {t.lorem}
                                </p>
                            </details>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export async function getStaticProps({ locale }) {

  return {
      props: {
          locale: locale,
          components: components,
      }
  }
}