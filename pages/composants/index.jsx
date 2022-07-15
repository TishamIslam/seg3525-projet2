import Link from "next/link"
import Head from "next/head"

export default function Components() {
    const componentsList = [
        { name: "CPU", link: "cpu", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam recusandae, neque, nisi quisquam aspernatur harum ipsum repellat ullam molestiae quae. Blanditiis tempora eum quam in esse autem ipsum." },
        { name: "Carte-mère", link: "motherboard", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam recusandae, neque, nisi quisquam aspernatur harum ipsum repellat ullam molestiae quae. Blanditiis tempora eum quam in esse autem ipsum." },
        { name: "Mémoire", link: "storage", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam recusandae, neque, nisi quisquam aspernatur harum ipsum repellat ullam molestiae quae. Blanditiis tempora eum quam in esse autem ipsum." },
        { name: "RAM", link: "ram", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam recusandae, neque, nisi quisquam aspernatur harum ipsum repellat ullam molestiae quae. Blanditiis tempora eum quam in esse autem ipsum." },
        { name: "Ventilateurs", link: "fan", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam recusandae, neque, nisi quisquam aspernatur harum ipsum repellat ullam molestiae quae. Blanditiis tempora eum quam in esse autem ipsum." },
        { name: "Cartes Graphiques (GPU)", link: "gpu", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam recusandae, neque, nisi quisquam aspernatur harum ipsum repellat ullam molestiae quae. Blanditiis tempora eum quam in esse autem ipsum." },
        { name: "Boîtiers", link: "case", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam recusandae, neque, nisi quisquam aspernatur harum ipsum repellat ullam molestiae quae. Blanditiis tempora eum quam in esse autem ipsum." },
        { name: "Alimentation électrique", link: "power", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam recusandae, neque, nisi quisquam aspernatur harum ipsum repellat ullam molestiae quae. Blanditiis tempora eum quam in esse autem ipsum." },
        { name: "Système d'exploitation", link: "os", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam recusandae, neque, nisi quisquam aspernatur harum ipsum repellat ullam molestiae quae. Blanditiis tempora eum quam in esse autem ipsum." },
        { name: "Accessoires", link: "accessory", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam recusandae, neque, nisi quisquam aspernatur harum ipsum repellat ullam molestiae quae. Blanditiis tempora eum quam in esse autem ipsum." }
    ]
    return (
        <>
            <Head>
                <title>TI Tech Support - Composants</title>
            </Head>
            <h1 className="text-3xl">Liste de composants offert: </h1>

            <ul>
                {componentsList.map((component, index) => {
                    const [name, link, desc] = [component.name, component.link, component.desc]
                    return (
                        <li className="my-4" key={index}>
                            <Link href={"/composants/" + link}><a className="green-link font-medium text-xl" >{name}</a></Link>
                            <details>
                                <summary>Détailes à propos de {name}</summary>
                                <p>
                                    {desc}
                                </p>
                            </details>
                        </li>
                    )
                })}
            </ul>
        </>
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