import { useRouter } from "next/router"

import en from '../locale/en'
import fr from '../locale/fr'


export default function Footer() {
    const {locale} = useRouter()
    const t = locale === 'fr' ? fr : en

    return (
        <footer className=" bg-green text-white w-full mt-4 p-4 space-y-2">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl">{t.contactez}</h2>
                <p>TI Tech Support <br /> 420 Sesame street <br /> Elmoville, ON <br /> 6T9 P0O</p>
                <p>{t.appelez}<a className="gold-link" href="tel:5551239876">(555) 123-9876</a>, {t.disponible}<br />
                {t.envoyezCourriel}<a className="gold-link" href="mailto:ti626@titech.com">ti626@titech.com</a>.</p>
            </div>
        </footer>
    )
}