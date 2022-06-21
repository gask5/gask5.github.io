import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

import { AnimatePresence } from "framer-motion";

const style = {
    width: "70%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "no-wrap",
    paddingTop: "3em",
};

function App() {
    const location = useLocation();
    return (
        <div>
            <Navbar />
            <div style={style}>
                <AnimatePresence
                    exitBeforeEnter
                    onExitComplete={() => {
                        if (typeof window !== "undefined") {
                            window.scrollTo({ top: 0 });
                        }
                    }}
                >
                    <Routes key={location.pathname} location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="works" element={<Works />} />
                        <Route path="about" element={<About />} />
                        <Route path="contacts" element={<Contacts />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default App;
