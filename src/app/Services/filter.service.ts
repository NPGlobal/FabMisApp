import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  origin = 'https://localhost:44396/';
  constructor(private _http: HttpClient) { }

  GetMenuListAndFilterData(): Observable<any> {
    const apiUrl = this.origin + 'api/Menu/GetMenuListAndFilterData';
    return this._http.get<any>(apiUrl);
  }
}
