import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  
  newsapiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d1aad565c12d4144ad6ce0fcc8376a1b`

  businessUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d1aad565c12d4144ad6ce0fcc8376a1b`

  enterUrl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=d1aad565c12d4144ad6ce0fcc8376a1b`

  sportsUrl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d1aad565c12d4144ad6ce0fcc8376a1b`

  techUrl = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d1aad565c12d4144ad6ce0fcc8376a1b`

  healthUrl = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=d1aad565c12d4144ad6ce0fcc8376a1b` 

  // All news  
  topHeading() : Observable<any>{
     return this._http.get(this.newsapiUrl)
  }
  
  businessHeading(): Observable<any>{
    return this._http.get(this.businessUrl)
  }

  enterHeading():Observable<any>{
    return this._http.get(this.enterUrl)
  }
  sportsHeading():Observable<any>{
    return this._http.get(this.sportsUrl)
  }
  techHeading():Observable<any>{
    return this._http.get(this.techUrl)
  }

  healthHeading():Observable<any>{
    return this._http.get(this.healthUrl)
  }


}
