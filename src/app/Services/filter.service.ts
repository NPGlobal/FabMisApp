import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  origin = 'localhost://';
  constructor(private _http: HttpClient) { }

  GetMenuListAndFilterData(): Observable<any> {
    const apiUrl = this.origin + 'api/Controler/GetMenuListAndFilterData/';
    return this._http.get<any>(apiUrl);
  }
}
