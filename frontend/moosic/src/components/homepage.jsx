import React from 'react';
import '../styles/homepage.css';
import '../assets/cartoon cow.png'

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage__header">
        <img src="cartoon cow.png" alt="Spotify logo" />
        <input type="text" placeholder="Search" />
      </header>

      <div className="homepage__body">
        <div className="homepage__body-left">
          <h2>Playlists</h2>
          <ul>
            <li>Discover Weekly</li>
            <li>Your Top Songs</li>
            <li>Pop Hits</li>
            <li>Rock Classics</li>
          </ul>
        </div>

        <div className="homepage__body-right">
          <h2>Recently Played</h2>
          <div className="homepage__recently-played-songs">
            {/* Add your song components here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;