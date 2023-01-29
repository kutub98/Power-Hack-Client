import React from 'react';
import Login from '../LoginPage/Login';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='home'>
              <div className="HomeLogin mx-auto my-2">
                <Login></Login>
              </div>
            </div>
        </div>
    );
};

export default Home;