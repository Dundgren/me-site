import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1><Link to="/">Daniel Lundgren</Link></h1>
            <nav>
                <ul>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to ="/contact">Contact</NavLink></li>
                    <li><NavLink to ="/skills">Skills</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
