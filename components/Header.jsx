import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faHouseChimney, faCircleInfo, faComputer, faScrewdriverWrench, faTableList } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'

const navigation = [
    { name: 'Accueil', href: '/', current: true, icon: faHouseChimney },
    { name: 'Information', href: '/info', current: false, icon: faCircleInfo },
    { name: 'Ordinateurs', href: '/ordinateurs', current: false, icon: faComputer },
    { name: 'Créer un ordinateur', href: '/construire', current: false, icon: faScrewdriverWrench },
    { name: 'Composantes Individuels', href: '/composants', current: false, icon: faTableList },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// adapted from https://tailwindui.com/components/application-ui/navigation/navbars
export default function Header() {
    const router = useRouter()

    //sets whichever page is current as current by checking the url
    //home is current by default since it's just /
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
                                <div className="hidden md:block md:ml-6">
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
                            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex p-2 items-center justify-center rounded-md text-2xl hover:text-gold-light text-gold active:text-gold-dark hover:bg-text-yellow-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <FontAwesomeIcon icon={faX} className="block" size="lg" aria-hidden="true" />
                                    ) : (
                                        <FontAwesomeIcon icon={faBars} className="block" size="lg" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
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

