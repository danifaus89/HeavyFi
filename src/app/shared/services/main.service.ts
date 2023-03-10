import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  token: string =
    'BQAIomZnFfBpeOfnhF-VK7HVUMpsMCgOXOWIAHLlDT5jx8Cf-cQdx9oGvtQ_XnD5huyyjL-UWOLDgg-kEEpyqZ5eg8vV5FG7AJ8yMbSS4qlJ83H3gSw';

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = environment.API_URL + `/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get(url, { headers });
  }
}
