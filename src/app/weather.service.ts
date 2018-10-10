import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather-list/weather-list';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { WeatherItem } from './weather-item/weather-item';
import 'rxjs/RX';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  clearWeatherItem() {
    WEATHER_ITEMS.splice(0);
  }

  searchWeatherData(cityName: string): Observable<any> {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName +
    '&APPID=bef163c29123c1e29866b37a2c700cf6&units=metric')
      .map(response => response.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error.json());
      });
  }

}
