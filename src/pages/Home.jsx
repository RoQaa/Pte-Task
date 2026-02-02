import Hero from "../sections/Hero.jsx";
import About from "../sections/About";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import Blog from "../sections/Blog.jsx";


export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Blog />
        </>
    );
}