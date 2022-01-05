import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
    return(
        <div className="header">
            <h1 className="header__title">NewsExplorer</h1>
            <Navigation />
        </div>
    );
}

export default Header;