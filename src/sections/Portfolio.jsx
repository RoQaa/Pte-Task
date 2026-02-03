import work1 from "../imgs/work-1.jpg";
import work2 from "../imgs/work-2.jpg";
import work3 from "../imgs/work-3.jpg";
import work4 from "../imgs/work-4.jpg";
import work5 from "../imgs/work-5.jpg";
import work6 from "../imgs/work-6.jpg";

import "./Portfolio.css";

export default function Portfolio() {

    const works = [work1, work2, work3, work4, work5, work6];

    return (
        <section className="portfolio-section py-5">
            <div className="container text-center">

                <span className="portfolio-subtitle">Portfolio</span>
                <h2 className="portfolio-title mb-4">Featured Works</h2>

                {/* Filters */}
                <div className="portfolio-filters mb-5">
                    <button className="active fs-3">UI / UX</button>
                    <button className="fs-3">PSD / XD to HTML</button>
                    <button className="fs-3">WordPress</button>
                </div>

                {/* Grid */}
                <div className="row g-0">
                    {works.map((img, index) => (
                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="portfolio-item">
                                <img src={img} alt={`work-${index}`} />
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
