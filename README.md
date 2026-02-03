# Landing Portfolio Page

A modern, responsive **Landing Portfolio Page** built with **React** and **Bootstrap**, designed to showcase personal projects, services, blog posts, and contact information in a professional way.

## About
This project is a **single-page portfolio landing website** built with React. It includes multiple sections to showcase your personal brand, skills, work, blog posts, and contact details. The design is fully **responsive** and **modern**, using smooth scroll animations for a better user experience. The page structure includes:

- **Hero**: Introduction with call-to-action  
- **About**: Biography and skills  
- **Services**: Offered services or expertise  
- **Portfolio**: Showcase of projects with images and descriptions  
- **Blog**: Featured posts or updates  
- **Contact**: Form to reach out  
- **Navbar**: For navigation  
- **Footer**: Additional information  

## Preview

Here is a preview of the portfolio landing page UI:

![Portfolio UI](public/Landing%20Page.jpg)

## Features
- Fully responsive layout (mobile, tablet, desktop)  
- Smooth scroll animations using **Animate.css** (or custom animations)  
- Modular React sections for easy customization  
- Ready for deployment as a **PWA** (Progressive Web App)  
- Easy to update content, images, colors, and fonts  

## Technologies
- **React** – Front-end framework  
- **Bootstrap 5** – Responsive layout and styling  
- **React Router** – Optional for routing  
- **Animate.css or custom animations** – For smooth effects  
- **Custom CSS/SCSS** – For styling sections and theme  

## Folder Structure

├── public/
│ ├── favicon.ico
│ ├── manifest.json
│ ├── screenshot.png
│ └── index.html
├── src/
│ ├── sections/
│ │ ├── Hero/
│ │ ├── About/
│ │ ├── Services/
│ │ ├── Portfolio/
│ │ ├── Blog/
│ │ └── Contact/
│ ├── components/
│ ├── App.jsx
│ ├── pages/Home.jsx
│ ├── assets/
│ └── index.js
├── package.json
└── README.md
## Prerequisites:
- **Node.js** (v24 or above)
- **npm** (v11 or above)
## Installation
1. Clone the repository:
```bash
git clone https://github.com/RoQaa/Pte-Task.git
```
2. Install dependencies:
```bash
cd portfolio-landing
npm install
```
3. Run the project locally:
```bash
npm start
```
- Open http://localhost:3000 in your browser

## Usage
- All content is modular in `src/pages/` Example structure in  `Home.jsx`:
```bash
import Hero from "../sections/Hero/Hero.jsx";
import About from "../sections/About/About.jsx";
import Services from "../sections/Services/Services.jsx";
import Portfolio from "../sections/Portfolio/Portfolio.jsx";
import Blog from "../sections/Blog/Blog.jsx";
import Contact from "../sections/Contact/Contact.jsx";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Blog />
            <Contact />
        </>
    );
}
```
- `App.jsx` wraps `<Home />` with Navbar and Footer.
- Replace images in `src/assets` and edit content in each section to customize your portfolio.
##  Customization
- **Navbar / Footer**: Modify in `src/components`
- **Hero Section**: Update text, CTA buttons, or background images in `Hero.jsx`
- **Portfolio / Blog**: Replace placeholder projects/posts with your own content
- Theme colors & fonts: Edit **CSS** or **SCSS** files to match your style
## Deployment
- Build the project:
```bash
npm run build
```
- Upload the contents of `build/` to your server.
- Ensure your server serves `index.html` for all URLs if using React Router.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
