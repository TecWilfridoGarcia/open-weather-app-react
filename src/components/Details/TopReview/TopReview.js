import React from 'react'
import './TopReview.scss';
export const TopReview = () => {
  return (
    <div className="wrapper-options">
      <div className="tops">
        <i className="fas fa-plus"></i>
        <p className="text">Top reviews</p>
        <div className="profiles">
          <img
            className="profile"
            src="https://cdnb.20m.es/sites/112/2019/04/cara6-620x618.jpg"
            alt="2"
          />
          <img
            className="profile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRv4XuyDIp_GtCYi6KvIbbuDLCgKjb05uHBZw&usqp=CAU"
            alt="3"
          />
          <img
            className="profile"
            src="https://www.redaccionmedica.com/images/destacados/las-personas-con-un-riesgo-genetico-bajo-de-tdah-son-mas-afortunadas--2868.jpg"
            alt="4"
          />
        </div>

        <button className="btn-add">6+</button>
      </div>
      <div className="option-one">
        <i className="fas fa-map-marker-alt"></i>
        <p className="text-place"> Art Science Museum</p>
      </div>
      <div className="option-two">
        <i className="fas fa-map-marker-alt"></i>
        <p className="text-place"> Fountain of Wealth</p>
        <button className="btn-add">
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
}
