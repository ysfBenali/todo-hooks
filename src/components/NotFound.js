import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="not-found">
        <h4>404 - Page not found !</h4>
        <p><Link to="/">Go back Home</Link></p>
    </div>
)

export default NotFound;