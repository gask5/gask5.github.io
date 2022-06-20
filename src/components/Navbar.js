import NavButton from "./NavButton";
import { Link } from "react-router-dom";

const topBar = {
    width: "100%",
    maxWidth: "50rem",
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    backdropFilter: "blur(5px)",
    zIndex: "2",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
};

const navContainer = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "-0.7em",
};

const buttons = {
    display: "flex",
};

function Navbar() {
    return (
        <div style={navContainer}>
            <div style={topBar}>
                <div alt="Left">
                    <Link className="link" to="/">
                        <NavButton name="Gabriele Veneziano" />
                    </Link>
                </div>
                <div style={buttons}>
                    <Link className="link" to="/works">
                        <NavButton name="Works" />
                    </Link>
                    <Link className="link" to="/contacts">
                        <NavButton name="Contacts" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
