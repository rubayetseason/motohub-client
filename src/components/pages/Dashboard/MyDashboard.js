import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyDashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='my-16 px-10'>
          <marquee behavior="loop" direction="right"> <h1 className="text-4xl font-bold">Welcome to dashboard, {user?.displayName}</h1></marquee>
        </div>
    );
};

export default MyDashboard;