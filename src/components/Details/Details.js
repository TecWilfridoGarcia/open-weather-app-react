import React from "react";
import { Forecast } from "./Forecast/Forecast";
import { Places } from "./Places/Places";
import "./Details.scss";
import { TopReview } from "./TopReview/TopReview";
import { WeatherCities } from "./WeatherCities/WeatherCities";

export const Details = () => {
  return (
    <div className="details">
      <Forecast />
      <Places />
      <TopReview />
      <WeatherCities />
    </div>
  );
};
