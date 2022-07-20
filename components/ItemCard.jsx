import Image from "next/image"
import ActionButton from "./ActionButton"

import en from "../locale/en"
import fr from "../locale/fr"
import { useRouter } from "next/router"

export default function ItemCard(props) {
    const { img, name, price } = props.component
    const details = props.component?.details ?? []
    const { locale } = useRouter()
    const t = locale === 'en' ? en : fr
    return (
        <div className="flex ">
            <div className="p-1 bg-white rounded-l-md h-24 relative">
                <Image src={img} alt={name} placeholder="blur" objectFit="contain" width="88px" height="88px" layout="fixed" />
                {props?.button ?? false ?
                    <ActionButton
                        onClick={props?.onClick}
                        styling="absolute bottom-1 left-1 h-6 w-6"
                        size="1x"
                        plus={props?.plus ?? false}
                        link={props?.link}
                    />
                    : ""}
            </div>
            <div className="leading-none p-2 w-full bg-green text-white rounded-r-md">
                {props.headingLevel == 2 ? <h2>{name}</h2> : <h4>{name}</h4> }
                <p>{t.prix}: ${price}</p>
                {details.map(deets => {
                    return <p>{deets}</p>
                })}
            </div>
        </div>
    )
}