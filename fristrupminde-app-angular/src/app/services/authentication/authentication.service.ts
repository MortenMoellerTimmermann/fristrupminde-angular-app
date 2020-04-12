import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiComponent } from "../../api/api.component";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import ILoginDTO from "src/app/interfaces/ILoginDTO";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private api: ApiComponent,
    private router: Router
  ) {}

  signInWithEmail(User: ILoginDTO): Observable<any> {
    return this.http
      .post<ILoginDTO>(this.api.login(), User)
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
