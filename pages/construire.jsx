import ActionButton from "../components/ActionButton"
import ItemCard from "../components/ItemCard"

import AMDRyzen9 from "../public/Images/AMDRyzen9.jpg"
import { computerComponents } from "../items/imports"

export default function BuildComputer() {
    const chosenOS = computerComponents['os'][0]
    const chosenHDD = computerComponents['storage'][0]
    const chosenNVMe = computerComponents['storage'][6]
    return (
        <div className="space-y-2">
            <h1 className="text-xl">Créez un Ordinateur</h1>
            <span>* indique un composante requis</span>

            <div className="p-2 my-2 flex justify-between items-center">
                <span>CPU Choisi: </span>
            </div>
            <ItemCard image={AMDRyzen9} imageAlt="AMD Ryzen 9 CPU" button={true}
            text={(<div><p>AMD Ryzen 9 5900x</p><p>Prix: 2000 $</p></div>)} />
            <div className="p-2 my-2 flex justify-between items-center">
                <span>Ajouter un carte-mère *</span>
                <ActionButton plus={true} link="/composants/motherboard" />
            </div>
            <div className="p-2 my-2 flex justify-between items-center">
                <span>Composants mémoire choisis:</span>
            </div>
            <ItemCard image={chosenHDD.img} imageAlt={chosenHDD.alt} button={true}
            text={(<div><p>{chosenHDD.name}</p><p>Prix: {chosenHDD.price} $</p></div>)} />
            <ItemCard image={chosenNVMe.img} imageAlt={chosenNVMe.alt} button={true}
            text={(<div><p>{chosenNVMe.name}</p><p>Prix: {chosenNVMe.price} $</p></div>)} />
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
                <span>Système d'exploitation choisi:</span>
            </div>
            <ItemCard image={chosenOS.img} imageAlt={chosenOS.alt} button={true}
            text={(<div><p>{chosenOS.name}</p><p>Prix: {chosenOS.price} $</p></div>)} />
            <div className="p-2 my-2 flex justify-between items-center">
                <span>Ajouter des accessoires</span>
                <ActionButton plus={true} link="/composants/accessory" />
            </div>

            {/* Video game analysis section */}
            <hr className="border-2 border-green" />
            <div className="py-4">    
                <h2>Erreur: Tu n'a pas choisi assez de composants pour voir un analyse de jeux vidéos</h2>
            </div>

            {/* Buying section */}
            <hr className="border-2 border-green" />
            <div className="p-2 my-2 flex justify-between items-center">
                <span className="text-lg">Coût totale: 2315 $</span>
                <button className="p-2 rounded-md bg-green hover:bg-green-light text-white">
                    Achetez maintenant!
                </button>
            </div>
        </div>
    )
}