import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';
  private userCache = new Map<number, User>();

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`);
  }

  getUser(id: number): Observable<any> {
    const cachedUser = this.userCache.get(id);
    if (cachedUser) {
      return of({ data: cachedUser });
    }
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      tap(response => {
        this.userCache.set(id, response.data);
      })
    );
  }
}
