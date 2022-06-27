

export default function EmbeddedYTVid(props) {
    return (
        <div className="my-4 relative overflow-hidden w-full after:block after:pt-[56.25%]">
            <iframe src={props.URL} className="w-full h-full absolute top-0 left-0" ></iframe>
        </div>
    )
}