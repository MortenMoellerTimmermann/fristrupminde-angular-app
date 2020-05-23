import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiComponent } from "../../api/api.component";
import { Observable } from "rxjs";
import ICreateStatisticsData from "../interfaces/ICreateStatisticsData";

@Injectable({
  providedIn: "root",
})
export class StatisticsService {
  constructor(private http: HttpClient, private api: ApiComponent) {}

  sendStatisticsData(ICSD: ICreateStatisticsData): Observable<any> {
    return this.http.post<ICreateStatisticsData>(
      this.api.sendStatisticsData(),
      ICSD
    );
  }
}
