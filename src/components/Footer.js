import '../css/Footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="badge">
                <p>Karna</p>
            </div>

            <div className="link-footer-wrapper">
                <div className="link-footer">
                    <p>About Us</p>
                    <div className="nav-footer">
                        <a href="#">contact</a>
                        <a href="#">about</a>
                        <a href="#">history</a>
                    </div>                  
                </div>

                <div className="link-footer">
                    <p>About Us</p>
                    <div className="nav-footer">
                        <a href="#">contact</a>
                        <a href="#">about</a>
                        <a href="#">history</a>
                    </div>                  
                </div>

                <div className="link-footer">
                    <p>About Us</p>
                    <div className="nav-footer">
                        <a href="#">contact</a>
                        <a href="#">about</a>
                        <a href="#">history</a>
                    </div>                  
                </div>

                <div className="link-footer">
                    <p>About Us</p>
                    <div className="nav-footer">
                        <a href="#">contact</a>
                        <a href="#">about</a>
                        <a href="#">history</a>
                    </div>                  
                </div>

                <div className="link-footer">
                    <p>About Us</p>
                    <div className="nav-footer">
                        <a href="#">contact</a>
                        <a href="#">contact</a>
                        <a href="#">contact</a>
                    </div>                  
                </div>
            </div>

            <div className="contact">
                <form action="">
                    <label for="textarea">Contact us:</label>
                    <textarea name="textarea" id="textarea" cols="40" rows="5" placeholder="say something......."></textarea>
                    <button>Send</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer;