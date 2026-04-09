import gallery01 from '../assets/images/travel/gallery1.svg';
import gallery02 from '../assets/images/travel/gallery2.svg';
import gallery03 from '../assets/images/travel/gallery3.svg';
import gallery04 from '../assets/images/travel/gallery4.svg';
import gallery05 from '../assets/images/travel/gallery5.svg';
import gallery06 from '../assets/images/travel/gallery6.svg';
import gallery07 from '../assets/images/travel/gallery7.svg';
import { motion } from 'framer-motion';

const Gallery = () => {
    // Array of mock image sources for the masonry gallery
    const images = [
        gallery01,
        gallery02,
        gallery03,
        gallery04,
        gallery05,
        gallery06,
        gallery07,
        gallery02
    ];

    return (
        <motion.section 
            className="py-5 bg-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container">
                <div className="mb-4">
                    <div className="bg-primary-light text-primary d-inline-block px-3 py-1 rounded-pill mb-2 small fw-medium">
                        Gallery
                    </div>
                    <h2 className="display-6 fw-bold">Visit our customers tour gallery</h2>
                </div>

                <style>{`
                    .gallery-masonry {
                        column-count: 4;
                        column-gap: 20px;
                    }
                    .gallery-item {
                        break-inside: avoid;
                        margin-bottom: 20px;
                        border-radius: 12px;
                        overflow: hidden;
                        transition: transform 0.3s;
                    }
                    .gallery-item:hover {
                        transform: scale(1.02);
                    }
                    @media (max-width: 991px) {
                        .gallery-masonry {
                            column-count: 3;
                        }
                    }
                    @media (max-width: 768px) {
                        .gallery-masonry {
                            column-count: 2;
                        }
                    }
                    @media (max-width: 576px) {
                        .gallery-masonry {
                            column-count: 1;
                        }
                    }
                `}</style>
                <div className="gallery-masonry">
                    {images.map((img, index) => (
                        <motion.div 
                            key={index} 
                            className="gallery-item shadow-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: (index % 4) * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <img 
                                src={img} 
                                alt={`Gallery ${index + 1}`} 
                                className="w-100 h-auto"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x400?text=Gallery" }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Gallery;
