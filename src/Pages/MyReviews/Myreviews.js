import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Myreviews = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>My Reviews</h2>
        </div>
    );
};

export default Myreviews;