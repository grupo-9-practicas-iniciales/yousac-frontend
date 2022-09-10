import { Routes, Route } from "react-router-dom";
import { Spinner } from "../components";
import { useCheckAuth } from "../hooks";
import {
  LandingPage,
  LoginPage,
  MainAppPage,
  ProfilePage,
  RegisterPage,
} from "../pages";
import { PublicRoute, PrivateRoute } from "./";
import { RecoveryRouter } from "./RecoveryRouter";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <Spinner />;
  }

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          path="/recovery/*"
          element={
            <PublicRoute>
              <RecoveryRouter />
            </PublicRoute>
          }
        />

        <Route
          path="/profile/user/:idStudent"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/app"
          element={
            <PrivateRoute>
              <MainAppPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          }
        />
      </Routes>

    </>
  );
};
