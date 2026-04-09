import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import loginImg from '../assets/images/travel/login-img.jpg';
import logoImg from '../assets/images/Logo/logo-1.png';

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/config';

const Login = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validate = () => {
        let tempErrors = {};
        if (!credentials.email) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(credentials.email)) tempErrors.email = "Email is invalid";
        if (!credentials.password) tempErrors.password = "Password is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch({ type: 'LOGIN_START' });
            try {
                const res = await fetch(`${BASE_URL}/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials)
                });

                const result = await res.json();
                if (res.ok) {
                    localStorage.setItem('token', result.token);
                    dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
                    navigate('/');
                } else {
                    dispatch({ type: 'LOGIN_FAILURE', payload: result.message });
                    alert(result.message);
                }
            } catch (err) {
                dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
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
                            <div className="row g-0">
                                <div className="col-md-6 d-none d-md-block overflow-hidden">
                                    <div 
                                        className="h-100 w-100" 
                                        style={{ 
                                            backgroundImage: `url(${loginImg})`, 
                                            backgroundSize: 'cover', 
                                            backgroundPosition: 'center',
                                            minHeight: '600px'
                                        }}
                                    ></div>
                                </div>
                                <div className="col-md-6 p-4 p-lg-5 d-flex flex-column justify-content-center bg-white">
                                    <div className="mb-5">
                                        <Link to="/" className="d-inline-block mb-4">
                                            <img src={logoImg} alt="Logo" height="40" />
                                        </Link>
                                        <h2 className="fw-bold font-playfair display-6">Welcome <span className="text-primary italic">Back</span></h2>
                                        <p className="text-muted small fw-medium mt-2">Login to your account to continue your journey.</p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="form-label small fw-bold">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className={`form-control p-3 bg-light border-0 rounded-3 shadow-none ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="example@mail.com"
                                                value={credentials.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <label className="form-label small mb-0 fw-bold">Password</label>
                                                <a href="#" className="text-primary small fw-bold text-decoration-none">Forgot?</a>
                                            </div>
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
                                        <button type="submit" className="btn btn-primary-custom w-100 py-3 fw-bold fs-6 mt-2">Sign In</button>
                                    </form>

                                    <div className="text-center mt-5">
                                        <p className="text-muted small mb-0 fw-medium">Don't have an account? <Link to="/register" className="text-primary fw-bold text-decoration-none">Create free account</Link></p>
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

export default Login;
