import maleTourist from '../assets/images/travel/male-tourist-1.svg';
import { motion } from 'framer-motion';

const Subscribe = () => {
    return (
        <section className="bg-primary-light pt-5 pb-0 overflow-hidden">
            <div className="container">
                <div className="row align-items-center gy-5">
                    <motion.div 
                        className="col-lg-6 mb-lg-5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="display-4 fw-bold mb-4 font-playfair lh-sm text-dark">
                            Subscribe now for <span className="text-primary italic">travel tips</span> & news
                        </h2>
                        <p className="text-muted mb-5 fs-6 lh-lg pe-lg-5">
                            Join our community of over 50,000+ travelers. Get exclusive discounts, 
                            local tips, and inspiring stories delivered straight to your inbox.
                        </p>
                        <div className="bg-white p-2 rounded-4 shadow-lg d-flex align-items-center mb-2" style={{ maxWidth: '500px' }}>
                            <input 
                                type="email" 
                                className="form-control border-0 bg-transparent shadow-none px-4" 
                                placeholder="Your email address" 
                            />
                            <button className="btn btn-primary-custom px-4 py-3 rounded-3 fw-bold">Subscribe</button>
                        </div>
                        <p className="text-muted small mt-3">We respect your privacy. Unsubscribe at any time.</p>
                    </motion.div>
                    <motion.div 
                        className="col-lg-6 text-center text-lg-end pt-5 pt-lg-0"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img 
                            src={maleTourist} 
                            alt="Tourist" 
                            className="img-fluid" 
                            style={{ maxHeight: '480px' }}
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/450x450?text=Tourist" }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;

