import en from "../locale/en"
import fr from "../locale/fr"

export default function Page404({ locale }) {
    const t = locale === 'en' ? en : fr
    return (<>
        <h1 className="text-crimson">{t.header404}</h1>
        <p className="text-xl">{t.desc404}</p>
    </>)
}

export async function getStaticProps({ locale }) {

    return {
        props: {
            locale: locale,
        }
    }
}