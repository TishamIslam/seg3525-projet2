import { useRouter } from 'next/router'
import Head from 'next/head'

import { computerComponents } from '../../backend/imports'
import ItemCard from '../../components/ItemCard'

export default function Component() {
    const router = useRouter()
    const { component } = router.query

    function renderComponents() {
        if (router.isReady) {
            return computerComponents[component].map((obj, index) => {
                return (
                    <ItemCard key={index} image={obj.img} imageAlt={obj.alt} button={true}
                        plus={true} text={<><p>{obj.name}</p><p>Prix: ${obj.price}</p></>} />
                )
            })
        }
    }

    return (
        <>
            <Head>
                <title>TI Tech Support - Composants</title>
            </Head>
            <h1>Achetez des composants: </h1>
            <div className="space-y-4 my-4">
                {renderComponents()}
            </div>
        </>
    )
}

