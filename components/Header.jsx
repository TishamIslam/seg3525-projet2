import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faHouseChimney, faCircleInfo, faComputer, faScrewdriverWrench, faTableList } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

// export default function Header(props) {
//     const [toggled, setToggle] = useState(false)
//     return (
//         <nav className="text-white w-full bg-green-900">
//             <div className="flex justify-between ">
//                 <div className="flex">
//                     Logo here
//                 </div>
//                 <button className="flex md:hidden w-8 h-8 items-center" onClick={() => { setToggle(!toggled); console.log(toggled) }}>
//                     <FontAwesomeIcon icon={faBars} className="mx-auto text-2xl text-yellow-500" />
//                 </button>
//             </div>
//             <ul>
//                 <li><Link href="/index"><a>
//                     <FontAwesomeIcon icon={faHouseChimney} /> Accueil
//                 </a></Link></li>
//                 <li><Link href="/info"><a>
//                     <FontAwesomeIcon icon={faCircleInfo} /> Information (Recommandé pour débutantes)
//                 </a></Link></li>
//                 <li><Link href="/ordinateurs"><a>
//                     <FontAwesomeIcon icon={faComputer} /> Voir les ordinateurs des autres
//                 </a></Link></li>
//                 <li><Link href="/construire"><a>
//                     <FontAwesomeIcon icon={faScrewdriverWrench} /> Créer un ordinateur
//                 </a></Link></li>
//                 <li><Link href="/composants/index"><a>
//                     <FontAwesomeIcon icon={faTableList} /> Voir des Composantes Individuel
//                 </a></Link></li>
//             </ul>
//         </nav>
//     )
// }

import { Disclosure } from '@headlessui/react'

const navigation = [
    { name: 'Accueil', href: '/index', current: true, icon: faHouseChimney },
    { name: 'Information', href: '/info', current: false, icon: faCircleInfo },
    { name: 'Ordinateurs', href: '/ordinateurs', current: false, icon: faComputer },
    { name: 'Créer un ordinateur', href: '/construire', current: false, icon: faScrewdriverWrench },
    { name: 'Composantes Individuels', href: '/composants/', current: false, icon: faTableList },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// adapted from https://tailwindui.com/components/application-ui/navigation/navbars
export default function Header() {
    const router = useRouter()
    navigation.forEach(pageInfo => {
        if (router.pathname.includes(pageInfo.href)) {
            navigation[0].current = false;
            pageInfo.current = true;
        }
    })

    return (
        <Disclosure as="nav" className="bg-green">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center text-white">
                                    Logo goes here
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-green-dark text-white' : 'text-gray-200 active:bg-green-dark hover:bg-green-light hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-2xl hover:text-gold-light text-gold active:text-gold-dark hover:bg-text-yellow-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <FontAwesomeIcon icon={faX} className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <FontAwesomeIcon icon={faBars} className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-green-dark text-white' : 'text-gray-200 hover:bg-green-light active:bg-green-dark hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <FontAwesomeIcon icon={item.icon} /> {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

