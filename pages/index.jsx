import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Disclosure from '../components/Disclosure'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import logo from '../public/logo.png'

import en from '../locale/en'
import fr from '../locale/fr'

export default function Home({ locale }) {
  const t = locale === 'en' ? en : fr

  const faqQuestions = [t.faqQ1, t.faqQ2, t.faqQ3, t.faqQ4, t.faqQ5]
  const faqAnswers = [t.faqA1, t.faqA2, t.faqA3, t.faqA4, t.faqA5]
  const FAQ = (
    <div className='space-y-4' >
      {faqQuestions.map((faq, index) => {
        return (
        <div key={index}>
          <h3 className='font-lg font-medium'>{faq}</h3>
          <p>{faqAnswers[index]}</p>
        </div>
        )
        })
      }
    </div>
  )

  return (
    <div>
      <Head>
        <title>TI Tech Support - {t.accueil}</title>
      </Head>

      <h1 className='text-5xl text-center font-bold text-green-dark'>TI Tech Support</h1>
      <div className='flex mx-auto justify-center my-4'>
        <Image src={logo} alt="Tisham Islam Tech Support, Logo" />
      </div>

      <div className='grid grid-cols-1 mx-auto justify-center my-4 w-fit'>
        <Disclosure heading={<h2 className='text-3xl font-semibold'>{t.notreMission}</h2>} >
          <p>{t.notreMissionDesc}</p>
        </Disclosure>
        <Disclosure heading={<h2 className='text-3xl font-semibold'>{t.nosServices}</h2>} >
          <p>
            <Link href="/info">
              <a className='green-link'>
                {t.servicesInfo} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </p>
          <p>
            <Link href="/ordinateurs">
              <a className='green-link'>
                {t.servicesOrdi} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </p>
          <p>
            <Link href="/construire">
              <a className='green-link'>
                {t.servicesConstruit} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </p>
          <p>
            <Link href="/composants">
              <a className='green-link'>
                {t.servicesComposants} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </p>
        </Disclosure>
        <Disclosure heading={<h2 className='text-3xl font-semibold'>FAQ</h2>} >
        {FAQ}
        </Disclosure>
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