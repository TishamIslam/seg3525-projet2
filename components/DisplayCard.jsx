import Image from "next/image"
import Link from "next/link"

export default function DisplayCard(props) {
    const card = (
        <div className="space-y-0 p-0 my-4 shadow-xl">
            <div className={"h-min rounded-t-md align-middle leading-none next-image-block "}>
                <Image src={props.image} alt={props.imageAlt} placeholder="blur"
                objectFit={props?.objectFit ?? "cover"} width={props?.imgWidth} height={props?.imgHeight} 
                />
            </div>
            <div className="p-2 text-white rounded-b-md bg-green">
                {props.text}
            </div>
        </div>
    )

    return (
        <div className={"w-full"}>
            {props?.URL ?? false ? <Link href={props.URL}>
                <a>
                    {card}
                </a>
            </Link> : card}
        </div>
    )
}