

export default function Footer() {
    return (
        <footer className=" bg-green text-white w-full mt-4 p-4 space-y-2">
            <h2 className="text-2xl">Contactez-Nous!</h2>
            <p>TI Tech Support <br /> 420 Sesame street <br /> Elmoville, ON <br /> 6T9 P0O</p>
            <p>Appelez nous à <a className="text-gold hover:text-gold-light hover:underline" href="tel:5551239876">(555) 123-9876</a>, 
            nous sommes disponibles 9:00 à 17:00 tous les jours. <br />
            Vous pouvez aussi envoyez un courriel à <a className="text-gold hover:text-gold-light hover:underline" href="mailto:ti626@titech.com">ti626@titech.com</a>.</p>
        </footer>
    )
}