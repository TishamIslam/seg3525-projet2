import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons"

export default function Disclosure(props) {
    const [showText, setShowText] = useState(props?.showInit ?? false)

    return (
        <details className='rounded bg-mint border border-mint-dark max-w-md md:max-w-lg mt-4'>
            <summary className='p-2 pr-12 bg-mint flex relative rounded-t-md border min-w border-mint-dark' onClick={() => { setShowText(!showText) }}>
                {props.heading}
                <FontAwesomeIcon size="xl" icon={!showText ? faChevronCircleUp : faChevronCircleDown} className="absolute right-2 bottom-2" />
            </summary>
            <div className='p-2 bg-mint-light rounded-b-md border border-mint-dark'>
                {props.children}
            </div>
        </details>
    )
}