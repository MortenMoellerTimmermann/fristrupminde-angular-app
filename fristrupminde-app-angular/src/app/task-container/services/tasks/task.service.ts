import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiComponent } from "../../../api/api.component";
import ITask from "../../interfaces/ITask";
import ICreateTask from "../../interfaces/ICreateTask";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import IAssignTask from "../../interfaces/IAssignTask";
import IFinishTask from "../../interfaces/IFinishTask";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private http: HttpClient, private api: ApiComponent) {}

  getAllTasks(): Observable<ITask[]> {
    return this.http
      .get<ITask[]>(this.api.getAllTasks())
      .pipe(catchError(this.handleError));
  }

  getAvailableTasks(): Observable<ITask[]> {
    return this.http
      .get<ITask[]>(this.api.getAvailableTasks())
      .pipe(catchError(this.handleError));
  }

  getUserTasks(): Observable<ITask[]> {
    return this.http
      .get<ITask[]>(this.api.getUserTasks())
      .pipe(catchError(this.handleError));
  }

  createTask(task: ICreateTask): Observable<any> {
    return this.http
      .post<ICreateTask>(this.api.createTask(), task)
      .pipe(catchError(this.handleError));
  }

  assignTaskToUser(assignTask: IAssignTask): Observable<any> {
    return this.http
      .post(this.api.assignTaskToUser(), assignTask)
      .pipe(catchError(this.handleError));
  }

  finishTask(finishTask: IFinishTask): Observable<any> {
    return this.http
      .put(this.api.finishTask(), finishTask)
      .pipe(catchError(this.handleError));
  }

  getUserEmails(): Observable<String[]> {
    return this.http
      .get<String[]>(this.api.getUserEmails())
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
    return throwError(errorMessage);
  }
}
