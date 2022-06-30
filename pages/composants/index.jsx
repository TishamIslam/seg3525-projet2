

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
            
            <ul>
                {links.map((link, index) => {
                    return (<li className="green-link" key={index}><a href={"/composants/" + link}>{text[link]}</a></li>)
                })}
            </ul>
        </>
    )
}