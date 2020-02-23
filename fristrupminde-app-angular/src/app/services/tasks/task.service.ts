import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiComponent } from "../../api/api.component";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentChangeAction
} from "angularfire2/firestore";
import ITask from "../../interfaces/ITask";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  public tasks: Observable<DocumentChangeAction<ITask>[]>;
  private tasksCol: AngularFirestoreCollection<ITask>;

  constructor(
    private db: AngularFirestore,
    private http: HttpClient,
    private api: ApiComponent
  ) {
    this.tasksCol = this.db.collection<ITask>("task");
  }

  getTasks(): Observable<any> {
    let tasks = this.http.get<ITask[]>(this.api.getTasks());
    return tasks;
  }

  addTask(task: ITask): Observable<any> {
    return this.http.post<ITask>("https://localhost:5001/api/postTask", task);
  }

  deleteTask(task: ITask): void {
    this.tasksCol.doc("task/" + task.ID).delete();
  }
}
