import React, { useEffect } from "react";
import { Banner } from "../../components/Banner/Banner";
import { CitySelected } from "../../components/CitySelected/CitySelected";
import "./Weather.scss";
import { Details } from "../../components/Details/Details";
import { getWeather } from "../../helpers/getWeather";

export const Weather = () => {
  useEffect(() => {
    getWeather().then((data) => {
    });
  }, []);
  return (
    <div className="wrapper-weather">
      <Banner />
      <CitySelected />
      <Details />
    </div>
  );
};
