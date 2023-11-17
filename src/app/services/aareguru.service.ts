import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IAarguruData } from './iaarguru-data';
 
/**
 * Generic api service with methods for different http-methods
 */
@Injectable({
  providedIn: 'root',
})
export class AareguruService {
  private readonly baseApiUrl = "https://aareguru.existenz.ch/v2018/";
  constructor(private http: HttpClient) {}
 
  /**
   * Get request to api
   * @param path Path of endpoint
   * @returns Observable with response of api
   */
  public getTodayBern() : Observable<IAarguruData> {
    let path = "today"
    return this.http.get<IAarguruData>(this.baseApiUrl + path + "?city=bern&app=janiks.portfolio&version=1.42").pipe(
      map((x: IAarguruData) => x as IAarguruData)
    )
  }
}