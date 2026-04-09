import { useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import Skeleton from '../components/Skeleton';
import { FaMapMarkerAlt, FaStar, FaUserFriends, FaRegClock, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TourDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
    
    const [booking, setBooking] = useState({
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const handleChange = (e) => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        
        if(!user || user === undefined || user === null) {
            alert('Please sign in to book a tour');
            return navigate('/login');
        }

        try {
            const res = await fetch(`${BASE_URL}/booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    ...booking,
                    userId: user._id,
                    userEmail: user.email,
                    tourName: tour.title
                })
            });

            const result = await res.json();
            if(!res.ok) return alert(result.message);

            alert('Tour Booked Successfully!');
            navigate('/');
        } catch (err) {
            alert(err.message);
        }
    };

    if (loading) return (
        <div className="container py-5 mt-5">
            <div className="row g-5">
                <div className="col-lg-8">
                    <Skeleton type="card" />
                    <div className="mt-4"><Skeleton type="text" /></div>
                </div>
                <div className="col-lg-4">
                    <Skeleton type="card" />
                </div>
            </div>
        </div>
    );

    if (error) return <div className="container py-5 mt-5 text-center"><h3 className="text-danger">{error}</h3></div>;
    if (!tour) return null;

    return (
        <div className="tour-details-page bg-light min-vh-100 pb-5">
            {/* Header Section */}
            <section className="position-relative">
                <div 
                    className="w-100" 
                    style={{ 
                        height: '500px', 
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${tour.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>
                <div className="position-absolute bottom-0 start-0 w-100 p-5 text-white">
                    <div className="container">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">Featured Destination</span>
                            <h1 className="display-3 fw-bold font-playfair mb-3">{tour.title}</h1>
                            <div className="d-flex align-items-center gap-4 flex-wrap">
                                <span className="d-flex align-items-center gap-2"><FaMapMarkerAlt className="text-primary" /> {tour.location}</span>
                                <span className="d-flex align-items-center gap-2"><FaStar className="text-warning" /> {tour.rating || '5.0'} (24 Reviews)</span>
                                <span className="d-flex align-items-center gap-2"><FaUserFriends /> Max {tour.maxGroupSize || 10} People</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container mt-5">
                <div className="row g-5">
                    {/* Main Content */}
                    <div className="col-lg-8">
                        <motion.div 
                            className="bg-white p-5 rounded-4 shadow-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h3 className="fw-bold font-playfair mb-4">Description</h3>
                            <p className="text-muted lh-lg mb-5">
                                {tour.desc || "Experience the beauty and culture of this amazing destination. Our carefully curated tour ensures you see the best sights while enjoying comfortable accommodations and expert guidance throughout your journey."}
                            </p>

                            <h3 className="fw-bold font-playfair mb-4">Highlights</h3>
                            <div className="row g-4 mb-5">
                                {[
                                    "Professional expert guide",
                                    "All entrance fees included",
                                    "Luxury transportation",
                                    "Photography assistance",
                                    "Complimentary bottled water",
                                    "Small group experience"
                                ].map((item, i) => (
                                    <div className="col-md-6" key={i}>
                                        <div className="d-flex align-items-center gap-3">
                                            <FaCheckCircle className="text-success" />
                                            <span className="text-dark fw-medium small">{item}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <hr className="my-5 border-light" />

                            <h3 className="fw-bold font-playfair mb-4">Reviews (2)</h3>
                            <div className="reviews-section">
                                <div className="d-flex gap-3 mb-4 p-4 bg-light rounded-4">
                                    <div className="flex-shrink-0">
                                        <img src="https://ui-avatars.com/api/?name=Sam+Altman" className="rounded-circle" width="50" height="50" alt="" />
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <h6 className="fw-bold mb-1">Sam Altman</h6>
                                            <span className="small text-muted">2 days ago</span>
                                        </div>
                                        <div className="text-warning small mb-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                                        <p className="text-muted small mb-0">Absolutely breathtaking experience. Everything was seamless!</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar Booking */}
                    <div className="col-lg-4">
                        <div className="sticky-top" style={{ top: '100px' }}>
                            <motion.div 
                                className="card border-0 shadow-lg rounded-4 overflow-hidden"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className="bg-primary text-white p-4">
                                    <h4 className="fw-bold mb-0">${tour.price} <small className="fw-normal fs-6">/ per person</small></h4>
                                </div>
                                <div className="p-4 bg-white">
                                    <h5 className="fw-bold mb-4">Book Your Trip</h5>
                                    <form onSubmit={handleBooking}>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold">Full Name</label>
                                            <div className="input-group">
                                                <input type="text" id="fullName" className="form-control bg-light border-0 py-3 small shadow-none" placeholder="Enter your name" required onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold">Phone Number</label>
                                            <input type="tel" id="phone" className="form-control bg-light border-0 py-3 small shadow-none" placeholder="+1 234..." required onChange={handleChange} />
                                        </div>
                                        <div className="row">
                                            <div className="col-6 mb-3">
                                                <label className="form-label small fw-bold">Date</label>
                                                <input type="date" id="bookAt" className="form-control bg-light border-0 py-3 small shadow-none" required onChange={handleChange} />
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label className="form-label small fw-bold">Guests</label>
                                                <input type="number" id="guestSize" min="1" className="form-control bg-light border-0 py-3 small shadow-none" placeholder="1" required onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="p-3 bg-light rounded-3 mb-4">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="small text-muted">${tour.price} x {booking.guestSize || 1} person</span>
                                                <span className="small fw-bold">${tour.price * (booking.guestSize || 1)}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="small text-muted">Service charge</span>
                                                <span className="small fw-bold">$10</span>
                                            </div>
                                            <div className="d-flex justify-content-between pt-2 border-top">
                                                <h6 className="fw-bold mb-0">Total</h6>
                                                <h6 className="fw-bold text-primary mb-0">${(tour.price * (booking.guestSize || 1)) + 10}</h6>
                                            </div>
                                        </div>

                                        <button className="btn btn-primary-custom w-100 py-3 fw-bold shadow-lg">Confirm Booking</button>
                                    </form>
                                    <p className="text-muted small text-center mt-3 mb-0">You won't be charged yet</p>
                                </div>
                            </motion.div>

                            <div className="mt-4 p-4 bg-white rounded-4 shadow-sm border-0 d-flex align-items-center gap-3">
                                <div className="bg-primary-light text-primary rounded-circle p-3">
                                    <FaRegClock size={24} />
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-0">Best Rate Guaranteed</h6>
                                    <p className="text-muted small mb-0">Find it cheaper? We'll match it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;
