import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Tours = React.lazy(() => import('../pages/Tours'));
const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'));
const TourDetails = React.lazy(() => import('../pages/TourDetails'));
const AddTour = React.lazy(() => import('../pages/Admin/AddTour'));

// Simple fallback skeleton spinner
const LoadingFallback = () => (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

const AppRoutes = () => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tours" element={<Tours />} />
                    <Route path="/tours/:id" element={<TourDetails />} />
                    <Route path="/admin/add-tour" element={<AddTour />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
