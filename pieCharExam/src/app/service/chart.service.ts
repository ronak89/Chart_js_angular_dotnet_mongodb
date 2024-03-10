import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Import HttpClient instead of HttpClientModule
import { AddChartDataRequest, ChartDat } from '../models/ChartData.models';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private http: HttpClient) {}

  private apiBaseUrl = 'https://localhost:7182';

  getAllCategories(): Observable<ChartDat[]> {
    debugger;
    return this.http.get<ChartDat[]>(`${this.apiBaseUrl}/api/ChartData`);
  }
  getData(): Observable<any> {
    debugger;
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
