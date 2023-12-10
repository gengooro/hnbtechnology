import "./App.css";
import Logo from "./assets/logo/logo.jpeg";
import HeroImg from "./assets/images/hero-img.svg";
import { useRef } from "react";

const App = () => {
  const homesection = useRef();
  const aboutsection = useRef();
  const contactsection = useRef();

  const scrollHnlder = (element) => {
    window.scrollTo({ top: element.current.offsetTop, behavior: "smooth" });
  };

  return (
    <div className="thecontainer">
      <section
        ref={homesection}
        id="home"
        className="homepage-bg selection:bg-yellow-100 selection:text-black w-screen h-screen"
      >
        <div className="homepage w-screen h-full flex gap-5 flex-col">
          <div className="navbar-wrapper pt-4 absolute top-4 w-full">
            <div className="navbar flex justify-between items-center text-black">
              <h3 className="text-2xl font-bold">DH TECHNOLOGY</h3>
              <div className="link-wrapper">
                <ul className="flex gap-3 text-xl font-semibold">
                  <li
                    onClick={() => scrollHnlder(homesection)}
                    className="transition-all ease-in-out rounded-xl px-6 py-4 cursor-pointer hover:bg-cyan-200 active-nav"
                  >
                    Home
                  </li>
                  <li
                    onClick={() => scrollHnlder(aboutsection)}
                    className="transition-all ease-in-out rounded-xl px-6 py-4 cursor-pointer hover:bg-cyan-200"
                  >
                    Services
                  </li>
                  <li
                    onClick={() => scrollHnlder(contactsection)}
                    className="transition-all ease-in-out rounded-xl px-6 py-4 cursor-pointer hover:bg-cyan-200"
                  >
                    About
                  </li>
                  <li className="transition-all ease-in-out rounded-xl px-6 py-4 cursor-pointer hover:bg-cyan-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hero w-full min-h-full flex justify-center items-center">
            <div className="hero-left flex flex-col items-center gap-6">
              <p>
                HNB Technology is able to handle different networks from the
                view of planning and services, to capture all current
                communications systems or future wired or wireless, including
                telephony, internet , wireless communications systems to short /
                long range, wired communications and security networks and
                computers. Weknow from our foundation for happy growth. Ready to
                put IT at the service of our customers, we ensure the progress
                of our customers by offering radical services and recruiting
                qualified professionals to meet the needs of our ever growing
                and diverse customer base.
              </p>
              <div className="hero-button">
                <button>CONTACT US</button>
              </div>
            </div>
            <div className="hero-right">
              <img src={HeroImg} alt="hero-img" />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={aboutsection}
        id="about"
        className="aboutpage selection:bg-yellow-100  selection:text-black text-black h-screen py-18"
      >
        <div className="aboutpage-body h-full flex flex-col items-center justify-evenly">
          <div className="about-heading flex-shrink">
            <h1>ABOUT US</h1>
          </div>
          <div className="about-description">
            <p>
              HNB Technology is an independent reseller and expert in supplying
              networking hardware from manufacturers like, Cisco, HP, IBM,
              Lenovo, Oracle, Juniper, etc. Our team of committed professionals
              that offers its capability to provide solutions and comprehensive
              services in information and communications technology to support
              you to achieve your goals .
            </p>
          </div>
          <div className="about-strategies">
            <div className="strategy">
              <p>
                Commitment to our customers through the provision of sufficient
                services and solutions to needs.
              </p>
            </div>
            <div className="strategy">
              <p>
                Excellence our experts who share a passion for new technologies.
              </p>
            </div>
            <div className="strategy">
              <p>
                Ethics developing with our customers lasting relationships based
                on mutual trust and intellectual honesty.
              </p>
            </div>
            <div className="strategy">
              <p>The quality of our solutions and our services.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={contactsection}
        id="contact"
        className="contactpage-bg selection:bg-purple-500 selection:text-white w-screen text-white"
      >
        <div className="contactpage w-full h-full py-2 flex flex-col justify-evenly items-center">
          <div className="contact-heading">
            <h1>CONTACT PAGE</h1>
          </div>
          <div className="contact-map flex-grow w-full">
            <iframe
              title="Example Iframe"
              width="100%"
              height="400"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.48117813663785!2d73.19879510066136!3d19.20835137678243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7939dec4531a5%3A0xef454edbf5b8f310!2sHNB%20Technology!5e0!3m2!1sen!2sin!4v1702133325027!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
          <div className="contact-details w-full flex-grow">
            <div className="contact-form w-full flex justify-evenly items-center">
              <div className="contact-types flex flex-col items-center">
                <img src={Logo} />
                <div className="address">
                  <h1>‘’Simply meet expectations’’</h1>
                </div>
              </div>
              <div className="contact-types flex flex-col items-start">
                <div className="address">
                  <address>
                    4/B, 406, Matoshree Complex, Wimco Naka,
                    <br />
                    Ambernath (West)-421505, India
                  </address>
                </div>
                <div className="online">
                  <h3>
                    Email:{" "}
                    <a
                      href="mailto:sales@hnbtechnology.com"
                      className="hover:text-purple-900"
                    >
                      sales@hnbtechnology.com
                    </a>
                  </h3>
                  <h3>
                    Phone:{" "}
                    <a
                      href="tel:+919320162163"
                      className="hover:text-purple-900"
                    >
                      +91 9320162163
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
