import '../css/Navigation.css';
import Blog from '../pages/Blog';

const Navigation = ()=> {
    return (
        <nav>
            <div className="logo">
                <p>Karna</p>
            </div>

            <div className="nav-link">
                <ul>
                    <li>
                        <a href="#" className="nav-active">Home</a>
                    </li>
                    <li>
                        <a href={Blog}>Blog</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;