// components/Preloader.js
import React, { useEffect, useState } from 'react';

const Preloader = ({ onLoad }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Notify parent to reinitialize animations
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div id="preloader">
        <div className="loading" data-loading-text="Runok"></div>
      </div>
    )
  );
};

export default Preloader;
