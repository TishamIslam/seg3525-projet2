

export default function Components() {
    const links = ["cpu", "motherboard", "storage", "ram", "fan", "gpu", "case", "power", "os", "accessory"]

    //can be easily put into locale
    const text = {
        cpu: "CPU",
        motherboard: "Carte-mère",
        storage: "Mémoire",
        ram: "RAM",
        fan: "Ventilateurs",
        gpu: "Cartes Graphiques (GPU)",
        case: "Boîtiers",
        power: "Alimentation électrique",
        os: "Système d'exploitation",
        accessory: "Accessoires"
    }
    return (
        <>
            <h1 className="text-3xl">Liste de composants offert: </h1>
            
            <ul className="text-green">
                {links.map((link, index) => {
                    return (<li className="hover:text-green-light" key={index}><a href={"/composants/" + link}>{text[link]}</a></li>)
                })}
            </ul>

                {/* renders like this
                <li><a href="/composants/cpu">CPU</a></li>
                <li><a href="/composants/motherboard">Carte-mère</a></li>
                <li><a href="/composants/storage">Mémoire</a></li>
                <li><a href="/composants/ram">RAM</a></li>
                <li><a href="/composants/fan">Ventilateurs </a></li>
                <li><a href="/composants/gpu">Cartes Graphiques (GPU)</a></li>
                <li><a href="/composants/case">Boîtiers</a></li>
                <li><a href="/composants/power">Alimentation électrique</a></li>
                <li><a href="/composants/os">Système d'exploitation</a></li>
                <li><a href="/composants/accessory">Accessoires</a></li> */}
        </>
    )
}