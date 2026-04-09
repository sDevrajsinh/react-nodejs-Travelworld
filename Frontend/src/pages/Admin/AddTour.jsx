import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';
import { useNavigate } from 'react-router-dom';

const AddTour = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [tourData, setTourData] = useState({
        title: '',
        location: '',
        address: '',
        distance: '',
        image: '',
        desc: '',
        price: '',
        maxGroupSize: '',
        featured: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTourData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user?.role !== 'admin') {
            alert('Only admins can add tours');
            return;
        }

        try {
            const res = await fetch(`${BASE_URL}/tours`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(tourData)
            });

            const result = await res.json();
            if (res.ok) {
                alert('Tour added successfully!');
                navigate('/tours');
            } else {
                alert(result.message);
            }
        } catch (err) {
            alert(err.message);
        }
    };

    if (user?.role !== 'admin') {
        return <div className="container py-5 text-center"><h2>Access Denied</h2><p>You must be an admin to view this page.</p></div>;
    }

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm p-4 rounded-4">
                            <h2 className="fw-bold mb-4">Add New <span className="text-primary">Tour</span></h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6 text-start">
                                        <label className="form-label small fw-bold">Title</label>
                                        <input type="text" name="title" className="form-control" onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6 text-start">
                                        <label className="form-label small fw-bold">Location (Country)</label>
                                        <input type="text" name="location" className="form-control" onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-12 text-start">
                                        <label className="form-label small fw-bold">Address</label>
                                        <input type="text" name="address" className="form-control" onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-4 text-start">
                                        <label className="form-label small fw-bold">Distance (km)</label>
                                        <input type="number" name="distance" className="form-control" onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-4 text-start">
                                        <label className="form-label small fw-bold">Price ($)</label>
                                        <input type="number" name="price" className="form-control" onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-4 text-start">
                                        <label className="form-label small fw-bold">Max Group Size</label>
                                        <input type="number" name="maxGroupSize" className="form-control" onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-12 text-start">
                                        <label className="form-label small fw-bold">Image URL</label>
                                        <input type="text" name="image" className="form-control" onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-12 text-start">
                                        <label className="form-label small fw-bold">Description</label>
                                        <textarea name="desc" className="form-control" rows="4" onChange={handleChange} required></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-check text-start">
                                            <input className="form-check-input" type="checkbox" name="featured" id="featured" onChange={handleChange} />
                                            <label className="form-check-label small fw-bold" htmlFor="featured">
                                                Featured Tour
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <button type="submit" className="btn btn-primary-custom w-100 py-3">Publish Tour</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddTour;
