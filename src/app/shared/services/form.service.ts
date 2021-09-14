import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private readonly http: HttpClient) { }

  submitForm(formData: any): Observable<any> {
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', formData.name)
      .append('email', formData.email)
      .append('service', formData.service)
      .append('message', formData.message)
    return this.http.post('/', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }
}
