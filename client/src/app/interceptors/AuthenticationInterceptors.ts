import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { authenticationService } from "../../app/services/authentication.service";

@Injectable()

export class AuthenticationInterceptors implements HttpInterceptor {
    constructor(private authService: authenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer" + authToken
            }
        });
        return next.handle(req);
    }
}