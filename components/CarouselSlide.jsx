

export default function Slide(props) {
    return (
        <div className={props.active ? "block w-full h-auto" : "hidden"}>
            {props.children}
        </div>
    )
}