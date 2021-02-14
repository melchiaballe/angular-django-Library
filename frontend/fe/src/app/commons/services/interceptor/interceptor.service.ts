import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor{
  token;

  constructor(
  	private injector: Injector,
  	private router: Router
  ) { }

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable <HttpEvent<any>>{		
  	let tokenService = this.injector.get(UserService);
  	this.token = tokenService.getToken();
  	
  	let request = req.clone({
  		setHeaders:{
  		  	Authorization: `Token ${this.token}`
  		}
  	});
  	return next.handle(request).pipe(
		  catchError((error: HttpErrorResponse) => {
		    if (error.status === 401) {
		      this.router.navigate(['']);
		    }
		    return throwError(error);
		  })
  	);

  }
}