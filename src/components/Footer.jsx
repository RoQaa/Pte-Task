import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section py-4">
      <div className="container text-center">

        <div className="social-icons mb-3">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-behance"></i></a>
          <a href="#"><i className="bi bi-dribbble"></i></a>
          <a href="#"><i className="bi bi-github"></i></a>
        </div>

        <p className="mb-0 small">
          <span className="copyRight">© MAGG.</span> All rights reserved
        </p>

      </div>
    </footer>
  );
}
