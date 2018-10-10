import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from './weather-item';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html'
})
export class WeatherItemComponent implements OnInit {

  @Input() weatherItem: WeatherItem;

  constructor() {
  }

  ngOnInit() {
  }

}
