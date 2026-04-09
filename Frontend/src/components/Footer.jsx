import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaYoutube, FaPinterest } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logoImg from '../assets/images/Logo/logo-1.png';

const Footer = () => {
    return (
        <footer className="bg-white pt-5 pb-4 border-top">
            <div className="container">
                <div className="row g-4 mb-5">
                    <div className="col-lg-4 col-md-6">
                        <Link to="/" className="d-inline-block mb-4">
                            <img src={logoImg} alt="TravelWorld" height="40" />
                        </Link>
                        <p className="text-muted small lh-lg mb-4 pe-lg-5">
                            We are a leading travel agency dedicated to providing unforgettable experiences 
                            and quality services. Explore the world with confidence and comfort.
                        </p>
                        <div className="d-flex gap-3">
                            {[FaYoutube, FaTwitter, FaFacebookF, FaInstagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="bg-primary text-white p-2 rounded-circle d-flex align-items-center justify-content-center hover-lift" style={{ width: '36px', height: '36px', textDecoration: 'none' }}>
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 ps-lg-4">
                        <h6 className="fw-bold text-dark mb-4">Discover</h6>
                        <ul className="list-unstyled">
                            {['Home', 'About', 'Tours', 'Destinations'].map(link => (
                                <li key={link} className="mb-3">
                                    <Link to={`/${link.toLowerCase()}`} className="text-muted small text-decoration-none hover-text-primary">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 ps-lg-4">
                        <h6 className="fw-bold text-dark mb-4">Quick Links</h6>
                        <ul className="list-unstyled">
                            {['Gallery', 'Login', 'Register', 'Booking'].map(link => (
                                <li key={link} className="mb-3">
                                    <Link to={`/${link.toLowerCase()}`} className="text-muted small text-decoration-none hover-text-primary">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <h6 className="fw-bold text-dark mb-4">Contact Info</h6>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-start small">
                                <FaMapMarkerAlt className="text-primary mt-1 me-3" />
                                <span className="text-muted">123 Street Name, City, Country</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center small">
                                <FaEnvelope className="text-primary me-3" />
                                <span className="text-muted">contact@travelworld.com</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center small">
                                <FaPhoneAlt className="text-primary me-3" />
                                <span className="text-muted">+1 234 567 890</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-4 border-top text-center">
                    <p className="text-muted small mb-0">
                        © {new Date().getFullYear()} <span className="text-primary fw-bold">TravelWorld.</span> All rights reserved. 
                        Designed with ❤️ for travelers.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

