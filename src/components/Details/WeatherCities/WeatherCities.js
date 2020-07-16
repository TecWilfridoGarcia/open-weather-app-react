import React, { useState, useEffect } from "react";
import "./WeatherCities.scss";
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
} from "../../constants/assets";
import { getWeather } from "../../../helpers/getWeather";

export const WeatherCities = () => {
  const [paris, setParis] = useState({});
  const [lyon, setLyon] = useState({});

  useEffect(() => {
    let city = "Paris"
    getWeather(city).then((paris) => {
      setParis(paris);
    });
  }, []);

   useEffect(() => {
     let city = "Lyon";
     getWeather(city).then((lyon) => {
       setLyon(lyon);
     });
   }, []);

  let city = paris?.name;
  let country = paris?.sys?.country;
  let temp = paris?.main?.temp;
  let humidityP = paris?.main?.humidity;
  let windP = paris?.wind?.speed;
  let coordsP = lyon?.coord;
  let lonP = coordsP?.lon;
  let latP = coordsP?.lat;

  let cityLyon = lyon?.name;
  let tempLyonK = lyon?.main?.temp;
  let humidityL = lyon?.main?.humidity;
  let windL = lyon?.wind?.speed;
  let coordsL = lyon?.coord;
  let lonL = coordsL?.lon;
  let latL = coordsL?.lat;

    let citySummay = '';
    if (lyon?.name) {
      citySummay = cityLyon.substr(18);
    }

  let position = "";
  if (latL > 0 || latP > 0) {
    position = "North";
  }
  if (latL < 0 || latP < 0) {
    position = "South";
  }

  if (lonL > 0 || lonP > 0) {
    position = "East";
  }

  if (lonL < 0 || lonP < 0) {
    position = "West";
  }
  if ((lonL > 0 && latL > 0) || (lonP > 0 && latP > 0)) {
    position = "Northeast";
  }
  if ((lonL < 0 && latL < 0) || (lonL < 0 && latL < 0)) {
    position = "Southwest";
  }

  if ((lonL < 0 && latL > 0) || (lonP < 0 && latP > 0)) {
    position = "Northwest";
  }

  if ((lonL < 0 && latL < 0) || (lonP < 0 && latP < 0)) {
    position = "Southeast";
  }

  let celsius = (kelvin) => {
    return Number(convert(kelvin).from("K").to("C").toFixed(0));
  };

  let tempParis = celsius(temp);
  let tempLyonC = celsius(tempLyonK);

  let iconLyon,
    iconParis = CLOUDY;
  if (lyon.weather) {
    iconLyon = lyon.weather[0].main;
  }
  if (paris.weather) {
    iconParis = paris.weather[0].main;
  }

  switch (iconParis || iconLyon) {
    case "Clouds":
      iconLyon = CLOUD;
      iconParis = CLOUD;
      break;
    case "Drizzle":
      iconLyon = DRIZZLE;
      iconParis = DRIZZLE;
      break;

    case "Rain":
      iconLyon = RAIN;
      iconParis = RAIN;
      break;

    case "Snow":
      iconLyon = SNOW;
      iconParis = SNOW;
      break;
    case "Sun":
      iconLyon = SUN;
      iconParis = SUN;
      break;

    case "Windy":
      iconLyon = WINDY;
      iconParis = WINDY;
      break;

    case "Thunder":
      iconLyon = THUNDER;
      iconParis = THUNDER;
      break;

    default:
      return SUN;
  }

  return (
    <div className="wrapper-cities">
      <div className="item-city">
        <div className="d-flex">
          <div className="box-icon">
            <img src={iconLyon} alt={iconLyon} />
            <br />
          </div>
          <p className="temperature">{tempLyonC}</p>
          <p className="country">
            <strong className="city">{citySummay}</strong>
            <br />
            {country}
          </p>
        </div>
        <div className="details">
          <p className="descriptions">Humidity {humidityL}º</p>
          <p className="descriptions">{position}</p>
          <p className="descriptions">{windL} km/h</p>
        </div>
      </div>
      <div className="item-city">
        <div className="d-flex">
          <div className="box-icon">
            <img src={iconParis} alt="" /> <br />
          </div>
          <p className="temperature">{tempParis}</p>
          <p className="country">
            <strong className="city">{city}</strong>
            <br />
            {country}
          </p>
        </div>
        <div className="details">
          <p className="descriptions">Humidity {humidityP}º</p>
          <p className="descriptions">{position}</p>
          <p className="descriptions">{windP} km/h</p>
        </div>
      </div>
      <div className="item-city item-city__add">
        <button className="btn-add">Add Location</button>
      </div>
    </div>
  );
};
