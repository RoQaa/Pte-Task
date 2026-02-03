import "./Services.css"
import wordPress from "../../imgs/wordPress-logo.png"
import psd from "../../imgs/psd.png"
import web from "../../imgs/web.png"
export default function Services() {
    const services = [
        {
            title: "Web Design",
            description: "Design cool, sleek, modern and professional web pages.I desgin high fidelity wireframes,oixel oerfect web graphic ui or psd landing pages or webpages.Tools I use are Photoshop,Illustartor,Xd adn Figma.",
            img: web,
        },
        {
            title: "PSD to HTML",
            description: "Convert your designs into a fully functional live website that works fine.I use Bootstrap or Tailwind CSS to design your website. Your live website will be exavtly the same in look and functionality as your design.",
            img: psd,
        },
        {
            title: "WordPress",
            description: "WordPress is my favourite CMS platform for building website. I've mastered in almost all kinds of premium themes like Avada, Divi etc.I can install,setup,design,customize,build and fix websites made with WordPress.",
            img: wordPress,
        },
    ];

    return (
        <section id="services" className="continer-fluid services-bg ">
            <div className="container py-5 text-white">
                <p className="h5 text-center">Services</p>
                <h2 className="text-center mb-5">What I Do</h2>
                <div className="row g-4">
                    {services.map(service => (
                        <div key={service.title} className="col-md-4">
                            <div className="card card-bg  text-white h-100 text-center">
                                <div className="card-body">
                                    <div className="  mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                                        <img src={service.img} alt="" className="w-100 h-100  " />
                                    </div>
                                    <h5 className="mb-3">{service.title}</h5>
                                    <p className="">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}