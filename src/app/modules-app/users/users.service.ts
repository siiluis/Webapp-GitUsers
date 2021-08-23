import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from './models/IUser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  URL_API = environment.URL_API;
  listUsers$ = new Subject();
  constructor(private http: HttpClient) {}

  get usersList(): Observable<any> {
    return this.listUsers$;
  }

  getProfiles(user: string) {
    let params = new HttpParams().set('q', user).set('per_page', 10);
    this.http
      .get<any[]>(`${this.URL_API}/search/users`, { params })
      .pipe(map((response: any) => response['items']))
      .subscribe((respone) => this.listUsers$.next(respone));
  }

  getPerfil(user: string) {
    return this.http.get(`${this.URL_API}/users/${user}`).toPromise();
  }
}
