import blog1 from "../imgs/blog-1.jpg";
import blog2 from "../imgs/blog-2.jpg";
import blog3 from "../imgs/blog-3.jpg";
import "./Blog.css";
export default function Blog() {
    const blogs = [
        {
            title: "10 Steps to design a pixel perfect logo",
            img: blog1
        },
        {
            title: "How to design a website in Adobe XD or Photoshop",
            img: blog2
        },
        {
            title: "How to convert PSD/Xd to HTML/CSS/Bootstrap",
            img: blog3
        },
    ]

    return (
        <section className="bg-white py-5 container" id="blog">
            <p className="text-center  fs-4">Blog</p>
            <h2 className="text-center mb-5">Featured Posts</h2>
            <div className="row g-0 justify-content-between">
                {
                    blogs.map(blog => [
                        <div className="col-lg-3 col-md-5 col-12">
                            <img src={blog.img} className="w-100" alt="blog"/>
                            <p className=" fs-4 fw-bolder my-2">{blog.title}</p>
                        </div>
                    ])
                }

            </div>
        </section>
    );
}
