import logo from "../../helpers/logo.png"
import "./Navbar.scss"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo"> 
                <img src={logo} alt="img" />
            </div>
            <div className="links">
                <a href="#horoscope" className="">SOME</a>
                <a href="#daily" className="">MODELS</a>
                <a href="#tarot" className="">OF</a>
                <a href="#article" className="">APPLE</a>
                <a href="#contact" className="">iPHONE</a>

            </div>

        </div>
    );
};

export default Navbar;