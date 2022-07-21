import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function PlusMinusButton(props) {
    const icon = <FontAwesomeIcon icon={props.plus ? faPlusCircle : faMinusCircle} className="block" size={props?.size ?? false ? props.size : "xl"} />
    return (
        <button aria-label={props.ariaLabel} className={"flex rounded-md p-1 bg-green hover:bg-green-light gold-link " + props.styling} onClick={props.onClick}>
            {props?.link ?? false ? <Link href={props.link}><a>{icon}</a></Link> : icon}
        </button>
    )
}