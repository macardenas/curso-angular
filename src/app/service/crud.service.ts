import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  http: HttpClient = inject(HttpClient);

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
      }
    )
  };

  constructor() { }

  getItems(url: string): Observable<object> {
    return this.http.get(url, this.httpOptions).pipe(
      catchError(error => {
        console.error('Error adding post:', error);
        return throwError(()=> new Error('Failed to get.'));
      })
    );
  }

    // Method to simulate adding a new post
    addPost(url:string,newPost: any): Observable<object> {
      return this.http.post<any>(url, newPost).pipe(
        catchError(error => {
          console.error('Error adding post:', error);
          return throwError(()=> new Error('Failed to add post.'));
        })
      );
    }

     // Method to simulate adding a new post
     addPutt(url:string,newUpdate: any): Observable<object> {
      return this.http.put<any>(url, newUpdate).pipe(
        catchError(error => {
          console.error('Error adding post:', error);
          return throwError(()=> new Error('Failed to add post.'));
        })
      );
    }

     // Method to simulate adding a new post
     Delete(url:string): Observable<object> {
      return this.http.delete<any>(url).pipe(
        catchError(error => {
          console.error('Error adding post:', error);
          return throwError(()=> new Error('Failed to add post.'));
        })
      );
    }
}
