import { FC, ReactNode, useReducer } from "react";
import { AuthContext, AuthState, authReducer, User } from "./";

interface AuthProviderProps {
  children: ReactNode;
}
export const testInitialUser: User = {
  names: "",
  lastnames: "",
  email: "",
  idStudent: "",
  idUser: "",
  token: "",
};

const Auth_INITIAL_STATE: AuthState = {
  status: "checking",
  errorMsg: null,
  user: testInitialUser,
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  const login = (user: User) => {
    dispatch({
      type: "AUTH-login",
      payload: user,
    });
  };

  const logout = (errorMsg: string | null) => {
    dispatch({
      type: "AUTH-logout",
      payload: errorMsg,
    });
  };

  const clearErrorMsg = () => {
    dispatch({
      type: "AUTH-clear-errorMsg",
    });
  };

  const checkingAuth = () => {
    dispatch({
      type: "AUTH-check",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        // * functions
        login,
        logout,
        clearErrorMsg,
        checkingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
