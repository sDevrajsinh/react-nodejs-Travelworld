import { FaCloudSun, FaMapMarkedAlt, FaCogs } from 'react-icons/fa';
import Subscribe from '../components/Subscribe';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/travel/gallery4.svg';
import bannerBg from '../assets/images/travel/about-img-1.png';

const About = () => {
    return (
        <div className="about-page">
            <motion.section
                className="section-padding text-white text-center position-relative d-flex align-items-center justify-content-center"
                style={{
                    minHeight: '400px',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bannerBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container z-1">
                    <motion.h1
                        className="display-2 fw-bold mb-3 font-playfair"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Our <span className="text-primary italic">Story</span>
                    </motion.h1>
                    <p className="lead fw-medium">Crafting unforgettable journeys since 2010.</p>
                </div>
            </motion.section>

            <section className="section-padding bg-white">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <motion.div
                            className="col-lg-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-primary-light text-primary d-inline-block px-3 py-1 rounded-pill mb-3 small fw-bold">
                                Who We Are
                            </div>
                            <h2 className="display-4 fw-bold text-dark mb-4 lh-base font-playfair">
                                We believe in the power <br /> of <span className="text-primary">exploration</span>
                            </h2>
                            <p className="text-muted mb-4 fs-6 lh-lg pe-lg-5">
                                TravelWorld was born out of a shared passion for discovery. We started as a small group of
                                travel enthusiasts and have grown into a leading travel agency, helping thousands of
                                travelers explore the world's most beautiful destinations.
                            </p>
                            <p className="text-muted mb-5 fs-6 lh-lg pe-lg-5">
                                Our mission is simple: to provide seamless, personalized, and unforgettable travel
                                experiences that connect people with cultures, nature, and themselves.
                            </p>

                            <div className="row g-4">
                                {[
                                    { title: 'Exotic Places', text: 'Handpicked spots outside the usual tracks.' },
                                    { title: 'Global Reach', text: 'Partnerships in over 50 countries.' }
                                ].map((item, idx) => (
                                    <div className="col-md-6" key={idx}>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-primary-light text-primary p-2 rounded-circle">
                                                <FaMapMarkedAlt size={20} />
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-1">{item.title}</h6>
                                                <p className="text-muted small mb-0">{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            className="col-lg-6 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="position-relative d-inline-block">
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-4 rotate-3 z-n1"></div>
                                <img
                                    src={aboutImg}
                                    alt="About Us"
                                    className="img-fluid rounded-4 shadow-lg position-relative"
                                    style={{ maxWidth: '500px' }}
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/600x400?text=About+Us" }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Subscribe />
        </div>
    );
};

export default About;
