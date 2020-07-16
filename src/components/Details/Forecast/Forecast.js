import React, { useState, useEffect } from "react";
import "./Forecast.scss";
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
import { getWeatherDaily, getWeather } from "../../../helpers/getWeather";

//const weatherArray = [CLOUD, CLOUDY, RAIN, SNOW, WINDY, THUNDER, DRIZZLE, SUN];

export const Forecast = () => {
  const [daily, setDaily] = useState({});
  const [bogota, setBogota] = useState({});

  useEffect(() => {
    const dailyCity = "Bogota";
    getWeatherDaily(dailyCity).then((daily) => {
      setDaily(daily);
    });
  }, []);

  useEffect(() => {
    const city = "Bogota";
    getWeather(city).then((bogota) => {
      setBogota(bogota);
    });
  }, []);

  //Convertir de kelvin a celsius
  let celsius = (kelvin) => {
    return Number(convert(kelvin).from("K").to("C").toFixed(0));
  };
  let main = bogota?.main;
  let min = main?.temp_min;
  let max = main?.temp_max;
  let iconBogota;

  let minC = celsius(min);
  let maxC = celsius(max);

  if (bogota && bogota.weather) {
    iconBogota = bogota.weather[0].main;
  }
  let txtBogota = "";
  if (bogota.weather) {
    txtBogota = bogota.weather[0].main;
  }

  switch (iconBogota) {
    case "Clouds":
      iconBogota = CLOUD;
      break;

    case "Drizzle":
      iconBogota = DRIZZLE;
      break;

    case "Rain":
      iconBogota = RAIN;
      break;

    case "Snow":
      iconBogota = SNOW;
      break;

    case "Sun":
      iconBogota = SUN;
      break;

    case "Windy":
      iconBogota = WINDY;
      break;

    case "Thunder":
      iconBogota = THUNDER;
      break;
    default:
  }

  const arrayDate = daily.list;

  const f = new Date();
  const dia = 1;
  const dias = 2;

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dayLetterToday = days[f.getDay()];
  const dayLetterTomorrow = days[f.getDay() + 1];
  const dayLetterDayAfterTomorrow = days[f.getDay() + 2];

  const tomorrow =
    f.getFullYear() +
    "-" +
    "0" +
    (f.getMonth() + 1) +
    "-" +
    (f.getDate() + dia);
  const dayAfterTomorrow =
    f.getFullYear() +
    "-" +
    "0" +
    (f.getMonth() + 1) +
    "-" +
    (f.getDate() + dias);

  let temperaturaManana = {};
  let temperaturaPasado = {};

  if (arrayDate) {
    [temperaturaManana] = arrayDate.filter((item) => {
      const dtTxt = item.dt_txt.substr(0, 10);

      if (dtTxt === tomorrow) {
        return true;
      }
      return false;
    });

    [temperaturaPasado] = arrayDate.filter((item) => {
      const dtTxt = item.dt_txt.substr(0, 10);

      if (dtTxt === dayAfterTomorrow) {
        return true;
      }
      return false;
    });
  }

  // mañana
  let minTempTomorrow = temperaturaManana?.main?.temp_min;
  let maxTempTomorrow = temperaturaManana?.main?.temp_max;
  let minTempTomorrowC = celsius(minTempTomorrow);
  let maxTempTomorrowC = celsius(maxTempTomorrow);
  let iconBogotaTomorrow;
  let txtBogotaTomorrow;

 if (temperaturaManana.weather) {
   txtBogotaTomorrow = temperaturaManana.weather[0].main;
 }
  
  if (temperaturaManana && temperaturaManana.weather) {
    iconBogotaTomorrow = temperaturaManana.weather[0].main;
  } 

  switch (iconBogotaTomorrow) {
    case "Clouds":
      iconBogotaTomorrow = CLOUD;
      break;
    case "Cloudy":
      iconBogotaTomorrow = CLOUDY;

      break;
    case "Drizzle":
      iconBogotaTomorrow = DRIZZLE;
      break;

    case "Rain":
      iconBogotaTomorrow = RAIN;
      break;

    case "Snow":
      iconBogotaTomorrow = SNOW;
      break;
    case "Sun":
      iconBogotaTomorrow = SUN;
      break;

    case "Windy":
      iconBogotaTomorrow = WINDY;
      break;

    case "Thunder":
      iconBogotaTomorrow = THUNDER;
      break;

    default:
      return SUN;
  }

  // pasado mañana
    let minTempDayAfterTomorrow = temperaturaPasado?.main?.temp_min;
    let maxTempDayAfterTomorrow = temperaturaPasado?.main?.temp_max;
    let minTempDayAfterTomorrowC = celsius(minTempDayAfterTomorrow);
    let maxTempDayAfterTomorrowC = celsius(maxTempDayAfterTomorrow);
    let iconBogotaDayAfterTomorrow;
    let txtBogotaDayAfterTomorrow;

    if (temperaturaPasado.weather) {
      txtBogotaDayAfterTomorrow = temperaturaPasado.weather[0].main;
    }

    if (temperaturaManana && temperaturaPasado.weather) {
      iconBogotaDayAfterTomorrow = temperaturaPasado.weather[0].main;
  } 

  switch (iconBogotaDayAfterTomorrow) {
    case "Clouds":
      iconBogotaDayAfterTomorrow = CLOUD;
      break;
    case "Cloudy":
      iconBogotaDayAfterTomorrow = CLOUDY;

      break;
    case "Drizzle":
      iconBogotaDayAfterTomorrow = DRIZZLE;
      break;

    case "Rain":
      iconBogotaDayAfterTomorrow = RAIN;
      break;

    case "Snow":
      iconBogotaDayAfterTomorrow = SNOW;
      break;
    case "Sun":
      iconBogotaDayAfterTomorrow = SUN;
      break;

    case "Windy":
      iconBogotaDayAfterTomorrow = WINDY;
      break;

    case "Thunder":
      iconBogotaDayAfterTomorrow = THUNDER;
      break;

    default:
      return SUN;
  }

  return (
    <div className="wrapper-forecast">
      <h3 className="title">
        <strong>3 Days</strong> Forecast
      </h3>
      <div className="forecast-item">
        <div className="day-weather">
          <img src={iconBogota} alt="iconBogota" className="icon-weather" />
          <p className="text-wather">
            {dayLetterToday}
            <br /> <span>{txtBogota}</span>
          </p>
        </div>
        <div className="cube-weather cube-weather__first-of-type">
          <span className="temp-weather">
            {minC}º / {maxC}º
          </span>
        </div>
      </div>

      <div className="forecast-item">
        <div className="day-weather">
          <img
            src={iconBogotaTomorrow}
            alt="iconBogotaTomorrow"
            className="icon-weather"
          />
          <p className="text-wather">
            {dayLetterTomorrow} <br /> <span>{txtBogotaTomorrow}</span>
          </p>
        </div>
        <div className="cube-weather">
          <span className="temp-weather">
            {minTempTomorrowC}º/ {maxTempTomorrowC}º
          </span>
        </div>
      </div>

      <div className="forecast-item">
        <div className="day-weather">
          <img
            src={iconBogotaDayAfterTomorrow}
            alt="iconBogotaDayAfterTomorrow"
            className="icon-weather"
          />
          <p className="text-wather">
            {dayLetterDayAfterTomorrow} <br />
            <span>{txtBogotaDayAfterTomorrow}</span>
          </p>
        </div>
        <div className="cube-weather">
          <span className="temp-weather">
            {minTempDayAfterTomorrowC}º/ {maxTempDayAfterTomorrowC}º
          </span>
        </div>
      </div>
    </div>
  );
};
