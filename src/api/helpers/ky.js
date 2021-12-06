import ky from "ky";

const serverAPI = ky.create({
  prefixUrl: process.env.API,
  timeout: 20000
});

const serverGeocodeApi = ky.create({
  prefixUrl: "https://geocode-maps.yandex.ru/1.x/?apikey=7482946a-9120-4a56-96d9-f279288031bc&format=json",
  timeout: 20000
})

//проверка
export { serverAPI, serverGeocodeApi };
