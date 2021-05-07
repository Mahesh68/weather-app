import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-data';
  apiRoot: string = "http://api.openweathermap.org/data/2.5/weather";
  weatherData: any;
  //http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3d8b309701a13f65b660fa2c64cdc517

  constructor(private http: HttpClient) { }
  getWeatherData(city: string){
    const appid = "3d8b309701a13f65b660fa2c64cdc517";
    const httpOptions = {
      params: new HttpParams().set("q", city).set("appid", appid)
    };

    this.http.get(this.apiRoot, httpOptions).subscribe(res => {
      this.weatherData = res;
      console.log(this.weatherData);
    });
    console.log(this.weatherData);
  }


}
