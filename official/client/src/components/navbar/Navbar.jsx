import "./navbar.scss"
//import icons from font awesome

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Logo</a>
                    <div className="itemContainer">
                        <i className="icon"/>
                        <span>423-362-6595</span>
                    </div>
                    <div className="itemContainer">
                        <i className="icon"/>
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