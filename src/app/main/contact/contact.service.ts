import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = 'https://formspree.io/xnqgezob';

  constructor(private http: HttpClient) { }
  postMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text'}).pipe(
      map(
        (response) => {
          if(response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}

