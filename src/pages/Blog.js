import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Bg from '../assets/bg.png';
import '../css/Blog.css'


const Blog = () => {
    return (
        <div className="container">
            <header>
                <Navigation/>
            </header>
            
            <main>

                <section class="blog">
                    <div class="blog-component">
                        <div class="body-blog">
                            <h1>A Peek Into Jupiter’s Inner Life</h1>
                            <small>Aug 30, 2022</small>
                            <div class="blog-paragraf">
                                <p>
                                    Auroras and hazes glow in this composite image of Jupiter taken by the James Webb Space Telescope's Near-Infrared Camera (NIRCam). NIRCam has three specialized infrared filters that showcase details of the planet.
                                </p>

                                <p>
                                    Since infrared light is invisible to the human eye, the light has been mapped onto the visible spectrum: the auroras are mapped to redder colors, hazes to yellows and greens, and light reflected from a deeper main cloud to blues.
                                </p>
                            </div>
                            <button>View Details</button>
                        </div>

                        <div class="img-blog">
                            {/* <img src="../assets/photos/jupiter.png" alt=""> */}
                        </div>
                    </div>

                    <div class="blog-component blog-two">
                        <div class="body-blog">
                            <h1>DART Team Confirms Orbit of Targeted Asteroid</h1>
                            <p>Using some of the world’s most powerful telescopes, the DART investigation team last month completed a six-night observation campaign to confirm earlier calculat....</p>
                        </div>

                        <div class="img-blog">
                            {/* <img src="../assets/photos/asteroid.png" alt=""> */}
                        </div>
                    </div>

                    <div class="blog-component blog-three">
                        <div class="body-blog">
                            <h1>DART Team Confirms Orbit of Targeted Asteroid</h1>
                            <p>Using some of the world’s most powerful telescopes, the DART investigation team last month completed a six-night observation campaign to confirm earlier calculat....</p>
                        </div>

                        <div class="img-blog">
                            {/* <img src="../assets/photos/asteroid.png" alt=""> */}
                        </div>
                    </div>

                    <div class="blog-component">
                        <div class="body-blog">
                            <h1>NASA’s Juno Mission Reveals Jupiter’s Complex Colors</h1>
                            <small>Aug 30, 2022</small>
                            <div class="blog-paragraf">
                                <p>
                                    NASA’s Juno spacecraft observed the complex colors and structure of Jupiter’s clouds as it completed its 43rd close flyby of the giant planet on July 5, 2022.
                                </p>

                                <p>
                                    Citizen scientist Björn Jónsson created these two images using raw data from the JunoCam instrument aboard the spacecraft. At the time the raw image was taken, Jun.........
                                </p>
                            </div>
                            <button>View Details</button>
                        </div>

                        <div class="img-blog">
                            {/* <img src="../assets/photos/galaxy.png" alt=""> */}
                        </div>
                    </div>
                </section>

            </main>

            <Footer/>

        </div>
    );
}

export default Blog;