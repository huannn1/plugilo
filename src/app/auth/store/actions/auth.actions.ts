import { Action } from '@ngrx/store';

export class AuthActions {
  static LOGIN = 'LOGIN';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGOUT = 'LOGOUT';
  static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
  static AUTHORIZE = 'AUTHORIZE';

  authorize() {
    return { type: AuthActions.AUTHORIZE };
  }

  login() {
    return { type: AuthActions.LOGIN };
  }

  loginSuccess() {
    return { type: AuthActions.LOGIN_SUCCESS };
  }

  logout() {
    return { type: AuthActions.LOGOUT };
  }

  logoutSuccess() {
    return { type: AuthActions.LOGOUT_SUCCESS };
  }
}


export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export class Login implements Action {
  readonly type = LOGIN;
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: any) { }
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) { }
}


// export type AuthActions = Login | LoginFail | LoginSuccess;