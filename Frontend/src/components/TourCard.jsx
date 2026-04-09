import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const TourCard = ({ tour }) => {
    return (
        <div className="card tour-card border-0 hover-lift h-100">
            <div className="tour-img">
                <img 
                    src={tour.image} 
                    alt={tour.title} 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x300?text=Tour" }}
                />
                {tour.featured && <span className="featured-badge">Featured</span>}
                <div className="tour-location-badge glass-morphism position-absolute bottom-0 start-0 m-3 px-3 py-1 rounded-pill small fw-bold text-dark">
                    <FaMapMarkerAlt className="text-primary me-1" /> {tour.location}
                </div>
            </div>
            <div className="card-body px-4 py-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < Math.floor(tour.rating || 5) ? "text-warning" : "text-muted opacity-25"} size={12} />
                        ))}
                        <span className="ms-1 small text-muted">({tour.rating || '5.0'})</span>
                    </div>
                </div>
                <h5 className="card-title fw-bold mb-3 font-playfair fs-4">{tour.title}</h5>
                <p className="card-text text-muted small mb-4 line-clamp-2">{tour.desc || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}</p>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                    <div>
                        <span className="d-block small text-muted mb-n1">From</span>
                        <h4 className="text-primary fw-bold mb-0">${tour.price}</h4>
                    </div>
                    <Link to={`/tours/${tour._id}`} className="btn btn-primary-custom px-4">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
