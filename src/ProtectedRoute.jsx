
import { Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useUser } from './contexts/UserContext';

const ProtectedRoute = ({ element: Component, requiredRoles }) => {
    const { user, loading } = useUser();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!requiredRoles.includes(user.idrol)) {
        return <Navigate to="/sinpermiso" replace />;
    }

    return Component;
};

export default ProtectedRoute;
