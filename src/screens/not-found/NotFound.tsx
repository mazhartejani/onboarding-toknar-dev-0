import React from 'react';
import './NotFound.css';

const NotFoundScreen: React.FC = () => {
  return (
    <div className="NotFound">
      <header className="NotFound-header">
        <p className='NotFound-text'>Page not found</p>
      </header>
    </div>
  );
};

export default NotFoundScreen;