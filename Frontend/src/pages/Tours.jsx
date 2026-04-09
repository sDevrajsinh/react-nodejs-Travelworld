import { useState } from 'react';
import Subscribe from '../components/Subscribe';
import Skeleton from '../components/Skeleton';
import TourCard from '../components/TourCard';
import { FaMapMarkerAlt, FaMapPin, FaUserFriends, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import toursBgImg from '../assets/images/travel/tours-img-1.png';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const Tours = () => {
    const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours`);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="tours-page">
            <motion.section 
                className="section-padding text-white text-center position-relative d-flex align-items-center justify-content-center" 
                style={{ 
                    minHeight: '400px', 
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${toursBgImg})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
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
                        Explore <span className="text-primary italic">All</span> Tours
                    </motion.h1>
                    <p className="lead fw-medium">Find your next adventure with our expert curated tours.</p>
                </div>
            </motion.section>

            <section className="pb-5 bg-white position-relative">
                <div className="container">
                    {/* Search Bar */}
                    <motion.div 
                        className="search-container mx-auto position-relative z-3 shadow-lg bg-white"
                        style={{ marginTop: '-45px', maxWidth: '900px' }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                         <div className="d-flex align-items-center flex-grow-1 px-3 border-end border-light">
                            <FaMapMarkerAlt className="text-primary me-3 flex-shrink-0" />
                            <div className="flex-grow-1 text-start">
                                <label className="d-block small fw-bold text-dark mb-0">Location</label>
                                <input type="text" placeholder="Where to?" className="form-control border-0 p-0 shadow-none small bg-transparent" />
                            </div>
                        </div>
                        <div className="d-none d-md-flex align-items-center flex-grow-1 px-3 border-end border-light">
                            <FaMapPin className="text-primary me-3 flex-shrink-0" />
                            <div className="flex-grow-1 text-start">
                                <label className="d-block small fw-bold text-dark mb-0">Distance</label>
                                <input type="text" placeholder="km" className="form-control border-0 p-0 shadow-none small bg-transparent" />
                            </div>
                        </div>
                        <div className="d-none d-md-flex align-items-center flex-grow-1 px-3">
                            <FaUserFriends className="text-primary me-3 flex-shrink-0" />
                            <div className="flex-grow-1 text-start">
                                <label className="d-block small fw-bold text-dark mb-0">Guests</label>
                                <input type="number" placeholder="0" className="form-control border-0 p-0 shadow-none small bg-transparent" />
                            </div>
                        </div>
                        <button className="btn btn-primary-custom p-0 rounded-circle d-flex align-items-center justify-content-center search-btn flex-shrink-0 mt-2 mt-md-0">
                            <FaSearch size={20} />
                        </button>
                    </motion.div>

                    <div className="row g-4 pt-5 mt-4">
                        {loading && (
                             [...Array(8)].map((_, i) => (
                                <div className="col-lg-3 col-md-6" key={i}>
                                    <Skeleton type="card" />
                                </div>
                            ))
                        )}
                        {error && <h4 className='text-center pt-5 text-danger'>{error}</h4>}
                        {!loading && !error && tours?.map((tour, idx) => (
                            <motion.div 
                                key={tour._id} 
                                className="col-lg-3 col-md-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <TourCard tour={tour} />
                            </motion.div>
                        ))}
                    </div>

                    {!loading && !error && tours?.length === 0 && (
                        <div className="text-center py-5">
                            <h3 className="text-muted">No tours found.</h3>
                        </div>
                    )}

                    <div className="text-center mt-5">
                        <button className="btn btn-outline-dark rounded-pill px-5 py-3 fw-bold">Load More Destinations</button>
                    </div>
                </div>
            </section>

            <Subscribe />
        </div>
    );
};

export default Tours;

