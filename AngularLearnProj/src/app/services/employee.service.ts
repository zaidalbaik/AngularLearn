import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatus } from '../Models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = "https://dummy.restapiexample.com/api/v1/employees";

  constructor(private _httpClient: HttpClient) { }

  getStatus(): Observable<IStatus> {
    return this._httpClient.get<IStatus>(this._url);
  }
  // constructor() { }

  //using httpClient
  // can be use Observable with httpClient as return dataType  Observable<IStauts>

  // async getEmployees(): Promise<IStatus> {
  //   const data = await fetch(this._url);
  //   return await data.json() ?? [];
  // }
}
