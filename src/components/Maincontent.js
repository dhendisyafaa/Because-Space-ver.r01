import Hero from "./Hero";
import Card from "./Card";
import '../css/Maincontent.css';
import moon from '../assets/moon.png';
import mars from '../assets/mars.png'
import earth from '../assets/earth.png'

const Maincontent = () => {
    return(
        <main>
            <Hero/>
            <section className="card">
                <Card imgCard={moon} titleCard="MOON"/>
                <Card imgCard={earth} titleCard="Earth"/>
                <Card imgCard={mars} titleCard="Mars"/>
            </section>
        </main>
    )
}

export default Maincontent;