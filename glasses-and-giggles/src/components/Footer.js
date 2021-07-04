import React from "react"
import {Link} from "react-router-dom"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <nav>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Rules">Rules</Link>
                    <Link to="/FacebookLink">Facebook</Link>
                    <Link to="/Faq">FAQ</Link>
                </nav>
            </footer>
        )
    }
}
export default Footer;