import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Disclosure from '../components/Disclosure'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import logo from '../public/logo.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TI Tech Support - Accueil</title>
      </Head>

      <h1 className='text-5xl text-center font-bold text-green-dark'>TI Tech Support</h1>
      <div className='flex mx-auto justify-center my-4'>
        <Image src={logo}></Image>
      </div>

      <div className='grid grid-cols-1 mx-auto justify-center my-4 w-fit'>
        <Disclosure heading={<h2 className='text-3xl font-semibold'>Qui nous sommes?</h2>} >
          <p>Nous sommes un petit entreprise qui essaie d'accomplir de grand choses!
            On veut offrir un service pour faciliter le processus de construire ton propre ordinateur.
            Pour accomplir ça, on a créé ce site web et mis autant de choses pour te donner les informations nécessaires
            pour construire un ordinateur dans les limites de ton budget, qui accompli les tâches nécessaires et, surtout, a l'air génial!
          </p>
        </Disclosure>
        <Disclosure heading={<h2 className='text-3xl font-semibold'>Nos services</h2>} >
          <p>
            <Link href="/info">
              <a className='green-link'>
                Information importantes pour les débutantes <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </p>
          <p>
            <Link href="/ordinateurs">
              <a className='green-link'>
                Voir des ordinateurs que d'autres personnes ont construits <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </p>
          <p>
            <Link href="/construire">
              <a className='green-link'>
                Construire ton propre ordinateur <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </p>
          <p>
            <Link href="/composants">
              <a className='green-link'>
                Parcourir les composants nous avons disponibles <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </p>
        </Disclosure>
        <Disclosure heading={<h2 className='text-3xl font-semibold'>FAQ</h2>} >
          <h3 className='font-lg font-medium'>Question 1</h3>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias et itaque amet, fugit mollitia sed modi dolorum minus. Reprehenderit, odit iste. Minima distinctio quam vero. Quod iste amet officiis odit!
          </p>
          <h3 className='font-lg font-medium'>Question 2</h3>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo et vel in consequatur consequuntur, animi iusto. Culpa perspiciatis commodi cupiditate eum aperiam illo quos qui amet, repellat repellendus, enim magni?
          </p>
          <h3 className='font-lg font-medium'>Question 3</h3>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum dolorem neque eos in perspiciatis quas nam quod accusamus deleniti commodi saepe maxime enim temporibus, velit eligendi. Enim exercitationem suscipit eius.
          </p>
          <h3 className='font-lg font-medium'>Question 4</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet nobis veritatis suscipit, aliquam quas adipisci corporis, sed totam saepe ea! Sunt dolorum distinctio delectus sequi nam dolores commodi modi!
          </p>
        </Disclosure>
      </div>

    </div>
  )
}

import { useRouter } from 'next/router'

export async function getStaticProps(context) {
  const { locale } = useRouter()

  return {
      props: {
          locale: locale
      }
  }
}