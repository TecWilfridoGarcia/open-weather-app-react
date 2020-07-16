import React, { useEffect, useState } from "react";
import "./Banner.scss";
import { COLOMBIA } from "../constants/assets";
import { getWeather } from "../../helpers/getWeather";
export const Banner = () => {
  const [bogota, setBogota] = useState({});

  useEffect(() => {
    const city = "Bogota";
    if (city !== undefined) {
      getWeather(city).then((bogota) => {
        setBogota(bogota);
      });
    }
  }, []);

  return (
    <div className="banner">
      <div className="title-banner">
        <h3 className="title-banner__title">
          <i className="fas fa-map-marker-alt"></i> {bogota?.name}
        </h3>
        <img src={COLOMBIA} alt="map" className="map" />
      </div>
    </div>
  );
};
