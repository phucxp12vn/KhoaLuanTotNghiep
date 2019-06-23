import Service from 'core/service';

class LoginService extends Service {

  async login(params) {
    return await this.post('/sign-in', params);
  }

}
export default LoginService;
