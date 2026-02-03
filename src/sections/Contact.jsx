import './Contact.css'
export default function Contact() {
    return (
        <section id="contact" className=" py-5">
            <div className="container">
                <h2 className="text-center mb-4">Hire Me</h2>
                <form className="mx-auto" style={{ maxWidth: '500px' }}>
                    <input className="form-control mb-3" placeholder="Your Name" />
                    <input className="form-control mb-3" placeholder="Your Email" />
                    <textarea className="form-control mb-3" rows="4" placeholder="Message"></textarea>
                    <button className="btn btn-info w-100">Send</button>
                </form>
            </div>

        </section>
    );
}