import { Component, Input, OnInit } from '@angular/core';
import { LogInterface } from '../../models/log.interface';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-log-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.scss']
})
export class LogDetailComponent implements OnInit {
  @Input() log!: LogInterface | null;

  ngOnInit(): void {
    console.log('LogDetailComponent', this.log);
  }

  constructor(private mainService: MainService) {
    this.log = this.mainService.getLogs()[0];

    this.log.error_message = `Warning:   111:34  warning  'url' is defined but never used                                                                                                                                                    @typescript-eslint/no-unused-vars

    /home/runner/_work/etoro-assets/etoro-assets/etoro/apps/etoro/src/app/user/ui/user-header/user-header.component.ts
       25:1   warning  Static imports of lazy-loaded libraries are forbidden.
    
    Library "settings" is lazy-loaded in these files:
    - apps/etoro/src/app/routes/documents.ts
    - apps/etoro/src/app/routes.ts  @nx/enforce-module-boundaries
    Warning:   161:36  warning  Do not access Object.prototype method 'hasOwnProperty' from target object                                                                                                          no-prototype-builtins
    
    /home/runner/_work/etoro-assets/etoro-assets/etoro/apps/etoro/src/app/user/ui/user-mobile-header/user-mobile-header.component.spec.ts
      5:1  warning  Static imports of lazy-loaded libraries are forbidden.`;
   
      this.log.code_snippet = `  ngOnInit() {
        this.setBadgeCountryDisplayName();
        this.riskScore = this.userData.userRanking?.RiskScore;
        this.isBiggerUserName =
          !this.userData.isAnalyst &&
          (this.userData.isMyUserMode || !this.user.optOut);
        this._setBreadcrumbs();
        this.pubSubService.publishEvent('userSettings:OptOut:set', { optOutFlag: this.user.optOut });
        this._setHideUsernameLabel();
        this.cdr.markForCheck();
      }
    
      private setBadgeCountryDisplayName(): void {
        this._badgeCountryDisplayName = this.userCountry?.displayName;
      }`;
   
      this.log.suggestion = `
      Static imports of lazy-loaded libraries are forbidden
      This warning suggests that you are statically importing a library that is configured for lazy loading. To fix this:

      a. Replace the static import with a dynamic import:
      If you need to load the library only when it's required, use dynamic import().

      b. If lazy loading is unnecessary:
      Check whether the library really needs to be lazy-loaded. If not, you can move the library to a non-lazy-loaded module and remove its configuration for lazy loading.

      c. Update the lazy-loaded module boundaries:
      Ensure that the library stays within the modules configured for lazy loading. For example:

      Keep the settings library imports limited to documents.ts and routes.ts.
      If the library is being imported elsewhere by mistake, refactor those imports to comply with module boundaries.
      `;
   
    }


}
