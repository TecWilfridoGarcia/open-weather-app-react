import React from 'react';
import './Places.scss';

export const Places = () => {
  return (
    <div className="wrapper-places">
      <h3 className="title">
        <strong>Place to</strong> Visit
      </h3>
      <div className="places">
        <i className="fas fa-map-marker-alt"></i>
        <p className="text-place">Arab street Singapure</p>
      </div>
    </div>
  );
}
