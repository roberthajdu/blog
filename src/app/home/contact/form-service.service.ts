import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http: HttpClient) { }

  submitForm(form: any) {
    return this.http.post('/', form, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      responseType: 'text'
    })
  }

  private encode(data: any): string {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }
}
