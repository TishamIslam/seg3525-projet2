import Carousel from "./Carousel"
import DisplayCard from "./DisplayCard"
import { computers } from "../backend/imports"
import generateCardText from "../lib/computerCard"

export default function ComputerCarousel() {

    return (
        <Carousel>
            {computers.map((computer, index) => {
                return (
                    <DisplayCard key={index} text={generateCardText(computer, 4)} imageAlt={computer.alt} image={computer.img} URL={"/ordinateurs/" + index} />
                )
            })}
        </Carousel>
    )
}