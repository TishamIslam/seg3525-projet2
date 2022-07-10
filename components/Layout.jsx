import Footer from "./Footer";
import Header from "./Header";


export default function Layout({ children }) {
    return (
        <div className="bg-mint-light">
            <Header />
            <main className="p-4 min-h-screen max-w-screen-lg mx-auto">{children}</main>
            <Footer />
        </div>
    )
}