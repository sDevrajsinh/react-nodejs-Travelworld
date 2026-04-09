import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            role: "Customer",
            text: "The trip was amazing! Everything was perfectly organized, and the guides were very knowledgeable. I'll definitely book my next adventure with TravelWorld.",
            image: "https://ui-avatars.com/api/?name=John+Doe&background=ff9c00&color=fff"
        },
        {
            id: 2,
            name: "Lia Franklin",
            role: "Customer",
            text: "Exceptional service and beautiful destinations. The attention to detail in the booking process made the whole experience stress-free and enjoyable.",
            image: "https://ui-avatars.com/api/?name=Lia+Franklin&background=ff9c00&color=fff"
        },
        {
            id: 3,
            name: "Mark Wilson",
            role: "Traveler",
            text: "TravelWorld helped me find the hidden gems I was looking for. Highly recommend for anyone wanting a unique and professional travel experience.",
            image: "https://ui-avatars.com/api/?name=Mark+Wilson&background=ff9c00&color=fff"
        }
    ];

    return (
        <section className="section-padding bg-light">
            <div className="container">
                <motion.div 
                    className="mb-5 text-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-primary-light text-primary d-inline-block px-4 py-2 rounded-pill mb-3 small fw-bold">
                        Fans Love
                    </div>
                    <h2 className="display-5 fw-bold font-playfair">Voices of Our <span className="text-primary italic">Travelers</span></h2>
                </motion.div>

                <div className="row g-4">
                    {reviews.map((review, index) => (
                        <motion.div 
                            className="col-lg-4 col-md-6" 
                            key={review.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white h-100 p-5 rounded-4 shadow-sm border-0 position-relative hover-lift">
                                <FaQuoteLeft className="position-absolute text-primary opacity-10 end-0 bottom-0 m-4" size={60} />
                                <div className="d-flex align-items-center mb-4">
                                    <img 
                                        src={review.image} 
                                        alt={review.name} 
                                        className="rounded-circle me-3 border border-3 border-light" 
                                        width="60" 
                                        height="60"
                                    />
                                    <div>
                                        <h5 className="fw-bold mb-0 fs-6">{review.name}</h5>
                                        <p className="text-primary small mb-0 fw-medium">{review.role}</p>
                                    </div>
                                </div>
                                <p className="text-muted mb-0 fs-6 lh-lg italic">"{review.text}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
