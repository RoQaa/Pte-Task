import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-4">
            <div className="container">
                <Link className="navbar-brand me-5 fw-bolder fs-2" to="#">MAGG</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                        <li className="nav-item">
                            <Link className="nav-link active fs-5" aria-current="page" to="#">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="#" onClick={() => {
                                document.getElementById("services")?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="#" onClick={() => {
                                document.getElementById("portfolio")?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="#" onClick={() => {
                                document.getElementById("blog")?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}>Blog</Link>
                        </li>


                    </ul>
                    <button
                        className="say-Hello-btn"
                        onClick={() => {
                            document.getElementById("blog")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        Say Hello
                    </button>

                </div>
            </div>
        </nav>
    );
}