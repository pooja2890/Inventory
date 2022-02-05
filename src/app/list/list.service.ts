import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { List } from './list';

interface list{
  "id":number,
  "email":string,
  "name":string,
  "price":number
};

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private http:HttpClient) {
  }

  getItems():Observable<list>{
    return this.http.get<list>('https://jsonplaceholder.typicode.com/users');
  }
}
