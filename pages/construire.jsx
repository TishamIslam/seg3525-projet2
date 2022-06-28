import ActionButton from "../components/ActionButton"
import ItemCard from "../components/ItemCard"

import AMDRyzen9 from "../public/Images/AMDRyzen9.jpg"

export default function BuildComputer() {
    return (
        <>
            <h1 className="text-xl">Créez un Ordinateur</h1>
            <span>* indique un composante requis</span>

            <div className="p-2 my-2 flex justify-between items-center">
                <span>CPU Choisi: </span>
                <ActionButton plus={false} />
            </div>
            <ItemCard image={AMDRyzen9} imageAlt="AMD Ryzen 9 CPU"
            text={(<div><p>AMD Ryzen 9 5900x</p><p>Prix: $2000</p></div>)} />
            <div className="p-2 my-2 flex justify-between items-center">
                <span>Ajouter un carte-mère *</span>
                <ActionButton plus={true} link="/composants/motherboard" />
            </div>
            <div className="p-2 my-2 flex justify-between items-center">
                <span>Ajouter du mémoire *</span>
                <ActionButton plus={true} link="/composants/storage" />
            </div>
            <div className="p-2 my-2 flex justify-between items-center">
                <span>Ajouter du RAM *</span>
                <ActionButton plus={true} link="/composants/ram" />
            </div>
            <div className="p-2 my-2 flex justify-between items-center">
                <span>Ajouter un ventilateur</span>
                <ActionButton plus={true} link="/composants/fan" />
            </div>
            <div className="p-2 my-2 flex justify-between items-center">
                <span>Ajouter un carte graphique *</span>
                <ActionButton plus={true} link="/composants/gpu" />
            </div>
            <div className="p-2 my-2 flex justify-between items-center">
                <span>Ajouter un boîtier * </span>
                <ActionButton plus={true} link="/composants/case" />
            </div>
            <div className="p-2 my-2 flex justify-between items-center">
                <span>Ajouter l'alimentation électrique *</span>
                <ActionButton plus={true} link="/composants/power" />
            </div>
            <div className="p-2 my-2 flex justify-between items-center">
                <span>Ajouter un système d'exploitation</span>
                <ActionButton plus={true} link="/composants/os" />
            </div>
            <div className="p-2 my-2 flex justify-between items-center">
                <span>Ajouter des accessoires</span>
                <ActionButton plus={true} link="/composants/accessory" />
            </div>
        </>
    )
}