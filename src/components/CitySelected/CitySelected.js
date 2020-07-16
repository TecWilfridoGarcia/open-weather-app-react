import React, { useEffect, useState } from "react";
import "./CitySelected.scss";
import convert from "convert-units";
import {
  CLOUD,
  CLOUDY,
  RAIN,
  SNOW,
  WINDY,
  THUNDER,
  DRIZZLE,
  SUN,
} from "../constants/assets";
import { getWeather } from "../../helpers/getWeather";

export const CitySelected = () => {
  const [bogota, setBogota] = useState({});

  useEffect(() => {
    let city = "Bogota"
    getWeather(city).then((bogota) => {
      setBogota(bogota);
    });
  }, []);


 let celsius = (kelvin) => {
   return Number(convert(kelvin).from("K").to("C").toFixed(0));
 };
  
  let iconApi = CLOUDY;
  if (bogota.weather) {
    iconApi = bogota.weather[0].main;
  }

  switch (iconApi) {
    case "Clouds":
      iconApi = CLOUD;
      break;

    case "Drizzle":
      iconApi = DRIZZLE;
      break;

    case "Rain":
      iconApi = RAIN;
      break;

    case "Snow":
      iconApi = SNOW;
      break;

    case "Sun":
      iconApi = SUN;
      break;

    case "Windy":
      iconApi = WINDY;
      break;

    case "Thunder":
      iconApi = THUNDER;
      break;
    
    default:
  }

  let temp = bogota?.main?.temp;
  let tempC = celsius(temp);

  return (
    <div className="wrapper-info">
      <span className="tips tips__dark"></span>
      <div className="info-weather">
        <img src={iconApi} alt="iconTemp" /> <br />
        <h3 className="temperature-local">{ tempC }</h3>
      </div>
      <span className="tips tips__lighter"></span>
    </div>
  );
};
