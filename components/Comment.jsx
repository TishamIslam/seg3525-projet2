import Image from "next/image"
import { useState } from "react"
import profile from "../public/Images/profile.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons"

export default function Comment(props) {
    const indent = ['ml-0', 'ml-8', 'ml-16', 'ml-24'] //might implement replies later
    const [showText, setShowText] = useState(true)

    return (
        <div >
            <details className={"max-w-sm lg:max-w-md mt-4" + indent[props?.indent ?? 0]} open>
                <summary className="p-2 bg-mint flex space-x-2 relative h-20 rounded-t-md border border-mint-dark" onClick={() => {setShowText(!showText)}}>
                    <Image src={profile} width="64px" height="64px" objectFit="cover" />
                    <h3 className="text-xl">{props?.name ?? "Anonyme"}</h3>
                    <FontAwesomeIcon size="xl" icon={!showText ? faChevronCircleUp : faChevronCircleDown} className="absolute right-2 bottom-2" />
                </summary>
                <div className="p-2 bg-gray-100 flex rounded-b-md border border-mint-dark">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium dicta numquam earum in
                        modi odit voluptatum harum asperiores ut, ducimus dolore quae sapiente error facere? Necessitatibus qui laboriosam fugiat.</p>
                </div>
            </details>
        </div>
    )
}