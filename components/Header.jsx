import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faHouseChimney, faCircleInfo, faComputer, faScrewdriverWrench, faTableList } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'

import en from '../locale/en'
import fr from '../locale/fr'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// adapted from https://tailwindui.com/components/application-ui/navigation/navbars
export default function Header() {
    const router = useRouter()
    const locale = router.locale
    const t = locale === 'fr' ? fr : en
    const localeLinkLang = locale === 'fr' ? 'en' : 'fr'

    const navigation = [
        { name: t.accueil, href: '/', current: true, icon: faHouseChimney },
        { name: t.information, href: '/info', current: false, icon: faCircleInfo },
        { name: t.ordinateurs, href: '/ordinateurs', current: false, icon: faComputer },
        { name: t.composantes, href: '/composants', current: false, icon: faTableList },
        { name: t.créerUnOrdinateur, href: '/construire', current: false, icon: faScrewdriverWrench },
    ]

    //sets whichever page is current as current by checking the url
    //home is current by default since it's just /
    function checkCurrentPage() {
        navigation.forEach(pageInfo => {
            if (router.pathname.includes(pageInfo.href)) {
                navigation[0].current = false;
                pageInfo.current = true;
            }
        })

    }
    return (
        <Disclosure as="nav" className="bg-green md:text-lg" id='navbar'>
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="flex-1 px-2 flex items-center justify-between h-16">
                            <Link href={router.asPath} locale={localeLinkLang}>
                                <a className='gold-link font-medium underline md:hidden'>{localeLinkLang === 'en' ? "English" : "Français"}</a>
                            </Link>
                            <div className="flex-shrink-0 flex items-center text-white">
                                {t.logoGoesHere}
                            </div>
                            <div className="hidden md:flex md:ml-6 items-center">
                                <div className="flex space-x-2">
                                    {checkCurrentPage()}
                                    {navigation.map((item) => (
                                        <div key={item.name}>
                                            <Link href={item.href} key={item.name}>
                                                <a
                                                    className={classNames(
                                                        item.current ? 'bg-green-dark text-white' : 'text-gray-200 active:bg-green-dark hover:bg-green-light hover:text-white',
                                                        'px-3 py-2 rounded-md md:text-sm lg:text-base font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    <div className='hidden lg:inline-block'>
                                                        <FontAwesomeIcon icon={item.icon} />
                                                    </div>
                                                    {" "}
                                                    {item.name}
                                                </a>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Link href={router.asPath} locale={localeLinkLang}>
                                <a className='gold-link font-medium underline hidden items-center md:flex ml-auto'>{localeLinkLang === 'en' ? "English" : "Français"}</a>
                            </Link>
                            <div className=" flex items-center md:hidden">
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
                                <Link key={item.name} href={item.href} passHref>
                                    <Disclosure.Button
                                        as="a"
                                        className={classNames(
                                            item.current ? 'bg-green-dark text-white' : 'text-gray-200 hover:bg-green-light active:bg-green-dark hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        <FontAwesomeIcon icon={item.icon} /> {item.name}
                                    </Disclosure.Button>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

