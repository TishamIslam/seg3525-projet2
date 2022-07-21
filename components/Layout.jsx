import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import Footer from "./Footer";
import Header from "./Header";


export default function Layout({ children }) {
    return (
        <div className="bg-mint-light">
            <Header />
            <main className="p-4 min-h-screen max-w-screen-lg mx-auto">{children}</main>
            <Footer />
            <button aria-label="Back to top" className="fixed right-2 bottom-2 px-auto w-10 h-10 rounded-md green-link bg-gold hover:bg-gold-light">
                <Link href="#navbar">
                    <a><FontAwesomeIcon icon={faArrowUp}/></a>
                </Link>
            </button>
        </div>
    )
}