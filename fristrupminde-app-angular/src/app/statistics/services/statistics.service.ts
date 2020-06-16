import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiComponent } from "../../api/api.component";
import { Observable } from "rxjs";
import IStatisticsData from "../interfaces/IStatisticsData";

@Injectable({
  providedIn: "root",
})
export class StatisticsService {
  constructor(private http: HttpClient, private api: ApiComponent) {}

  getStatisticsData(): Observable<any> {
    return this.http.get<Array<IStatisticsData>>(this.api.getStatisticsData());
  }

  sendStatisticsData(ISD: IStatisticsData): Observable<any> {
    return this.http.post<IStatisticsData>(this.api.sendStatisticsData(), ISD);
  }
}
