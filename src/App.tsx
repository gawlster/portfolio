import { Analytics } from "@vercel/analytics/react";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Qualifications from "./pages/Qualifications";

function App() {
    return (
        <>
            <Analytics />
            <Homepage />
            <Projects />
            <Qualifications />
            <Contact />
        </>
    );
}

export default App;
