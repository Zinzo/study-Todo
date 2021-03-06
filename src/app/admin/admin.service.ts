import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {Observable} from "rxjs/Observable";
import {ResultVO} from "../domain/result.vo";

@Injectable()
export class AdminService {

  private SERVER: string;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  findNews(params: any):Observable<ResultVO>{
    return this.http.post<ResultVO>(this.SERVER + '/api/newsList', params, {headers: this.headers});
  }

}
