export default function Blog() {
    return (
        <section id="blog" className="container py-5">
            <h2 className="text-center mb-4">Hire Me</h2>
            <form className="mx-auto" style={{ maxWidth: '500px' }}>
                <input className="form-control mb-3" placeholder="Your Name" />
                <input className="form-control mb-3" placeholder="Your Email" />
                <textarea className="form-control mb-3" rows="4" placeholder="Message"></textarea>
                <button className="btn btn-info w-100">Send</button>
            </form>
        </section>
    );
}