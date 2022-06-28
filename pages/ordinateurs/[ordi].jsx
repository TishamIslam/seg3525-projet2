import { useRouter } from "next/router"

import CarouselCard from "../../components/CarouselCard"
import { computers } from "../../items/imports"

export default function Ordinateur() {    
    const router = useRouter()
    const { ordi } = router.query

    const cardText = (
        <div className="p-2">
            <h3 className="text-lg">Ordinateur A</h3>
            <p>CPU: Details</p>
            <p>GPU: Details</p>
            <p>RAM: Details</p>
            <p>Mémoire: Details</p>
        </div>
    )

    function renderComputer() {
        if (router.isReady) {
            return (
                <CarouselCard text={cardText} imageAlt="alt text" image={computers[ordi]} />
            )
        }
    }

    return (
        <>
        <div className="p-6 ">
            {renderComputer()}
        </div>
        </>
    )
}