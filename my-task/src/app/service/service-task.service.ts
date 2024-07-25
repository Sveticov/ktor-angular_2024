import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyTask} from "../model/MyTask";

@Injectable({
  providedIn: 'root'
})
export class ServiceTaskService {

  constructor(private http: HttpClient) { }

  getTask():Observable<MyTask>{
    return this.http.get<MyTask>("http://localhost:8080/mytask")//this.http.get("http://localhost:8080/mytask")
  }
}
