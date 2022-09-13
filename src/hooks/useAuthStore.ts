import { useContext } from "react";
import { ApiAuthLoginRequest, ApiAuthLoginResponse, ApiAuthRevalidateResponse, ApiGetUserByIdResponse, yousacApi } from "../api";

import { AuthContext } from "../context/auth";
import toast from 'react-hot-toast';

export const useAuthStore = () => {
  const { status, user, errorMsg, checkingAuth, login, logout, clearErrorMsg, updateUserInfo } =
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
        toast.success("Bienvenido", {
          icon: "👋",
        });
        return;
      }
      logout(msg);
    } catch (error) {
      toast.error("Credenciales incorrectas");
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
      logout("Error en la autenticación");
    }
  };

  const startUpdateUserInfo = async () => {
    try {
      const { data } = await yousacApi.get<ApiGetUserByIdResponse>(`/user/${user.idUser}`);
      updateUserInfo(data.user);
    } catch (error) {

    }
  }

  return {
    status,
    user,
    errorMsg,
    startLogin,
    startLogout,
    clearErrorMsg,
    checkAuth,
    startUpdateUserInfo
  };
};
