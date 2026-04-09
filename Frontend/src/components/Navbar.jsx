import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImg from '../assets/images/Logo/logo-1.png';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-white shadow-sm' : 'bg-white bg-lg-transparent'}`}>
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/" onClick={() => setIsOpen(false)}>
                    <img src={logoImg} alt="Travel World" height="42" />
                </Link>

                <button
                    className="navbar-toggler border-0 shadow-none text-dark"
                    type="button"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" to="/tours" onClick={() => setIsOpen(false)}>Tours</NavLink>
                        </li>
                        {user?.role === 'admin' && (
                            <li className="nav-item">
                                <NavLink className="nav-link mx-2" to="/admin/add-tour" onClick={() => setIsOpen(false)}>Add Tour</NavLink>
                            </li>
                        )}
                    </ul>
                    <div className="d-flex align-items-center gap-4 mt-3 mt-lg-0">
                        {
                            user ? (
                                <div className="d-flex align-items-center gap-3">
                                    <div className="d-none d-lg-block">
                                        <span className="small text-muted me-1">Welcome,</span>
                                        <span className="fw-bold text-dark">{user.username}</span>
                                    </div>
                                    <button className="btn btn-dark rounded-pill px-4 py-2 small fw-bold" onClick={logout}>Logout</button>
                                </div>
                            ) : (
                                <div className="d-flex align-items-center gap-4">
                                    <Link to="/login" className="text-dark fw-bold small text-decoration-none" onClick={() => setIsOpen(false)}>Login</Link>
                                    <Link to="/register" className="btn btn-primary-custom" onClick={() => setIsOpen(false)}>Register</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
