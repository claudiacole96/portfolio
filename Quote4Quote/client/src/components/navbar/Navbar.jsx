import "./navbar.scss";
import { AiFillFacebook } from 'react-icons/ai';

export default function Navbar() {
    return (
        <div className="navbar">
            <h1>Quote4Quote</h1>
            <a href="https://www.facebook.com/claudiacole1996"><AiFillFacebook/></a>
        </div>
    )
}