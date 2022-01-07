import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
    return(
        <header className="header">
            <h2 className="header__title">NewsExplorer</h2>
            <Navigation />
        </header>
    );
}

export default Header;