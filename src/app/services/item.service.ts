import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Item } from '../Item';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
    providedIn: 'root'
})

export class ItemService {
    private apiUrl = 'http://localhost:5100/items'

    constructor(private http:HttpClient) { }

    getItems(): Observable<Item[]> {
      return this.http.get<Item[]>(this.apiUrl);
    }

    addItem(item: Item): Observable<Item> {
      return this.http.post<Item>(this.apiUrl, item, httpOptions);
    }
    
}