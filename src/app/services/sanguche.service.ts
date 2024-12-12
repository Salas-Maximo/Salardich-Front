import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Sanguche {
  _id?: string;
  nombre: string;
  ingredientes: string[];
  creatorId: string;
}

@Injectable({
  providedIn: 'root',
})
export class SangucheService {
  private apiUrl = 'http://localhost:3000/api/sanguches';
  constructor(private http: HttpClient) {}

  getAll(): Observable<{ sanguches: Sanguche[] }> {
    return this.http.get<{ sanguches: Sanguche[] }>(this.apiUrl);
  }

  getByCreatorId(creatorId: string): Observable<Sanguche[]> {
    return this.http.get<Sanguche[]>(`${this.apiUrl}/creator/${creatorId}`);
  }

  create(sanguche: Sanguche): Observable<void> {
    // get token from local storage
    const token = localStorage.getItem('token');
    return this.http.post<void>(this.apiUrl, { sanguche, token });
  }

  delete(id: string): Observable<void> {
    // get token from local storage
    const token = localStorage.getItem('token');
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
  }

  update(sanguche: Sanguche): Observable<void> {
    // get token from local storage
    const token = localStorage.getItem('token');
    return this.http.put<void>(this.apiUrl, {
      sanguche,
      token,
    });
  }
}
