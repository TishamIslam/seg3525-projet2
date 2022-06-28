import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function ActionButton(props) {
    const icon = <FontAwesomeIcon icon={props.plus ? faPlusCircle : faMinusCircle} className="block" size={props?.size ?? false ? props.size : "xl"} />
    return (
        <button className={"flex rounded-md p-1 bg-green text-gold hover:bg-green-light hover:text-gold-light " + props.styling}>
            {props?.link ?? false ? <Link href={props.link}><a>{icon}</a></Link> : icon}
        </button>
    )
}