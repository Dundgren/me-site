import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="header">
            <h1 className="title"><Link to="/">Daniel Lundgren</Link></h1>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to ="/contact">Contact</NavLink></li>
                    <li><a>Link 3</a></li>
                    <li><a>Link 4</a></li>
                </ul>
            </nav>
        </div>
    )
}
