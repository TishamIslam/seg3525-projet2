import { useRouter } from "next/router"
import Head from "next/head"

import DisplayCard from "../../components/DisplayCard"
import Comment from "../../components/Comment"
import { computers, games, fps } from "../../items/imports"



export default function Ordinateur() {
    const router = useRouter()
    const { ordi } = router.query

    const cardText = (
        <div>
            <h2 className="text-xl">Ordinateur A</h2>
            <p>CPU: Details</p>
            <p>GPU: Details</p>
            <p>RAM: Details</p>
            <p>Mémoire: Details</p>
        </div>
    )

    function renderComputer() {
        if (router.isReady) {
            return (
                <DisplayCard text={cardText} imageAlt="Ordinateur A" image={computers[ordi]} />
            )
        }
    }

    function renderGameFPS() {
        if (router.isReady) {
            return (
                <div className="py-4 md:grid md:grid-cols-2 md:gap-8">
                    {games.map((game, index) => {
                        return (
                            <DisplayCard objectFit="cover" key={index} text={<p>IPS pour {game.name}: {fps[ordi][index]}</p>} image={game.img} imgWidth={540} imgHeight={300} />
                        )
                    })}
                </div>
            )
        }
    }

    return (
        <>
            <Head>
                <title>TI Tech Support - Ordinateurs</title>
            </Head>
            <h1 className="text-center">Détails de Ordinateur A</h1>
            <div className="my-4 max-w-xl mx-auto">
                {renderComputer()}
            </div>
            <div className="py-8">
                <h2 className="text-center ">Détails de comportement sur des jeux vidéos</h2>
                {renderGameFPS()}
            </div>

            <h2 className="mt-8 text-center "> Section de commentaires</h2>
            <div className="py-2 md:grid md:grid-cols-2 md:gap-8 mx-auto w-fit">
                <Comment name="Commenter 1" />
                <Comment name="Commenter 2" />
                <Comment />
                <Comment name="Commenter 3" />
                <Comment name="Commenter 4" />
                <Comment />
            </div>

            <h3 className="text-lg my-2">Ajouter un commentaire</h3>
            <form >
                <input name="comment-name" className="border border-green my-2 rounded p-2 placeholder:text-gray-400" type="text" placeholder="Nom" />
                <textarea className="border border-green block rounded p-2 my-2 w-full max-w-md" name="comment-text" rows="4" placeholder="J'aime le build! Blah Blah Blah" />
            </form>
        </>
    )
}