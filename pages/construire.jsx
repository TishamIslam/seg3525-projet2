import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import DisplayCard from "../components/DisplayCard"
import PlusMinusButton from "../components/PlusMinusButton"
import ItemCard from "../components/ItemCard"

import { getComputerComponents, componentMetadata, games } from "../backend/imports"

import en from "../locale/en"
import fr from "../locale/fr"

export default function BuildComputer({ locale, components, cMetadata }) {
    const t = locale === 'en' ? en : fr
    const { query } = useRouter()
    let totalPrice = 0
    let totalGamePower = 0
    const [unchosenRequiredComponents, setUnchosenRequiredComponents] = useState([])

    const [userCPU, setUserCPU] = useState([])
    const [userMotherboard, setUserMotherboard] = useState([])
    const [userStorage, setUserStorage] = useState([])
    const [userRAM, setUserRAM] = useState([])
    const [userFan, setUserFan] = useState([])
    const [userGPU, setUserGPU] = useState([])
    const [userCase, setUserCase] = useState([])
    const [userPSU, setUserPSU] = useState([])
    const [userOS, setUserOS] = useState([])
    const [userAccessory, setUserAccessory] = useState([])

    const user = {
        cpu: userCPU,
        motherboard: userMotherboard,
        storage: userStorage,
        ram: userRAM,
        fan: userFan,
        gpu: userGPU,
        case: userCase,
        psu: userPSU,
        os: userOS,
        accessory: userAccessory,
    }

    const userSetters = {
        cpu: setUserCPU,
        motherboard: setUserMotherboard,
        storage: setUserStorage,
        ram: setUserRAM,
        fan: setUserFan,
        gpu: setUserGPU,
        case: setUserCase,
        psu: setUserPSU,
        os: setUserOS,
        accessory: setUserAccessory,
    }

    useEffect(() => { //initialize user data when the page is loaded
        const newUnchosenRequiredComponents = []
        Object.entries(userSetters).forEach(([cType, setter]) => {
            let savedComponent = JSON.parse(window.localStorage.getItem(cType)) ?? []
            if (query?.componentType === cType && query?.componentID) {
                const cID = parseInt(query.componentID)
                savedComponent.push(cID)
                if (!cMetadata[cType].multiple) {
                    savedComponent = [cID]
                }
                window.localStorage.setItem(cType, JSON.stringify(savedComponent))
            }
            setter(savedComponent) //SETTER? I don't even know 'er
            if (cMetadata[cType].required && savedComponent.length == 0) {
                newUnchosenRequiredComponents.push(cType)
            }
        })
        console.log(newUnchosenRequiredComponents)
        setUnchosenRequiredComponents(newUnchosenRequiredComponents)
    }, [])

    useEffect(() => { //resets values that rely on the various components that are chosen
        totalGamePower = 0
        totalPrice = 0
    })

    function removeUserComponent(componentType, removeID) {
        userSetters[componentType]((prevArr) => {
            let removed = false;
            const newArr = prevArr.filter(componentID => {
                if (!removed && componentID === removeID) {
                    removed = true
                    return false
                }
                return true
            })
            window.localStorage.setItem(componentType, JSON.stringify(newArr))
            if (cMetadata[componentType].required && newArr.length == 0) {
                setUnchosenRequiredComponents(prevArr => {
                    console.log([...prevArr, componentType])
                    return [...prevArr, componentType]
                })
            }
            return newArr;
        })
    }

    function renderGameFPS() {
        return (
            <div className="md:grid md:grid-cols-2 md:gap-8">
                {games.map((game, index) => {
                    let fps = parseInt(totalGamePower / (index + 1))
                    return (
                        <DisplayCard objectFit="cover" key={index} text={<p>{t.ipsPour} {game.name}: {fps}</p>} image={game.img} imgWidth={540} imgHeight={300} />
                    )
                })}
            </div>
        )
    }

    const [warnedRequiredNotBought, setWarnedRequiredNotBought] = useState(true)
    function handleBuy(event) {
        event.preventDefault()
        let noComponents = true
        let confirmationString = t.merciPourAcheter + "\n" + t.tuAsAchete + "\n"
        Object.entries(user).forEach(([cType, component]) => {
            if (component.length > 0) {
                noComponents = false
                if (component.length == 1) {
                    let chosenComp = components[cType][component[0]]
                    confirmationString += t[cType] + ": " + chosenComp.name + ", $" + chosenComp.price + "\n"
                } else {
                    component.forEach((cID, index) => {
                        let chosenComp = components[cType][component[index]]
                        confirmationString += t[cType] + " " + (index + 1) + ": " + chosenComp.name + ", $" + chosenComp.price + "\n"
                    })
                }
            }
        })
        if (noComponents) {
            alert(t.nulComposants)
            return false
        } else if (unchosenRequiredComponents.length > 0 && warnedRequiredNotBought) {
            alert(t.avertissementComposantsRequis)
            setWarnedRequiredNotBought(false)
            return false
        } else {
            confirmationString += t.merciPourAcheter + "\n"
            alert(confirmationString)
        }
    }

    return (
        <div className="space-y-6">
            <Head>
                <title>TI Tech Support - Construction</title>
            </Head>
            <h1>{t.créerUnOrdinateur}</h1>
            <span>* {t.indiqueRequis}</span>
            <h2>{t.choisirDesComposants}</h2>
            {Object.entries(user).map(([cType, chosenComponents]) => {
                return (
                    <div key={cType} id={cType} className="bg-mint p-2 py-3 rounded-lg">
                        {chosenComponents.length === 0
                            ? <div className="p-2 flex justify-between items-center">
                                <h3 className="text-lg md:text-xl">{cMetadata[cType].required ? "* " : ""}{t[cType + "Ajouter"]}</h3>
                                <PlusMinusButton plus={true} link={"/composants/" + cType} />
                            </div>
                            : <>
                                <div className="p-2 flex justify-between items-center">
                                    <h3 className="text-lg md:text-xl">{locale === 'en' ? t.choisi + t[cType] : t[cType] + " " + t.choisi}:</h3>
                                    {cMetadata[cType].multiple ? <PlusMinusButton plus={true} link={{ pathname: "/composants/" + cType, query: { return: true } }} /> : ""}
                                </div>
                                <div className="space-y-6 p-2 mt-2">
                                    {chosenComponents.map((componentID, index) => {
                                        const chosenComponent = components[cType][componentID];
                                        totalPrice += chosenComponent.price
                                        totalGamePower += chosenComponent?.gamePower ?? 0
                                        return (
                                            <ItemCard
                                                key={index}
                                                component={chosenComponent}
                                                button={true}
                                                onClick={() => removeUserComponent(cType, componentID)}
                                            />
                                        )
                                    })
                                    }
                                </div>
                            </>}
                    </div>
                )
            })}

            {/* Video game analysis section */}
            <hr className="border border-green" />
            <div className="py-4">
                {
                    Object.entries(user).forEach(([componentType, chosenComponents]) => {
                        if (cMetadata[componentType].required && chosenComponents.length == 0 && unchosenRequiredComponents.indexOf(componentType) == -1) {
                            unchosenRequiredComponents.push(componentType)
                        }
                    })
                }
                {unchosenRequiredComponents.length > 0
                    ? <>
                        <h2 className="font-bold text-crimson">{t.erreurPasAssezComposants}</h2>
                        <ul>
                            {unchosenRequiredComponents.map((comp, index) => {
                                return (
                                    <li key={index}>
                                        <Link href={"/construire/" + comp}>
                                            <a className="green-link text-lg">
                                                {t[comp + "Ajouter"]}
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                    : <>
                        <h2>{t.estimationJeux}</h2>
                        {renderGameFPS()}
                    </>
                }
            </div>

            {/* Buying section */}
            <hr className="border border-green" />
            <div className="p-2 py-8">
                <h2>{t.achetezComposants}</h2>
                <strong className="text-lg md:text-xl text-center md:text-left">{t.coutTotale}: {totalPrice} $</strong>
                <form onSubmit={event => handleBuy(event)} className="block border space-y-4 border-mint-dark bg-mint p-2 py-4 md:p-4 md:py-6">
                    <input required id="name" name="name" className="block border border-green rounded p-2 placeholder:text-gray-400" type="text" placeholder={t.nomComplet} />
                    <input required id="credit-card" name="credit-card" className="block border border-green rounded p-2 placeholder:text-gray-400" type="number" placeholder={t.carteCredit} />
                    <input required id="security-code" name="security-code" className="block border border-green rounded p-2 placeholder:text-gray-400" type="number" placeholder={t.securityCode} />
                    <button type="submit" className="p-2 md:px-8 md:text-lg rounded-md bg-green hover:bg-green-light text-white">
                        {t.achetez}
                    </button>
                </form>
            </div>
        </div>
    )
}

export async function getStaticProps({ locale }) {

    return {
        props: {
            locale: locale,
            components: getComputerComponents(locale),
            cMetadata: componentMetadata,
        }
    }
}