import { AuthState, authActionType } from "./";
import { testInitialUser } from "./AuthProvider";

export const authReducer = (
  state: AuthState,
  action: authActionType
): AuthState => {
  switch (action.type) {
    case "AUTH-check":
      return {
        ...state,
        status: "checking",
        user: testInitialUser,
        errorMsg: null,
      };

    case "AUTH-login":
      return {
        ...state,
        status: "authenticated",
        user: action.payload,
        errorMsg: null,
      };

    case "AUTH-logout":
      return {
        ...state,
        status: "not-authenticated",
        user: testInitialUser,
        errorMsg: action.payload,
      };

    case "AUTH-clear-errorMsg":
      return {
        ...state,
        errorMsg: null,
      };

    default:
      return state;
  }
};
