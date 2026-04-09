import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Subscribe from '../components/Subscribe';
import Skeleton from '../components/Skeleton';
import TourCard from '../components/TourCard';
import { FaCloudSun, FaMapMarkedAlt, FaCogs, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import experienceImg from '../assets/images/travel/experience-1.svg';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const Home = () => {
    const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

    const services = [
        {
            icon: <FaCloudSun size={24} />,
            title: "Calculate Weather",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icon: <FaMapMarkedAlt size={24} />,
            title: "Best Tour Guide",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icon: <FaCogs size={24} />,
            title: "Customization",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <Hero />
            </motion.div>

            {/* Services Section */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-3">
                            <h5 className="text-primary font-playfair fw-bold mb-2 fs-3 italic">What we serve</h5>
                            <h2 className="display-6 fw-bold text-dark lh-sm font-playfair">We offer our best services</h2>
                        </div>
                        {services.map((srv, idx) => (
                            <motion.div
                                className="col-lg-3 col-md-6"
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-white p-5 rounded-4 border-0 h-100 shadow-sm text-center hover-lift border-bottom border-warning border-4">
                                    <div className="bg-primary-light text-primary d-inline-flex justify-content-center align-items-center rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
                                        {srv.icon}
                                    </div>
                                    <h5 className="fw-bold mb-3 fs-5">{srv.title}</h5>
                                    <p className="text-muted small lh-lg">{srv.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Tours Section */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-5 pb-3">
                        <div className="bg-primary-light text-primary d-inline-block px-4 py-2 rounded-pill mb-3 small fw-bold">
                            Top Destination
                        </div>
                        <h2 className="display-5 fw-bold font-playfair">Explore Our <span className="text-primary">Featured</span> Tours</h2>
                        <p className="text-muted mt-2 mx-auto" style={{ maxWidth: '600px' }}>
                            Handpicked destinations for your next adventure. Join thousands of travelers 
                            and book your dream trip today.
                        </p>
                    </div>

                    <div className="row g-4">
                        {loading && (
                            [...Array(4)].map((_, i) => (
                                <div className="col-lg-3 col-md-6" key={i}>
                                    <Skeleton type="card" />
                                </div>
                            ))
                        )}
                        {error && <h4 className='text-center pt-5 text-danger'>{error}</h4>}
                        {!loading && !error && featuredTours?.map((tour, index) => (
                            <motion.div
                                key={tour._id}
                                className="col-lg-3 col-md-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <TourCard tour={tour} />
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-5">
                        <Link to="/tours" className="btn btn-dark rounded-pill px-5 py-3 fw-bold shadow-lg">View All Tours</Link>
                    </div>
                </div>
            </section>

            <style>{`
                .tour-overlay-card {
                    transition: all 0.4s ease;
                    cursor: pointer;
                }
                .tour-overlay-card:hover {
                    transform: scale(1.02);
                }
                .tour-overlay-card:hover div {
                    background: rgba(0,0,0,0.3) !important;
                }
            `}</style>

            {/* Experience Section */}
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
                                Experience
                            </div>
                            <h2 className="display-4 fw-bold text-dark mb-4 lh-base font-playfair">
                                With our all experience <br /> we will serve you
                            </h2>
                            <p className="text-muted mb-5 fs-6 lh-lg pe-lg-5">
                                We have been craftng memories for over 15 years. Our dedicated team of travel experts 
                                ensures that every journey you take with us is safe, comfortable, and unforgettable.
                            </p>
                            
                            <div className="row g-4 mt-2">
                                {[
                                    { num: '12k+', label: 'Successful Trip' },
                                    { num: '2k+', label: 'Regular Clients' },
                                    { num: '15', label: 'Years Experience' }
                                ].map((item, idx) => (
                                    <div className="col-4" key={idx}>
                                        <div className="p-3 bg-light rounded-4 text-center border-bottom border-primary border-4">
                                            <h3 className="fw-bold text-primary mb-1">{item.num}</h3>
                                            <p className="text-muted small mb-0 fw-medium">{item.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div 
                            className="col-lg-6 position-relative text-center text-lg-end"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-circle blur-3xl" style={{ filter: 'blur(100px)' }}></div>
                            <img
                                src={experienceImg}
                                alt="Experience"
                                className="img-fluid position-relative z-1"
                                style={{ maxWidth: '450px' }}
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/450x450?text=Experience" }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Gallery />
            <Testimonials />
            <Subscribe />
        </>
    );
};

export default Home;
