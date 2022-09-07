import { useContext } from "react";

import { ApiAuthResponse, yousacApi, ApiAuthRequest } from "../api/";
import { AuthContext } from "../context/auth";

export const useAuthStore = () => {
  const { status, user, errorMsg, checkingAuth, login, logout, clearErrorMsg } =
    useContext(AuthContext);

  const startLogin = async (userCredentials: ApiAuthRequest) => {
    try {
      checkingAuth();

      const { data } = await yousacApi.post<ApiAuthResponse>(
        "/auth",
        userCredentials
      );

      if (data.ok) {
        login(data.user);
        localStorage.setItem("token", data.user.token);
        return;
      }
      logout(data.errorMsg);
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
      const token = localStorage.getItem("token");

      if (token) {
        const { data } = await yousacApi.post<ApiAuthResponse>(
          "/auth/revalidate",
          token
        );

        if (data.ok) {
          login(data.user);
          localStorage.setItem("token", data.user.token);
          return;
        }
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
