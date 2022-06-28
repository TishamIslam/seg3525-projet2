import Image from "next/image"
import Link from "next/link"

export default function CarouselCard(props) {
    const card = (
        <>
            <div className={" rounded-t-md bg-white"}>
                <Image src={props.image} alt={props.imageAlt} placeholder="blur" objectFit="cover" />
            </div>
            <div className="text-white w-full rounded-b-md bg-green">
                {props.text}
            </div>
        </>
    )

    return (
        <div className={"w-full"}>
            {props?.URL ?? false ? <Link href={props.URL}>
                <a className="no-underline">
                    {card}
                </a>
            </Link> : card}
        </div>
    )
}