import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiComponent } from "../../api/api.component";
import ITask from "../../interfaces/ITask";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(private http: HttpClient, private api: ApiComponent) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.api.getTasks());
  }

  addTask(task: ITask): Observable<any> {
    return this.http.post<ITask>("https://localhost:5001/api/postTask", task);
  }
}
