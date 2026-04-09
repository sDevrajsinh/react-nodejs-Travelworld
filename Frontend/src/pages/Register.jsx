import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import registerImg from '../assets/images/travel/login-img.jpg';
import logoImg from '../assets/images/Logo/logo-1.png';

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/config';

const Register = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validate = () => {
        let tempErrors = {};
        if (!credentials.name.trim()) tempErrors.name = "Name is required";

        if (!credentials.email) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(credentials.email)) tempErrors.email = "Email is invalid";

        if (!credentials.password) tempErrors.password = "Password is required";
        else if (credentials.password.length < 6) tempErrors.password = "Password must be at least 6 characters";

        if (credentials.password !== credentials.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const res = await fetch(`${BASE_URL}/auth/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: credentials.name,
                        email: credentials.email,
                        password: credentials.password
                    })
                });

                const result = await res.json();
                if (res.ok) {
                    dispatch({ type: 'REGISTER_SUCCESS' });
                    navigate('/login');
                } else {
                    alert(result.message);
                }
            } catch (err) {
                alert(err.message);
            }
        }
    };

    return (
        <section className="bg-light min-vh-100 d-flex align-items-center py-5">
            <div className="container px-4 px-md-0">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="card border-0 shadow-lg overflow-hidden rounded-4"
                        >
                            <div className="row g-0 flex-md-row-reverse">
                                <div className="col-md-6 d-none d-md-block overflow-hidden bg-primary-light">
                                    <div 
                                        className="h-100 w-100" 
                                        style={{ 
                                            backgroundImage: `url(${registerImg})`, 
                                            backgroundSize: 'cover', 
                                            backgroundPosition: 'center',
                                            minHeight: '600px'
                                        }}
                                    ></div>
                                </div>
                                <div className="col-md-6 p-4 p-lg-5 d-flex flex-column justify-content-center bg-white">
                                    <div className="mb-4">
                                        <Link to="/" className="d-inline-block mb-3">
                                            <img src={logoImg} alt="Logo" height="35" />
                                        </Link>
                                        <h2 className="fw-bold font-playfair fs-2">Create <span className="text-primary italic">Account</span></h2>
                                        <p className="text-muted small fw-medium mt-1">Join us and start planning your next big adventure.</p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className={`form-control p-3 bg-light border-0 rounded-3 shadow-none ${errors.name ? 'is-invalid' : ''}`}
                                                placeholder="John Doe"
                                                value={credentials.name}
                                                onChange={handleChange}
                                            />
                                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className={`form-control p-3 bg-light border-0 rounded-3 shadow-none ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="john@example.com"
                                                value={credentials.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                        <div className="row">
                                            <div className="col-6 mb-3">
                                                <label className="form-label small fw-bold">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className={`form-control p-3 bg-light border-0 rounded-3 shadow-none ${errors.password ? 'is-invalid' : ''}`}
                                                    placeholder="••••••••"
                                                    value={credentials.password}
                                                    onChange={handleChange}
                                                />
                                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label className="form-label small fw-bold">Confirm</label>
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    className={`form-control p-3 bg-light border-0 rounded-3 shadow-none ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                                    placeholder="••••••••"
                                                    value={credentials.confirmPassword}
                                                    onChange={handleChange}
                                                />
                                                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary-custom w-100 py-3 fw-bold fs-6 mt-3 shadow-sm">Create Account</button>
                                    </form>

                                    <div className="text-center mt-4">
                                        <p className="text-muted small mb-0 fw-medium">Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Sign In</Link></p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
