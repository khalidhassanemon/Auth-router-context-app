import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';

const Home = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <h4>This is home for {user?.email}</h4>
        </div>
    );
};

export default Home;