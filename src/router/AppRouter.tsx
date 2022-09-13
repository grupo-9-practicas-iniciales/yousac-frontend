import { Routes, Route, Link } from "react-router-dom";
import { AddIcon } from "../assets";
import { Button, Spinner } from "../components";
import { useCheckAuth } from "../hooks";
import {
  CreatePostPage,
  LandingPage,
  LoginPage,
  MainAppPage,
  PostPage,
  ProfilePage,
  RegisterPage,
  SettingsPage,
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
      {status === "authenticated" && (
        <Button
          className="h-[40px] lg:h-[45px]
          w-[40px] lg:w-[45px] fixed right-4 bottom-14 flex justify-center items-center rounded-[50%] my-5"
          variant="fourth"
        >
          <Link to="/create/post">
            <AddIcon className="text-3xl" />
          </Link>
        </Button>
      )}
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
          path="/profile/user"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <SettingsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/post"
          element={
            <PrivateRoute>
              <PostPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/create/post"
          element={
            <PrivateRoute>
              <CreatePostPage />
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
