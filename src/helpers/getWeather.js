export const getWeather = (city) => {
  return new Promise((resolve, reject) => {
    (function (proxied) {
      XMLHttpRequest = function () {
        var wrapped = new (Function.prototype.bind.apply(proxied, arguments))();

        Object.defineProperty(wrapped, "responseText", {
          writable: true,
        });

        return wrapped;
      };
    })(XMLHttpRequest);
    const apiKey = "354685f625bc0b0266d38e0d5595377e";
    const url = "http://api.openweathermap.org/data/2.5/weather";
    const apiUrl = `${url}?q=${city}&appid=${apiKey}`;
    console.log(apiUrl, "api");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl);
    xhr.responseText = "json";
    xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      resolve(data);
    };
    xhr.onerror = (e) => {
      console.log(
        "Error " + e.target.status + " occurred while receiving the document."
      );
      reject(e);
    };
    if (city !== undefined) {
      xhr.send();
    } else {
      return false;
    }
  });
};


export const getWeatherDaily = (dailyCity) => {
  return new Promise((resolve, reject) => {
    (function (proxied) {
      XMLHttpRequest = function () {
        var wrapped = new (Function.prototype.bind.apply(proxied, arguments))();

        Object.defineProperty(wrapped, "responseText", {
          writable: true,
        });

        return wrapped;
      };
    })(XMLHttpRequest);
    const apiKey = "354685f625bc0b0266d38e0d5595377e";
    const url = "http://api.openweathermap.org/data/2.5/forecast/";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `${url}?q=${dailyCity}&appid=${apiKey}`);
    xhr.responseText = "json";
    xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      resolve(data);
    };
    xhr.onerror = (e) => {
      console.log(
        "Error " + e.target.status + " occurred while receiving the document."
      );
      reject(e);
    };
    if (dailyCity !== undefined) {
      xhr.send();
    } else {
      return false;
    }
  });
};
