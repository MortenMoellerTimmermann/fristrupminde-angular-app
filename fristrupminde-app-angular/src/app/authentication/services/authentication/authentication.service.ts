import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ApiComponent } from "../../../api/api.component";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import ILoginDTO from "src/app/authentication/interfaces/ILoginDTO";
import IRegisterDTO from "../../interfaces/IRegisterDTO";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private api: ApiComponent,
    private router: Router
  ) {}

  signInWithEmail(user: ILoginDTO): Observable<any> {
    return this.http
      .post<ILoginDTO>(this.api.login(), user)
      .pipe(catchError(this.handleError));
  }

  register(user: IRegisterDTO): Observable<any> {
    return this.http
      .post<IRegisterDTO>(this.api.register(), user)
      .pipe(catchError(this.handleError));
  }

  validateToken(): Observable<any> {
    return this.http
      .post<String>(this.api.validateToken(), null, this.api.getHeader())
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
      if (error.status === 200) {
        return [];
      }
    }
    return throwError(errorMessage);
  }
}
