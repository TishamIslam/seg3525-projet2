import Image from "next/image"

export default function CarouselCard(props) {
    return (
        <div className={"w-full"}>
            {/* This portion will always have an image */}
            <div className={" rounded-t-md bg-white"}>
                <Image src={props.image} alt={props.imageAlt} placeholder="blur" objectFit="cover" />
            </div>
            <div className="text-white w-full rounded-b-md bg-green">
                {props.text}
            </div>
        </div>
    )
}