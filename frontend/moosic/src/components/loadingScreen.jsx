import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <ClipLoader size={150} />
    </div>
  );
};

export default LoadingScreen;
