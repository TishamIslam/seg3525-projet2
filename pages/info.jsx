import Carousel from "../components/Carousel"
import CarouselCard from "../components/CarouselCard"
import EmbeddedYTVid from "../components/EmbeddedYoutubeVideo"

import { computers } from "../items/imports"

export default function Information() {
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
            <h1 className="mb-2">Information</h1>
            <h2 >Comment décider ce que tu veux</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis nobis itaque mollitia vel quo,
                odio rem reiciendis nostrum beatae molestiae sapiente dolores explicabo possimus quos tenetur, aliquam officia id corrupti!</p>
            <h2 className="text-center my-2">Je veux un modifier un build déjà créé </h2>
            <Carousel>
                {computers.map((value, index) => {
                    return (
                        <CarouselCard key={index} text={cardText} imageAlt="alt text" image={value} URL={"ordinateurs/" + index} />
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