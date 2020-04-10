import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiComponent } from "../../api/api.component";
import ITask from "../../interfaces/ITask";
import ICreateTask from "../../interfaces/ICreateTask";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private http: HttpClient, private api: ApiComponent) {}

  getTasks(): Observable<ITask[]> {
    return this.http
      .get<ITask[]>(this.api.getTasks())
      .pipe(catchError(this.handleError));
  }

  createTask(task: ICreateTask): Observable<any> {
    return this.http
      .post<ICreateTask>(this.api.postTasks(), task)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
