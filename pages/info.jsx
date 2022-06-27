import Carousel from "../components/Carousel"
import CarouselCard from "../components/CarouselCard"
import computer1 from "../public/Images/computer1.jpeg"
import computer2 from "../public/Images/computer2.png"
import computer3 from "../public/Images/computer3.jpeg"
import computer4 from "../public/Images/computer4.webp"
import computer5 from "../public/Images/computer5.jpg"

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
            <h1 className="text-3xl mb-2">Information</h1>
            <h2 className="text-xl">Comment décider ce que tu veux</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis nobis itaque mollitia vel quo,
                odio rem reiciendis nostrum beatae molestiae sapiente dolores explicabo possimus quos tenetur, aliquam officia id corrupti!</p>
            <h2 className="text-xl text-center my-2">Je veux un modifier un build déjà créé </h2>
            <Carousel>
                <CarouselCard large={true} text={cardText} imageAlt="alt text" image={computer1} ></CarouselCard>
                <CarouselCard large={true} text={cardText} imageAlt="alt text" image={computer2} ></CarouselCard>
                <CarouselCard large={true} text={cardText} imageAlt="alt text" image={computer3} ></CarouselCard>
                <CarouselCard large={true} text={cardText} imageAlt="alt text" image={computer4} ></CarouselCard>
                <CarouselCard large={true} text={cardText} imageAlt="alt text" image={computer5} ></CarouselCard>
            </Carousel>

            <h2 className="text-xl my-2">Comment choisir les composantes correctes? </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <iframe src="https://www.youtube.com/embed/_Cg-MNGuYWY" className="my-4 w-full h-60" ></iframe>

            <h2 className="text-xl my-2">Comment construire un ordinateur?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, reprehenderit illo ad quas, perspiciatis perferendis 
                officia autem unde soluta explicabo consequuntur atque maiores veniam quisquam quae odio ullam temporibus molestias.</p>
            <iframe src="https://www.youtube.com/embed/PXaLc9AYIcg" className="my-4 w-full h-60" ></iframe>
        </>
    )
}