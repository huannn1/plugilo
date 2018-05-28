import { AuthState } from "./auth/store/states/auth.state";
import { I18nState } from "./i18n/store/reducers/i18n.reducer";

// This should hold the AppState interface
// Ideally importing all the substate for the application

/**
 *
 *
 * @export
 * @interface IAppState
 */
export interface IAppState {
  auth: AuthState;
  i18n: I18nState
}
