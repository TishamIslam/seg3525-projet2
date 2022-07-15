import Head from "next/head"

import ActionButton from "../components/ActionButton"
import ItemCard from "../components/ItemCard"

import AMDRyzen9 from "../public/Images/AMDRyzen9.jpg"
import { computerComponents } from "../backend/imports"

export default function BuildComputer() {
    const chosenOS = computerComponents['os'][0]
    const chosenHDD = computerComponents['storage'][0]
    const chosenNVMe = computerComponents['storage'][6]
    return (
        <div className="space-y-6">
            <Head>
                <title>TI Tech Support - Construction</title>
            </Head>
            <h1>Créez un Ordinateur</h1>
            <span>* indique un composante requis</span>

            <div className="bg-mint p-2 py-3 rounded-lg">
                <div className="p-2 flex justify-between items-center">
                    <span className="text-lg md:text-xl">CPU Choisi: </span>
                </div>
                <div className="p-2">
                    <ItemCard image={AMDRyzen9} imageAlt="AMD Ryzen 9 CPU" button={true}
                        text={(<div><p>AMD Ryzen 9 5900x</p><p>Prix: 2000 $</p></div>)} />
                </div>
            </div>
            <div className="bg-mint p-2 py-3 rounded-lg">
                <div className="p-2 flex justify-between items-center">
                    <span className="text-lg md:text-xl">Ajouter un carte-mère *</span>
                    <ActionButton plus={true} link="/composants/motherboard" />
                </div>
            </div>
            <div className="bg-mint p-2 py-3 rounded-lg">
                <div className="p-2 flex justify-between items-center">
                    <span className="text-lg md:text-xl">Composants mémoire choisis (Maximum varie selon le boîtier):</span>
                    <ActionButton plus={true} link="/composants/storage" />
                </div>
                <div className="space-y-6 p-2 mt-2">
                    <ItemCard image={chosenHDD.img} imageAlt={chosenHDD.alt} button={true}
                        text={(<div><p>{chosenHDD.name}</p><p>Prix: {chosenHDD.price} $</p></div>)} />
                    <ItemCard image={chosenNVMe.img} imageAlt={chosenNVMe.alt} button={true}
                        text={(<div><p>{chosenNVMe.name}</p><p>Prix: {chosenNVMe.price} $</p></div>)} />
                </div>
            </div>
            <div className="bg-mint p-2 py-3 rounded-lg">
                <div className="p-2 flex justify-between items-center">
                    <span className="text-lg md:text-xl">Ajouter du RAM *</span>
                    <ActionButton plus={true} link="/composants/ram" />
                </div>
            </div>
            <div className="bg-mint p-2 py-3 rounded-lg">
                <div className="p-2 flex justify-between items-center">
                    <span className="text-lg md:text-xl">Ajouter un ventilateur</span>
                    <ActionButton plus={true} link="/composants/fan" />
                </div>
            </div>
            <div className="bg-mint p-2 py-3 rounded-lg">
                <div className="p-2 flex justify-between items-center">
                    <span className="text-lg md:text-xl">Ajouter un carte graphique *</span>
                    <ActionButton plus={true} link="/composants/gpu" />
                </div>
            </div>
            <div className="bg-mint p-2 py-3 rounded-lg">
                <div className="p-2 flex justify-between items-center">
                    <span className="text-lg md:text-xl">Ajouter un boîtier * </span>
                    <ActionButton plus={true} link="/composants/case" />
                </div>
            </div>
            <div className="bg-mint p-2 py-3 rounded-lg">
                <div className="p-2 flex justify-between items-center">
                    <span className="text-lg md:text-xl">Ajouter l'alimentation électrique *</span>
                    <ActionButton plus={true} link="/composants/power" />
                </div>
            </div>
            <div className="bg-mint p-2 py-3 rounded-lg">
                <div className="p-2 flex justify-between items-center">
                    <span className="text-lg md:text-xl">Système d'exploitation choisi:</span>
                </div>
                <div className="p-2">
                    <ItemCard image={chosenOS.img} imageAlt={chosenOS.alt} button={true}
                        text={(<div><p>{chosenOS.name}</p><p>Prix: {chosenOS.price} $</p></div>)} />
                </div>
            </div>
            <div className="bg-mint p-2 py-3 rounded-lg">
                <div className="p-2 flex justify-between items-center">
                    <span className="text-lg md:text-xl">Ajouter des accessoires</span>
                    <ActionButton plus={true} link="/composants/accessory" />
                </div>
            </div>

            {/* Video game analysis section */}
            <hr className="border border-green" />
            <div className="py-8">
                <h2>Erreur: Tu n'a pas choisi assez de composants pour voir un analyse de jeux vidéos</h2>
            </div>

            {/* Buying section */}
            <hr className="border border-green" />
            <div className="p-2 py-8 grid grid-cols-1 gap-2 md:flex justify-between items-center">
                <span className="text-xl text-center md:text-left">Coût totale: 2315 $</span>
                <button className="p-2 rounded-md bg-green hover:bg-green-light text-white">
                    Achetez maintenant!
                </button>
            </div>
        </div>
    )
}

export async function getStaticProps({ locale }) {

  return {
      props: {
          locale: locale
      }
  }
}