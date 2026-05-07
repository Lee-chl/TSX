import { useEffect, useState } from "react";
import "./Weather.css";
// interface weather {
//   id: number;
//   description: string;
//   icon: string;
// }
// interface main {
//   temp: number;
// }
// interface WeatherType {
//   weather: weather[];
//   main: main;
//   name: string;
// }

interface WeatherType2 {
  weather: {
    id: number;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
  };
  name: string;
}

export default function Weather() {
  //   const [weathers, setWeather] = useState<weather[]>([]);
  //   const [locationName, setLocationNem] = useState<string>("");
  //   const [temp, setTemp] = useState<number>(0);

  const [weather, setWeathers] = useState<WeatherType2 | null>(null);
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${apiKey}&units=metric`,
      );
      if (!response.ok) throw new Error("HTTP ERROR : " + response.status);
      const resJson: WeatherType2 = await response.json();
      setWeathers(resJson);
    };
    fetchData();
  }, []);

  //   useEffect(() => {
  //     const showWeather = async () => {
  //       try {
  //         const res = await fetch(
  //           "https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${apiKey}&units=metric",
  //         );
  //         if (!res.ok) throw new Error("HTTP ERROR : " + res.status);
  //         const resJson: WeatherType = await res.json();
  //         setWeather(resJson.weather);
  //         setTemp(resJson.main.temp);
  //         setLocationNem(resJson.name);
  //       } catch (e) {
  //         if (e instanceof Error) return e.message;
  //       }
  //     };
  //     showWeather();

  //   }, []);

  useEffect(() => {
    // 브라우저
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
        );
        const data = await response.json();
        setWeathers(data);
      },
      (error) => {
        console.log("err");
      },
    );
  }, []);

  if (!weather) {
    return <div>날씨를 불러오는 중...</div>;
  }

  const icon = weather.weather[0].icon;
  const description = weather.weather[0].description;
  const tempe = weather.main.temp;
  const locationN = weather.name;

  return (
    // <div>
    //   {weathers.map((weather) => (
    //     <div key={weather.id} className="weather">
    //       <img
    //         src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
    //       />
    //       <p>
    //         {weather.description} | {temp} ℃ | {locationName}
    //       </p>
    //     </div>
    //   ))}
    // </div>

    <div className="weather-container">
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
      <p>
        {description} | {tempe} ℃ | {locationN}
      </p>
    </div>
  );
}
