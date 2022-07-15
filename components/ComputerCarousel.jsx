import Carousel from "./Carousel"
import DisplayCard from "./DisplayCard"
import { computers, computerComponents } from "../backend/imports"

export default function ComputerCarousel() {
    function generateCardText(computer) {
        let displayedComponents = computer.components.slice(0, 4) //first 4 components are displayed
        return (
            <div className="p-2">
                <h3>{computer.title}</h3>
                {
                    displayedComponents.map((component, index) => {
                        return (component.id instanceof Array) ? (
                            component.id.map((multiComponent, index) => {
                                return (<p key={index}>{component.name + " " + (index + 1) + ": " + computerComponents[component.name][multiComponent].name}</p>)
                            })
                        ) : <p key={index}>{component.name + ": " + computerComponents[component.name][component.id].name}</p>
                    })
                }
            </div>
        )
    }

    return (
        <Carousel>
            {computers.map((computer, index) => {
                return (
                    <DisplayCard key={index} text={generateCardText(computer)} imageAlt={computer.alt} image={computer.img} URL={"/ordinateurs/" + index} />
                )
            })}
        </Carousel>
    )
}