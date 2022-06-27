import { Children } from "react"
import { useState } from "react"
import CarouselSlide from "./CarouselSlide"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Carousel(props) {
    const [currentSlide, setCurrentSlide] = useState(0)
    
    function handleSlideChange(modifier) {
        let newCurrentSlide = currentSlide + modifier
        if (newCurrentSlide === props.children.length) {
            setCurrentSlide(0)
        } else if (newCurrentSlide === -1) {
            setCurrentSlide(props.children.length - 1)
        } else {
            setCurrentSlide(newCurrentSlide)
        }
    }

    return (
        <div className="flex justify-between">
            <button className="my-auto" onClick={() => handleSlideChange(-1)}>
                <FontAwesomeIcon icon={faChevronLeft} className="text-3xl sm:text-6xl" />
            </button>
            <div className="w-full max-w-lg flex p-2">
                {Children.map(props.children, (child, index) => {
                    return (
                        <CarouselSlide active={index === currentSlide ? true : false}>
                            {child}
                        </CarouselSlide>
                    )
                })}
            </div>
            <button className="my-auto" onClick={() => handleSlideChange(1)}>
                <FontAwesomeIcon icon={faChevronRight} className="text-3xl sm:text-6xl" />
            </button>
        </div>
    )
}