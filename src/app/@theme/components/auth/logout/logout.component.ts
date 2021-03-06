/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NB_AUTH_OPTIONS } from '../../../../../../node_modules/@nebular/auth/auth.options';
import { getDeepFromObject } from '../../../../../../node_modules/@nebular/auth/helpers';
import { NbAuthService } from '../../../../../../node_modules/@nebular/auth/services/auth.service';
import { NbAuthResult } from '../../../../../../node_modules/@nebular/auth/services/auth-result';

@Component({
  selector: 'ngx-logout',
  template: `
    <div>Redireccionando al Login, espera por favor... </div>
  `,
})
export class NgxLogoutComponent implements OnInit {

  redirectDelay: number = 0;
  strategy: string = '';

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected router: Router) {
    this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
    this.strategy = this.getConfigValue('forms.logout.strategy');
  }

  ngOnInit(): void {
    this.logout(this.strategy);
  }

  logout(strategy: string): void {
    this.service.logout(strategy).subscribe((result: NbAuthResult) => {

        // const redirect = result.getRedirect();
        const redirect = '/auth/login';
      if (redirect) {
        localStorage.removeItem('auth_app_token');
        localStorage.removeItem('identity');
        setTimeout(() => {
          // Iniciativa Temporal
          location.reload();
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
