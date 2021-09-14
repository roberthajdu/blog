import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private readonly http: HttpClient) { }

  submitForm(): Observable<any> {
    return this.http.post('/', this.encode({ 'name': 'lol'}), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
  }

  encode(data: any): string {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

}
