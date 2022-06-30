import Head from "next/head"

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
        <Head>
            <title>TI Tech Support - Ordinateurs</title>
        </Head>
            <h1>Ordinateurs</h1>
            <p>Ici tu peux voir les ordinateurs que des autres personnes ont créés, puis téléchargé ici 
                pour les montrer aux autres, comme inspiration, pour obtenir des commentaires, etc.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eum quaerat blanditiis corporis eveniet officia repellendus, et quae voluptas eos sapiente ad soluta adipisci a officiis totam impedit maiores nostrum?
            </p>
            <h2 className=" my-2 text-center">Voir les ordinateurs des autres (cliquez pour voir des détailes): </h2>
            <Carousel>
                {computers.map((value, index) => {
                    return (
                        <DisplayCard key={index} text={cardText} imageAlt={"Computer " + (index + 1)} image={value} URL={"ordinateurs/" + index} />
                    )
                })}
            </Carousel>
        </>
    )
}