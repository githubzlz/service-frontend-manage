import {environment} from 'src/environments/environment';
import {Injectable} from '@angular/core';
import {HttpService} from '../../util/http.service';
import {LoginUser} from '../../model/userinfo/loginuser.model';
import {MessageShowEnum} from '../../constant/message.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  /**
   * 后台服务地址
   */
  baseUrl = environment.BASE_DATA_SERVER_URL;
  /**
   * 后台登陆地址，授权地址
   */
  oauthLogin = environment.OAUTH_LOGIN;

  constructor(private http: HttpService) {}

  /**
   * 获取token
   */
  getToken(code) {
    const url = `${this.oauthLogin}/login/token?code=${code}`;
    return this.http.get(url, MessageShowEnum.NONE);
  }

  /**
   * 获取登录用户信息
   */
  loginUserInfo() {
    const url = `${this.baseUrl}/authentication/get/authenticationinfo`;
    return this.http.get(url, MessageShowEnum.ALL);
  }

  /**
   * 查询用户列表
   * @param user
   */
  userList(user: LoginUser) {
    const url = `${this.baseUrl}/user/list`;
    return this.http.post(url, user, MessageShowEnum.UNAUTHORIZED_ERROR);
  }

}
