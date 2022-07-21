import { useRouter } from "next/router"
import { getComputerComponents } from "../backend/imports"

import en from "../locale/en"
import fr from "../locale/fr"

export default function generateComputerCardText(computer, limit) {
    const { locale } = useRouter()
    const t = locale === 'en' ? en : fr
    const computerComponents = getComputerComponents(locale)

    //all components are displayed unless otherwise specified
    const displayedComponents = Object.entries(computer.components).slice(0, limit ?? 10)
    let totalPrice = 0;
    Object.entries(computer.components).forEach(([cType, cIDs]) => {
        if (cIDs instanceof Array) {
            cIDs.forEach((cID) => {
                totalPrice += computerComponents[cType][cID].price
            })
        } else {
                totalPrice += computerComponents[cType][cIDs].price
            }
    });
    return (
        <div className="p-2">
            <h3>{computer.title}</h3>
            <div className="md:text-lg">
                <span ><strong>{t.prix}: ${totalPrice}</strong></span>
                {displayedComponents.map(([cType, componentIDs], index) => {
                    return (componentIDs instanceof Array) ? (
                        componentIDs.map((cID, index) => {
                            return (<p key={index}>{t[cType] + " " + (index + 1) + ": " + computerComponents[cType][cID].name}</p>)
                        })
                    ) : <p key={index}>{t[cType] + ": " + computerComponents[cType][componentIDs].name}</p>
                })
                }
            </div>
        </div>
    )
}