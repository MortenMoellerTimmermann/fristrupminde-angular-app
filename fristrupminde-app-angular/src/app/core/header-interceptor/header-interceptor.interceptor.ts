import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthComponent } from "src/app/authentication/auth";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private auth: AuthComponent) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let jsonReq: HttpRequest<any> = request.clone({
      setHeaders: {
        Authorization: this.auth.getToken(),
        observe: "response",
        "Content-Type": "application/json",
      },
    });

    return next.handle(jsonReq);
  }
}
