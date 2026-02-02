export default function Portfolio() {
    return (
        <section id="portfolio" className="bg-dark py-5">
            <div className="container">
                <h2 className="text-center text-white mb-5">Featured Works</h2>
                <div className="row g-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="col-md-4 col-sm-6">
                            <div className="bg-secondary rounded" style={{ height: '180px' }}>Work Image</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}