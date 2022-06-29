import { useRouter } from "next/router"

import CarouselCard from "../../components/CarouselCard"
import Comment from "../../components/Comment"
import { computers } from "../../items/imports"

export default function Ordinateur() {
    const router = useRouter()
    const { ordi } = router.query

    const cardText = (
        <div className="p-2">
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
                <CarouselCard text={cardText} imageAlt="alt text" image={computers[ordi]} />
            )
        }
    }

    return (
        <>
            <h1>Détails de Ordinateur A</h1>
            <div className="my-4 max-w-xl mx-auto">
                {renderComputer()}
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