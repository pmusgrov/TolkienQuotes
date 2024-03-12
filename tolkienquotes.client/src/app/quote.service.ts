import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'https://localhost:1941/Quote?author=';


  constructor(private http: HttpClient) {}


  getQuote(characterId: string): Observable<string> {
    const url = `${this.apiUrl}${characterId}`;

    return this.http.get(url, { responseType: 'text' }).pipe(
      catchError(error => {
        console.error('Error fetching quote:', error);
        throw new Error('Error fetching quote. Please try again later.');
      }),
      map(response => {
        return response;
      })
    );
  }
}
