import { useRouter } from 'next/router'
import { computerComponents } from '../../items/imports'
import ItemCard from '../../components/ItemCard'

const Component = () => {
    const router = useRouter()
    const { component } = router.query

    function renderComponents() {
        if (router.isReady) {
            return computerComponents[component].map((obj, index) => {
                return (
                    <ItemCard key={index} image={obj.img} imageAlt={obj.alt} button={true} plus={true} text={<><p>{obj.name}</p><p>{obj.price}</p></>} />
                )
            })
        } else {
            return
        }
    }

    return (
        <>
            <h1>Achetez des composants: </h1>
            <div className="space-y-4 my-4">
            {renderComponents()}
            </div>
        </>
    )
}

export default Component