import { motion } from 'framer-motion';
import heroImg01 from '../assets/images/travel/hero-img-1.jpg';
import heroImg02 from '../assets/images/travel/hero-img-2.jpg';
import heroVideo from '../assets/images/travel/hero-video.mp4';
import { FaMapMarkerAlt, FaMapPin, FaUserFriends, FaSearch } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero-section overflow-hidden bg-white">
            <div className="container">
                <div className="row align-items-center gy-5">
                    {/* ─── Left: Text Content ─── */}
                    <motion.div
                        className="col-lg-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-primary-light text-primary d-inline-flex align-items-center px-4 py-2 rounded-pill mb-4 small fw-bold">
                            <span className="me-2">🌎</span> Know Before You Go
                        </div>
                        <h1 className="hero-title fw-bold text-dark mb-4 lh-tight font-playfair">
                            Explore the <span className="text-primary italic">Beautiful</span> World
                            <br className="d-none d-md-block" /> and make Memories.
                        </h1>
                        <p className="text-muted mb-5 fs-6 lh-lg">
                            Traveling opens the door to creating memories. Beyond just a destination,
                            it's an experience that transforms your perspective on life.
                        </p>

                        {/* Search bar */}
                        <div className="search-container mt-4">
                            <div className="d-flex align-items-center flex-grow-1 px-3 py-1 w-100">
                                <FaMapMarkerAlt className="text-primary me-3 flex-shrink-0" />
                                <div className="flex-grow-1 overflow-hidden">
                                    <label className="d-block small fw-bold text-dark mb-0">Location</label>
                                    <input type="text" placeholder="Where to?" className="form-control border-0 p-0 shadow-none small bg-transparent w-100" />
                                </div>
                            </div>
                            <div className="d-none d-md-flex align-items-center flex-grow-1 px-3 py-1 border-start border-end border-light w-100">
                                <FaMapPin className="text-primary me-3 flex-shrink-0" />
                                <div className="flex-grow-1 overflow-hidden">
                                    <label className="d-block small fw-bold text-dark mb-0">Distance</label>
                                    <input type="text" placeholder="km" className="form-control border-0 p-0 shadow-none small bg-transparent w-100" />
                                </div>
                            </div>
                            <div className="d-none d-md-flex align-items-center flex-grow-1 px-3 py-1 w-100">
                                <FaUserFriends className="text-primary me-3 flex-shrink-0" />
                                <div className="flex-grow-1 overflow-hidden">
                                    <label className="d-block small fw-bold text-dark mb-0">Guests</label>
                                    <input type="number" placeholder="0" className="form-control border-0 p-0 shadow-none small bg-transparent w-100" />
                                </div>
                            </div>
                            <button className="btn btn-primary-custom p-0 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 search-btn mt-2 mt-md-0">
                                <FaSearch size={18} />
                            </button>
                        </div>
                    </motion.div>

                    {/* ─── Right: Image Gallery ─── */}
                    <div className="col-lg-6">
                        <div className="hero-gallery">
                            <motion.div
                                className="hero-img-box hero-img-box--1 rounded-4 overflow-hidden shadow-lg"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img src={heroImg01} alt="Travel destination 1" className="w-100 h-100 object-fit-cover" />
                            </motion.div>
                            <motion.div
                                className="hero-img-box hero-img-box--2 rounded-4 overflow-hidden shadow-lg"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <video autoPlay loop muted playsInline className="w-100 h-100 object-fit-cover">
                                    <source src={heroVideo} type="video/mp4" />
                                </video>
                            </motion.div>
                            <motion.div
                                className="hero-img-box hero-img-box--3 rounded-4 overflow-hidden shadow-lg"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <img src={heroImg02} alt="Travel destination 2" className="w-100 h-100 object-fit-cover" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
