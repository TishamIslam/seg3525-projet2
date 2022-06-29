import Carousel from "../../components/Carousel"
import DisplayCard from "../../components/DisplayCard"
import { computers } from "../../items/imports"

export default function Ordinateurs() {
    const cardText = (
        <div className="p-2">
            <h3 className="text-lg">Ordinateur A</h3>
            <p>CPU: Details</p>
            <p>GPU: Details</p>
            <p>RAM: Details</p>
            <p>Mémoire: Details</p>
        </div>
    )

    return (
        <>
            <h1>Ordinateurs</h1>
            <p>Ici tu peux voir les ordinateurs que des autres personnes ont créés, puis téléchargé ici pour les montrer aux autres, comme inspiration, pour obtenir des commentaires, etc.</p>
            <h2 className=" my-2 text-center">Voir les ordinateurs des autres: </h2>
            <Carousel>
                {computers.map((value, index) => {
                    return (
                        <DisplayCard key={index} text={cardText} imageAlt={"Computer " + (index + 1)} image={value} URL={"ordinateurs/" + (index + 1)} />
                    )
                })}
            </Carousel>
        </>
    )
}