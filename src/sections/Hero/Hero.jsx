import "animate.css";
import "./Hero.css";
import profileImg from "../../imgs/profile.jpg";
export default function Hero() {
    return (
        <section className="container-fluid hero">
            <div className="container py-5 ">
                <div className="row align-items-center min-vh-100">
                    <div className="col-md-6 animate__animated animate__fadeInLeft text-white">
                        <h1 className="display-4 fw-bold">Hello,<br />I'm a <span className="text-info">Web Designer</span></h1>
                        <span className="hero-divider"></span>
                        <p className=" my-4 h4">I beautifully design and build clean, modern and professional websites.</p>
                        <button className="view-my-works-btn">View My Works</button>
                    </div>
                    <div className="col-md-6 text-center animate__animated animate__fadeInRight">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="hero-img img-fluid"
                        />
                    </div>

                </div>
            </div>

        </section>
    );
}