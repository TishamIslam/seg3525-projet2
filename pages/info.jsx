import Head from "next/head"

import Carousel from "../components/Carousel"
import DisplayCard from "../components/DisplayCard"
import EmbeddedYTVid from "../components/EmbeddedYoutubeVideo"

import { computers } from "../backend/imports"

export default function Information() {
    const cardText = (
        <div className="p-2">
            <h4 className="text-lg">Ordinateur A</h4>
            <p>CPU: Details</p>
            <p>GPU: Details</p>
            <p>RAM: Details</p>
            <p>Mémoire: Details</p>
        </div>
    )
    return (
        <>
            <Head>
                <title>TI Tech Support - Information</title>
            </Head>
            <h1 className="mb-2">Information importantes</h1>

            <h2 >Comment décider ce que tu veux</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis nobis itaque mollitia vel quo,
                odio rem reiciendis nostrum beatae molestiae sapiente dolores explicabo possimus quos tenetur, aliquam officia id corrupti!</p>
            <h3 className="text-center my-2 text-lg">Je veux un modifier un build déjà créé </h3>
            <Carousel>
                {computers.map((value, index) => {
                    return (
                        <DisplayCard key={index} text={cardText} imageAlt="alt text" image={value} URL={"ordinateurs/" + index} />
                    )
                })}
            </Carousel>

            <h2 className="my-2">Comment choisir les composantes correctes? </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <EmbeddedYTVid URL="https://www.youtube.com/embed/_Cg-MNGuYWY" />

            <h2 className="text-xl my-2">Comment construire un ordinateur?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, reprehenderit illo ad quas, perspiciatis perferendis
                officia autem unde soluta explicabo consequuntur atque maiores veniam quisquam quae odio ullam temporibus molestias.</p>
            <EmbeddedYTVid URL="https://www.youtube.com/embed/PXaLc9AYIcg" />
        </>
    )
}