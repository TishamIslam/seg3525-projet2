import Carousel from "./Carousel"
import DisplayCard from "./DisplayCard"
import { computers, getComputerComponents } from "../backend/imports"
import generateComputerCardText from "../lib/computerCard"

import en from "../locale/en"
import fr from "../locale/fr"
import { useRouter } from "next/router"

export default function ComputerCarousel() {
    const { locale } = useRouter()
    const cases = getComputerComponents(locale)['case']

    return (
        <Carousel>
            {computers.map((computer, index) => {
                return (
                    <DisplayCard key={index} text={generateComputerCardText(computer, 4)} imageAlt={computer.alt} image={cases[computer.components.case].img} URL={"/ordinateurs/" + index} />
                )
            })}
        </Carousel>
    )
}