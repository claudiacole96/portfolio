import "./navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
//import icons from font awesome

export default function Navbar({ menuOpen, setMenuOpen, darkmode }) {
    return (
        <div className={"navbar " + (menuOpen && "active ") + (darkmode && "dark")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Logo</a>
                    <div className="itemContainer">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <span>123-456-7890</span>
                    </div>
                    <div className="itemContainer">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEnvelope} /> 
                        </div>
                        <span>claudiacoledev@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}