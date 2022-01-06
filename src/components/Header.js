import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
    return(
        <div className="header">
            <h2 className="header__title">NewsExplorer</h2>
            <Navigation />
        </div>
    );
}

export default Header;