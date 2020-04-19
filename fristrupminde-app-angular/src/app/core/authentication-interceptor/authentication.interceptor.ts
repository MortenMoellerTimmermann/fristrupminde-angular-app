import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { AuthComponent } from "src/app/authentication/auth";
import { Router } from "@angular/router";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private auth: AuthComponent, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        return this.handleError(err, request, next);
      })
    );
  }
  handleError(err, request: HttpRequest<any>, next: HttpHandler) {
    //Authentication error.
    if (err.status === 401) {
      this.auth.logout();
      this.router.navigate(["/login"]);
      return next.handle(request);
    }
    //Everything else
    return next.handle(request);
  }
}
