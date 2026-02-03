import Hero from "../sections/Hero/Hero.jsx";
import About from "../sections/About/About.jsx";
import Services from "../sections/Services/Services.jsx";
import Portfolio from "../sections/Portfolio/Portfolio.jsx";
import Contact from "../sections/Contact/Contact.jsx";
import Blog from "../sections/Blog/Blog.jsx";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Blog />
            <Contact />
        </>
    );
}