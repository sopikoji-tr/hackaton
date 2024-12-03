import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable()
export class MainUrlInterceptor implements HttpInterceptor {
  private backendUrl = environment.apiUrl;
  // Replace with your backend URL

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Only modify URLs starting with '/api'
    if (request.url.startsWith('/api')) {
      const updatedRequest = request.clone({
        url: `${this.backendUrl}${request.url}`, // Prepend the backend URL
      });
      return next.handle(updatedRequest);
    }
    return next.handle(request); // Pass through other requests unmodified
  }
}
