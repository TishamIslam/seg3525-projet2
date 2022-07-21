import { useState, useEffect } from "react"
import Head from "next/head"

import DisplayCard from "../../components/DisplayCard"
import Comment from "../../components/Comment"
import { comments as commentsFile, easterEggComments, computers, games, getComputerComponents } from "../../backend/imports"

import generateComputerCardText from "../../lib/computerCard"

import en from "../../locale/en"
import fr from "../../locale/fr"

export default function Ordinateur({ locale, easterEgg, computerID, computerComponents, computerImg, games }) {
    const t = locale === 'fr' ? fr : en

    const computer = computers[computerID]
    const [comments, setComments] = useState(easterEgg ? easterEggComments : commentsFile[computerID])

    useEffect(() => { //initialize user data when the page is loaded
        let savedComments = JSON.parse(window.localStorage.getItem('comments-' + computerID))
        if (savedComments) {
            setComments(savedComments)
        }
    }, [])

    function renderComputer() {
        return (
            <DisplayCard text={generateComputerCardText(computer)} imageAlt={computer.alt} image={computerImg} />
        )
    }

    function renderGameFPS() {
        let totalGamePower = 0;
        Object.entries(computer.components).forEach(([cType, cIDs]) => {
            if (cIDs instanceof Array) {
                cIDs.forEach((cID) => {
                    totalGamePower += computerComponents[cType][cID]?.gamePower ?? 0
                })
            } else {
                totalGamePower += computerComponents[cType][cIDs]?.gamePower ?? 0
            }
        });
        return (
            <div className="py-4 md:grid md:grid-cols-2 md:gap-8">
                {games.map((game, index) => {
                    let fps = parseInt(totalGamePower / (index + 1))
                    return (
                        <DisplayCard objectFit="cover" key={index} text={<p>{t.ipsPour} {game.name}: {fps}</p>} image={game.img} imageAlt={game.name} imgWidth={540} imgHeight={300} />
                    )
                })}
            </div>
        )
    }

    function handleCommentSubmit(e) {
        e.preventDefault()
        const commentText = document.getElementById('comment-text').value
        let commentName = document.getElementById('comment-name').value
        if (commentName.trim() === '') {
            commentName = t.anon
        }
        setComments(prevComments => {
            const newComments = [...prevComments, { name: commentName, text: commentText }]
            window.localStorage.setItem('comments-' + computerID, JSON.stringify(newComments))
            return newComments
        })
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
                {comments.map((comment, index) => {
                    return <Comment key={index} name={comment.name} text={comment.text} />
                })}
            </div>

            <h3 className="my-2">{t.ajouterCommentaire}</h3>
            <form onSubmit={event => handleCommentSubmit(event)} className="border space-y-4 border-mint-dark bg-mint p-2 py-4 md:p-4 md:py-6">
                <input id="comment-name" name="comment-name" className="border border-green rounded p-2 placeholder:text-gray-400" type="text" placeholder={t.nom + " " + t.optionnel} />
                <textarea required id="comment-text" name="comment-text" rows="4" className="border border-green block rounded p-2 w-full" placeholder={t.commentaireExemple} />
                <button type="submit" className="p-2 px-8 w-48 md:text-lg rounded-md bg-green hover:bg-green-light text-white" >{t.submit}</button>
            </form>
        </>
    )
}

export async function getStaticProps({ locale, params }) {
    const computerComponents = getComputerComponents(locale)
    let easterEgg = false
    if (params.ordi === 'easter-egg') {
        params.ordi = 0
        easterEgg = true
    }
    return {
        props: {
            locale: locale,
            computerID: params.ordi,
            computerImg: computerComponents['case'][computers[params.ordi].components.case].img,
            computerComponents: computerComponents,
            games: games,
            easterEgg: easterEgg
        }
    }
}

export async function getStaticPaths() {
    const ids = ['0', '1', '2', '3', '4', 'easter-egg']
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