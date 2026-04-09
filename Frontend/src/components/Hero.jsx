import { motion } from 'framer-motion';
import heroImg01 from '../assets/images/travel/hero-img-1.jpg';
import heroImg02 from '../assets/images/travel/hero-img-2.jpg';
import heroVideo from '../assets/images/travel/hero-video.mp4';
import { FaMapMarkerAlt, FaMapPin, FaUserFriends, FaSearch } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="section-padding overflow-hidden bg-white">
            <div className="container pt-5">
                <div className="row align-items-center gy-5">
                    <motion.div 
                        className="col-lg-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-primary-light text-primary d-inline-flex align-items-center px-4 py-2 rounded-pill mb-4 small fw-bold">
                            <span className="me-2">🌎</span> Know Before You Go
                        </div>
                        <h1 className="display-3 fw-bold text-dark mb-4 lh-tight font-playfair">
                            Explore the <span className="text-primary italic">Beautiful</span> World <br /> and make Memories.
                        </h1>
                        <p className="text-muted mb-5 lead fs-6 w-lg-75">
                            Traveling opens the door to creating memories. Beyond just a destination, 
                            it's an experience that transforms your perspective on life.
                        </p>

                        <div className="search-container mt-4">
                            <div className="d-flex align-items-center flex-grow-1 px-3 border-end border-light">
                                <FaMapMarkerAlt className="text-primary me-3" />
                                <div className="flex-grow-1">
                                    <label className="d-block small fw-bold text-dark mb-0">Location</label>
                                    <input type="text" placeholder="Where to?" className="form-control border-0 p-0 shadow-none small bg-transparent" />
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-grow-1 px-3 border-end border-light d-none d-md-flex">
                                <FaMapPin className="text-primary me-3" />
                                <div className="flex-grow-1">
                                    <label className="d-block small fw-bold text-dark mb-0">Distance</label>
                                    <input type="text" placeholder="km" className="form-control border-0 p-0 shadow-none small bg-transparent" />
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-grow-1 px-3 d-none d-md-flex">
                                <FaUserFriends className="text-primary me-3" />
                                <div className="flex-grow-1">
                                    <label className="d-block small fw-bold text-dark mb-0">Guests</label>
                                    <input type="number" placeholder="0" className="form-control border-0 p-0 shadow-none small bg-transparent" />
                                </div>
                            </div>
                            <button className="btn btn-primary-custom p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                                <FaSearch size={20} />
                            </button>
                        </div>
                    </motion.div>

                    <div className="col-lg-6">
                        <div className="hero-gallery d-flex gap-3 justify-content-lg-end justify-content-center flex-wrap flex-sm-nowrap">
                            <motion.div 
                                className="hero-img-box rounded-4 overflow-hidden border border-white border-4 shadow-lg"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img src={heroImg01} alt="" className="w-100 h-100 object-fit-cover" />
                            </motion.div>
                            <motion.div 
                                className="hero-img-box hero-img-box--mid rounded-4 overflow-hidden border border-white border-4 shadow-lg"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <video autoPlay loop muted playsInline className="w-100 h-100 object-fit-cover">
                                    <source src={heroVideo} type="video/mp4" />
                                </video>
                            </motion.div>
                            <motion.div 
                                className="hero-img-box hero-img-box--last rounded-4 overflow-hidden border border-white border-4 shadow-lg d-none d-sm-block"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <img src={heroImg02} alt="" className="w-100 h-100 object-fit-cover" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
