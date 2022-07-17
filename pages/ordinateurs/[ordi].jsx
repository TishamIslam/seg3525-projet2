import { useRouter } from "next/router"
import Head from "next/head"

import DisplayCard from "../../components/DisplayCard"
import Comment from "../../components/Comment"
import { computers, games, fps } from "../../backend/imports"

import generateCardText from "../../lib/computerCard"

import en from "../../locale/en"
import fr from "../../locale/fr"

export default function Ordinateur({ locale, computer, games, fps }) {
    const t = locale === 'fr' ? fr : en

    function renderComputer() {
        return (
            <DisplayCard text={generateCardText(computer)} imageAlt={computer.alt} image={computer.img} />
        )
    }

    function renderGameFPS() {
        return (
            <div className="py-4 md:grid md:grid-cols-2 md:gap-8">
                {games.map((game, index) => {
                    return (
                        <DisplayCard objectFit="cover" key={index} text={<p>{t.ipsPour} {game.name}: {fps[index]}</p>} image={game.img} imgWidth={540} imgHeight={300} />
                    )
                })}
            </div>
        )

    }

    return (
        <>
            <Head>
                <title>TI Tech Support - {t.Ordinateur}</title>
            </Head>
            <h1 className="text-center">{t.orDetails} {computer.title}</h1>
            <div className="my-4 max-w-xl mx-auto">
                {renderComputer()}
            </div>
            <div className="py-8">
                <h2 className="text-center ">{t.jeuxDetails}</h2>
                {renderGameFPS()}
            </div>

            <h2 className="mt-8 text-center ">{t.sectionCommentaires}</h2>
            <div className="py-2 md:grid md:grid-cols-2 md:gap-8 mx-auto w-fit">
                <Comment name="Commenter 1" />
                <Comment name="Commenter 2" />
                <Comment />
                <Comment name="Commenter 3" />
                <Comment name="Commenter 4" />
                <Comment />
            </div>

            <h3 className="text-lg my-2">{t.ajouterCommentaire}</h3>
            <form >
                <input name="comment-name" className="border border-green my-2 rounded p-2 placeholder:text-gray-400" type="text" placeholder={t.nom} />
                <textarea className="border border-green block rounded p-2 my-2 w-full max-w-md" name="comment-text" rows="4" placeholder={t.commentaireExemple} />
            </form>
        </>
    )
}

export async function getStaticProps({ locale, params }) {

    return {
        props: {
            locale: locale,
            computer: computers[params.ordi],
            games: games,
            fps: fps[params.ordi],
        }
    }
}

export async function getStaticPaths() {
    const ids = ['0', '1', '2', '3', '4']
    const locales = ['en', 'fr']
    const paths = []
    ids.forEach(id => {
        for (let locale of locales) {
            paths.push({
                params: { ordi: id }, locale: locale
            })
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}