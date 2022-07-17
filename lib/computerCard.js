import { useRouter } from "next/router"
import { computerComponents } from "../backend/imports"

import en from "../locale/en"
import fr from "../locale/fr"

export default function generateCardText(computer, limit) {
    const { locale } = useRouter()
    const t = locale === 'en' ? en : fr

    let displayedComponents = computer.components.slice(0, limit ?? -1) //first 4 components are displayed
    return (
        <div className="p-2">
            <h3>{computer.title}</h3>
            {
                displayedComponents.map((component, index) => {
                    return (component.id instanceof Array) ? (
                        component.id.map((subID, index) => {
                            return (<p key={index}>{t[component.name] + " " + (index + 1) + ": " + computerComponents[component.name][subID].name}</p>)
                        })
                    ) : <p key={index}>{t[component.name] + ": " + computerComponents[component.name][component.id].name}</p>
                })
            }
        </div>
    )
}