import { Injectable } from '@angular/core';
import { LogInterface } from '../models/log.interface';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    logs: LogInterface[] = [
        {
          id: 1,
          application_name: 'Error and Code',
          code_snippet: 'console.log("Error")',
          error_message: 'ReferenceError: x is not defined',
          suggestion: 'Declare the variable x before using it.',
          created_at: '2024-12-02',
          status: '',
        },
        {
          id: 2,
          application_name: 'Error and Code',
          code_snippet: 'let x = 5; console.log(x)',
          error_message: 'No error',
          suggestion: 'None needed',
          created_at: '2024-12-03',
          status: 'Resolved',
        },
      ];

    constructor(private http: HttpClient) {
    }

    getLogs() {
        return this.http.get('/api/error-and-code'); // Automatically converted to 'http://localhost:8000/api/error-and-code'
      }

    // getLogs()    {
    //     return of(this.logs) ;
    // }
}
