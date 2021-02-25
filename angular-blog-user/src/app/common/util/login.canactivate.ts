import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginCanActivate implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const isLogin = this.loginService.checkLogin();
    const url = window.location.href;
    const params = url.split('?');
    let queryParams = {};
    if (params.length > 1) {
      const param1 = params[1];
      const param1s = param1.split('=');
      if (param1s[0] === 'code') {
        queryParams = {
          code : param1s[1],
        };
      }
    }
    if (!isLogin) {
      this.router.navigate(['/login'], {
        queryParams,
        skipLocationChange: true
      });
    }
    return isLogin;
  }
}
