import { Injectable } from '@angular/core';
import { LogInterface } from '../models/log.interface';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    logs: LogInterface[] = [
        {
          id: 1,
          code_snippet: 'console.log("Error")',
          error_message: 'ReferenceError: x is not defined',
          suggestion: 'Declare the variable x before using it.',
          created_at: '2024-12-02',
          status: 'Open',
        },
        {
          id: 2,
          code_snippet: 'let x = 5; console.log(x)',
          error_message: 'No error',
          suggestion: 'None needed',
          created_at: '2024-12-03',
          status: 'Resolved',
        },
      ];
    
    constructor() {
this.logs[0].error_message = `Warning:   161:36  warning  Do not access Object.prototype method 'hasOwnProperty' from target object                                                                                                          no-prototype-builtins

/home/runner/_work/etoro-assets/etoro-assets/etoro/apps/etoro/src/app/user/ui/user-mobile-header/user-mobile-header.component.spec.ts
  5:1  warning  Static imports of lazy-loaded libraries are forbidden.

Library "discovery" is lazy-loaded in these files:
- apps/etoro/src/app/routes/discover.ts  @nx/enforce-module-boundaries

/home/runner/_work/etoro-assets/etoro-assets/etoro/apps/etoro/src/app/user/ui/user-mobile-header/user-mobile-header.component.ts
  15:1  warning  Static imports of lazy-loaded libraries are forbidden.

Library "discovery" is lazy-loaded in these files:
- apps/etoro/src/app/routes/discover.ts  @nx/enforce-module-boundaries`;

     }

    getLogs(): LogInterface [] {
        return this.logs;
    }
}