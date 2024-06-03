import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { IGifData } from '../types/gif-data.interface';
import { IGetGifsResponse } from '../components/gif-list/types/get-gifs-response.interface';

const GIPHY_API_KEY = environment.apiKey;
const GIPHY_API_LIMIT = environment.apiLimit;
const TRENDING_API_URL = environment.apiBaseUrl + '/trending';
const SEARCH_API_URL = environment.apiBaseUrl + '/search';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private _http: HttpClient) {}

  getTrendingGifs(): Observable<IGifData[]> {
    return this._http
      .get<IGetGifsResponse>(TRENDING_API_URL, {
        params: {
          api_key: GIPHY_API_KEY,
          limit: GIPHY_API_LIMIT,
        },
      })
      .pipe(map((resp) => resp.data));
  }

  getSearchGifs(searchTerm: string): Observable<IGifData[]> {
    return this._http
      .get<IGetGifsResponse>(SEARCH_API_URL, {
        params: {
          api_key: GIPHY_API_KEY,
          limit: GIPHY_API_LIMIT,
          q: searchTerm,
        },
      })
      .pipe(map((resp) => resp.data));
  }
}
