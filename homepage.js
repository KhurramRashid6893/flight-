import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to The Cloudy AI</h1>
      <p>Revolutionizing the Airline Journey with AI-driven Solutions</p>
      <Link to="/solutions">
        <button>Learn More</button>
      </Link>
    </div>
  );
};

export default HomePage;
