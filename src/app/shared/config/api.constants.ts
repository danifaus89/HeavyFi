import { environment } from 'src/environments/environment';

export class RequestEndpointsArtists {
  static RECOMENDATIONS = environment.API_URL + '/recommendations';
}

export class RequestEndpointsCategories {
  static CATEGORIES = 'browse/categories';
}

export class RequestEndpointsAlbums {
  //static DISCOVER = environment.API_URL + '/3/discover/movie';
}
export class RequestEndpointsAudioBooks {
  //static DISCOVER = environment.API_URL + '/3/genre/movie/list';
}
