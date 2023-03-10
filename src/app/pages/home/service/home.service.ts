import { Injectable } from '@angular/core';
import { MainService } from '../../../shared/services/main.service';
import {
  RequestEndpointsArtists,
  RequestEndpointsCategories,
} from 'src/app/shared/config/api.constants';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private mainS: MainService) {}

  getCategories() {
    return this.mainS
      .getQuery(RequestEndpointsCategories.CATEGORIES + '?limit=50')
      .pipe(
        map((data: any) => {
          return data['categories'].items;
        })
      );
  }

  getPlaylistCategories(cat_id: any) {
    return this.mainS
      .getQuery(
        RequestEndpointsCategories.CATEGORIES + `/${cat_id}/playlists?limit=5`
      )
      .pipe(
        map((data: any) => {
          return data['playlists'].items;
        })
      );
  }

  getCategory(cat_id: any) {
    return this.mainS
      .getQuery(RequestEndpointsCategories.CATEGORIES + `/${cat_id}`)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }

  getGratestArtist() {
    const limit = 5;
    const market = 'ES';
    const seed_market = 'rock';
    const min_popularity = 60;
    const max_popularity = 100;

    return this.mainS
      .getQuery(
        RequestEndpointsArtists.RECOMENDATIONS +
          `?limit=${limit}&market=${market}&seed_genres=${seed_market}&min_popularity=${min_popularity}&max_popularity=${max_popularity}`
      )
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }
}
