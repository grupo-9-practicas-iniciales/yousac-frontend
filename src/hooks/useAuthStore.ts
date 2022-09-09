import { useContext } from "react";
import { ApiAuthLoginRequest, ApiAuthLoginResponse, ApiAuthRevalidateResponse, yousacApi } from "../api";

import { AuthContext } from "../context/auth";

export const useAuthStore = () => {
  const { status, user, errorMsg, checkingAuth, login, logout, clearErrorMsg } =
    useContext(AuthContext);



  const startLogin = async (userCredentials: ApiAuthLoginRequest) => {
    try {
      checkingAuth();

      const { data } = await yousacApi.post<ApiAuthLoginResponse>(
        "/auth",
        userCredentials
      );

      const { user, token, ok, errors, msg } = data;

      if (ok) {
        login(user, token);
        return;
      }
      logout(msg);
    } catch (error) {
      console.log(error);
      logout("Error en la autenticación");
    }
  };

  const startLogout = () => {
    logout(null);
  };

  const checkAuth = async () => {
    try {

      const { data } = await yousacApi.post<ApiAuthRevalidateResponse>("/auth/revalidate");

      const { user, token, ok } = data;

      if (ok) {
        login(user, token);
        return;
      }

      logout(null);
    } catch (error) {
      console.log(error);
      logout("Error en la autenticación");
    }
  };

  return {
    status,
    user,
    errorMsg,
    startLogin,
    startLogout,
    clearErrorMsg,
    checkAuth,
  };
};
