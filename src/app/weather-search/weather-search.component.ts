import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { WeatherItem } from '../weather-item/weather-item';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html'
})
export class WeatherSearchComponent implements OnInit {


  location = new FormControl();

  constructor(private _weatherService: WeatherService) { }

  onSubmit(form: FormControl) {
    this._weatherService.searchWeatherData(this.location.value)
    .subscribe(
      data => {
        const weatherItem = new WeatherItem(data.name, data.weather[0].main, data.weather[0].description, data.main.temp);
        this._weatherService.addWeatherItem(weatherItem);
      }
    );
  }

  ngOnInit() {
  }

}
