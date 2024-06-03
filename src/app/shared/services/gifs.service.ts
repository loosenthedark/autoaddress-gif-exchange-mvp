import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';

const GIPHY_API_KEY = environment.apiKey;
const TRENDING_API_URL = environment.apiBaseUrl + '/trending';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private _http: HttpClient) {}

  getTrendingGifs(): Observable<any> {
    return this._http.get<any>(TRENDING_API_URL, {
      params: new HttpParams().set('api_key', GIPHY_API_KEY),
    });
  }
}
