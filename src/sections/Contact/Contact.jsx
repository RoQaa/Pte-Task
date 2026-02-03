import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact-section py-5">
            <div className="container text-center">

                <span className="contact-subtitle">Contact</span>
                <h2 className="contact-title mb-5">Hire Me for Your Project</h2>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <form className="contact-form p-4 p-md-5">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div className="mb-4">
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <button className="btn btn-outline-light px-5">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
