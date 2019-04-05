import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  origin = 'localhost://';
  constructor(private _http: HttpClient) { }

  GetFiltersData(): Observable<any> {
    const apiUrl = this.origin + 'api/Controler/GetFiltersData/';
    return this._http.get<any>(apiUrl);
  }
}
