/*
Index Action
*/
import axios from 'axios';

const API_KEY = '3184d6e7f7af7f55c62f212f26f89ba9';
const URL_KEY = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// Keeps actions the same
export const GET_WEATHER = 'GET_WEATHER';
// Action creator
export function getWeather(city) {
  const url = `${URL_KEY}&q=${city}`;
  const request = axios.get(url);
  console.log('request', request);
  return {
    type: GET_WEATHER,
    payload: request
  };
}
