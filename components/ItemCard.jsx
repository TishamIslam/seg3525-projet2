import Image from "next/image"
import ActionButton from "./ActionButton"

export default function ItemCard(props) {
    return (
        <div className="flex ">
            <div className="p-1 bg-white rounded-l-md h-24 relative">
                <Image src={props.image} alt={props.imageAlt} placeholder="blur" objectFit="contain" width="88px" height="88px" layout="fixed" />
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
            <div className="space-y-1 p-2 w-full bg-green text-white rounded-r-md">
                {props.text}
            </div>
        </div>
    )
}