import React, { useState, useRef } from "react";
import { FaShoppingCart, FaWrench, FaYoutube, FaGamepad, FaGithub, FaLinkedinIn, FaTwitter, FaDribbble } from "react-icons/fa";
import { GiSpiralBottle, GiClothes } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import emailjs from "@emailjs/browser";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w4ym21o",
        "template_z4v9xeq",
        form.current,
        "iBOcl7pNFCvGyrtUC"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Oops, something went wrong.", error.text);
        }
      );
  };

  const smallProjects = [
    {
      id: 1,
      title: "E-commerce website",
      description:
        "A clean, responsive e-commerce website that showcases modern styles and collections for any season.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: <FaShoppingCart />,
      link: "https://treatevlar.github.io/TreatEvlar/",
    },
    {
      id: 2,
      title: "Organic serum website",
      description:
        "A modern website for an organic serum product, showcasing its benefits and usage.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: <GiSpiralBottle />,
      link: "https://treatevlar.github.io/Nector/",
    },
    {
      id: 3,
      title: "Car Service Website",
      description:
        "A car service website that allows users to book appointments and manage their vehicle services.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: <FaWrench />,
      link: "https://treatevlar.github.io/car-service-website/",
    },
    {
      id: 4,
      title: "Room Cleaning Service",
      description:
        "A room cleaning service website that allows users to book cleaning appointments and manage their services.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: <MdCleaningServices />,
      link: "https://treatevlar.github.io/TechWeb/",
    },
    {
      id: 5,
      title: "Youtube clone",
      description:
        "A clone of the popular video-sharing platform with user authentication and video uploads.",
      technologies: ["React", "TailwindCSS", "JavaScript"],
      icon: <FaYoutube />,
      link: "https://youtube-clone-keqm.onrender.com",
    },
    {
      id: 6,
      title: "Clothing Website",
      description:
        "A modern e-commerce website for showcasing clothing products.",
      technologies: ["React", "TailwindCSS", "JavaScript"],
      icon: <GiClothes />,
      link: "https://clothing-website-eqko.onrender.com",
    },
    {
      id: 7,
      title: "Gaming Website",
      description:
        "A platform for gamers to find and share their favorite games.",
      technologies: ["React", "TailwindCSS", "JavaScript"],
      icon: <FaGamepad />,
      link: "https://faits-diarmes.onrender.com",
    },
    {
      id: 8,
      title: "Marketing Website",
      description: "marketing website for a digital marketing agency",
      technologies: ["React", "TailwindCSS", "JavaScript"],
      icon: <SiCoinmarketcap />,
      link: "https://george-lambert.onrender.com",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with shopping cart, user authentication, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: "fas fa-shopping-cart",
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks with drag-and-drop functionality.",
      technologies: ["React", "Redux", "Firebase", "Tailwind CSS"],
      icon: "fas fa-tasks",
      link: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with forecasts and location-based recommendations.",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      icon: "fas fa-cloud-sun",
      link: "#",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization.",
      technologies: ["React", "D3.js", "Express", "MySQL"],
      icon: "fas fa-chart-line",
      link: "#",
    },
  ];

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 70 },
    { name: "Python", level: 65 },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`nav-link ${
                  activeSection === "home" ? "text-indigo-600" : "text-gray-700"
                } hover:text-indigo-600`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`nav-link ${
                  activeSection === "about"
                    ? "text-indigo-600"
                    : "text-gray-700"
                } hover:text-indigo-600`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`nav-link ${
                  activeSection === "projects"
                    ? "text-indigo-600"
                    : "text-gray-700"
                } hover:text-indigo-600`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`nav-link ${
                  activeSection === "skills"
                    ? "text-indigo-600"
                    : "text-gray-700"
                } hover:text-indigo-600`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`nav-link ${
                  activeSection === "contact"
                    ? "text-indigo-600"
                    : "text-gray-700"
                } hover:text-indigo-600`}
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 w-full text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="gradient-bg pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-xl overflow-hidden">
              <img
                src="http://images.shiksha.com/mediadata/images/articles/1700477231phpSM3D9W.jpeg"
                alt="Profile"
                class="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kuldeep Kumar
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8">
              Web Developer & UI/UX Designer
            </p>
            <p className="max-w-2xl mx-auto text-indigo-200 mb-10">
              I create beautiful, functional websites and applications with a
              focus on user experience and clean code.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-700 transition duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-xl overflow-hidden">
                <img
                  src="http://images.shiksha.com/mediadata/images/articles/1700477231phpSM3D9W.jpeg"
                  alt="Profile"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="text-lg text-gray-600 mb-6">
                Hello! I'm Kuldeep, a passionate Web developer with over 1 years
                of experience in web development. I specialize in creating
                responsive, user-friendly websites and applications using modern
                technologies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My journey in web development started during college, and I've
                been hooked ever since. I enjoy turning complex problems into
                simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg text-gray-600">
                When I'm not coding, you can find me hiking, reading tech blogs,
                or experimenting with new programming languages.
              </p>
              <div className="mt-8">
                <a
                  href="../public/Kuldeep Kumar.pdf"
                  download="Kuldeep Kumar.pdf"
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 inline-flex items-center"
                >
                  <i className="fas fa-download mr-2"></i> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            My Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents different skills and technologies I've mastered.
          </p>

          {/* Small Projects Section */}
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Small Projects & Utilities
            </h3>

            {/* Changed grid classes for 2 columns on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {smallProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-full flex flex-col"
                >
                  <div className="p-4 sm:p-6 flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 p-2">
                        {project.icon}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-4 sm:px-6 pb-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-medium hover:text-indigo-700 text-sm inline-flex items-center transition-colors duration-300"
                    >
                      View Project <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Projects Section */}
          <div className="mb-16 mt-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Major Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="project-card bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="p-6">
                    <div className="text-indigo-600 text-3xl mb-4">
                      <i className={project.icon}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center"
                    >
                      View Project <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            My Skills
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            I've worked with a variety of technologies and tools. Here's a
            snapshot of my technical proficiencies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800">
                    {skill.name}
                  </span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-indigo-100 mb-12 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="md:w-1/2 text-white">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="flex items-start mb-4">
                  <i className="fas fa-envelope text-indigo-200 text-xl mr-4 mt-1"></i>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-indigo-100">
                      kuldeepkumarkumar1987@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <i className="fas fa-phone text-indigo-200 text-xl mr-4 mt-1"></i>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-indigo-100">+91 991-020-0151</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-indigo-200 text-xl mr-4 mt-1"></i>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-indigo-100">
                      1/199, Trilokpuri , 199, Subhash Market, Block 1, Part 1,
                      Trilokpuri, Delhi, 110091, India
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/treatevlar"
                    className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center hover:bg-indigo-100 transition duration-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/feed/?trk=sem-ga_campid.22935434840_asid._crid._kw._d.c_tid._n.x_mt._geo.9302611"
                    className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center hover:bg-indigo-100 transition duration-300"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://x.com/home?lang=en"
                    className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center hover:bg-indigo-100 transition duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://dribbble.com/"
                    className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center hover:bg-indigo-100 transition duration-300"
                  >
                    <FaDribbble />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Kuldeep Kumar. All rights
            reserved.
          </p>
          <p className="mt-2 text-gray-400">
            Designed and built with React and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
