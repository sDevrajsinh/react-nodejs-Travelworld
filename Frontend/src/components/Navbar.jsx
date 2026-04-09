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
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        closeMenu();
        navigate('/');
    };

    const navLinks = [
        { to: '/', label: 'Home', end: true },
        { to: '/about', label: 'About' },
        { to: '/tours', label: 'Tours' },
    ];

    return (
        <>
            {/* ─── Main Navbar bar ─── */}
            <nav className={`navbar-bar fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
                <div className="container d-flex align-items-center justify-content-between">
                    {/* Brand */}
                    <Link className="navbar-brand-logo d-flex align-items-center" to="/" onClick={closeMenu}>
                        <img src={logoImg} alt="Travel World" height="42" />
                    </Link>

                    {/* Desktop links */}
                    <ul className="nav-links-desktop d-none d-lg-flex align-items-center list-unstyled mb-0 gap-1">
                        {navLinks.map(({ to, label, end }) => (
                            <li key={to}>
                                <NavLink className="nav-link" to={to} end={end}>{label}</NavLink>
                            </li>
                        ))}
                        {user?.role === 'admin' && (
                            <li>
                                <NavLink className="nav-link" to="/admin/add-tour">Add Tour</NavLink>
                            </li>
                        )}
                    </ul>

                    {/* Desktop auth buttons */}
                    <div className="d-none d-lg-flex align-items-center gap-3">
                        {user ? (
                            <div className="d-flex align-items-center gap-3">
                                <span className="small fw-bold text-dark">
                                    <span className="text-muted fw-normal me-1">Welcome,</span>
                                    {user.username}
                                </span>
                                <button className="btn btn-dark rounded-pill px-4 py-2 small fw-bold" onClick={logout}>
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="d-flex align-items-center gap-3">
                                <Link to="/login" className="fw-bold small text-dark text-decoration-none">Login</Link>
                                <Link to="/register" className="btn btn-primary-custom">Register</Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="mobile-menu-btn d-flex d-lg-none align-items-center justify-content-center border-0 bg-transparent"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                    >
                        <FaBars size={24} color="#1f2937" />
                    </button>
                </div>
            </nav>

            {/* ─── Mobile overlay ─── */}
            {isOpen && (
                <div
                    className="mobile-overlay"
                    onClick={closeMenu}
                />
            )}

            {/* ─── Mobile drawer ─── */}
            <div className={`mobile-drawer ${isOpen ? 'mobile-drawer--open' : ''}`}>
                <div className="mobile-drawer__header d-flex align-items-center justify-content-between">
                    <img src={logoImg} alt="Travel World" height="38" />
                    <button
                        className="border-0 bg-transparent d-flex align-items-center justify-content-center"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <FaTimes size={22} color="#1f2937" />
                    </button>
                </div>

                <nav className="mobile-drawer__nav">
                    {navLinks.map(({ to, label, end }) => (
                        <NavLink
                            key={to}
                            className="mobile-nav-link"
                            to={to}
                            end={end}
                            onClick={closeMenu}
                        >
                            {label}
                        </NavLink>
                    ))}
                    {user?.role === 'admin' && (
                        <NavLink className="mobile-nav-link" to="/admin/add-tour" onClick={closeMenu}>
                            Add Tour
                        </NavLink>
                    )}
                </nav>

                <div className="mobile-drawer__footer">
                    {user ? (
                        <div>
                            <p className="small text-muted mb-3 fw-medium">
                                Welcome, <strong className="text-dark">{user.username}</strong>
                            </p>
                            <button className="btn btn-dark rounded-pill w-100 py-2 fw-bold" onClick={logout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="d-flex flex-column gap-3">
                            <Link to="/login" className="btn btn-outline-dark rounded-pill w-100 py-2 fw-bold" onClick={closeMenu}>
                                Login
                            </Link>
                            <Link to="/register" className="btn btn-primary-custom w-100 py-2" onClick={closeMenu}>
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
