import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import { Button, TextField } from "../components";

import { BubblesDark, BubblesLight } from "../assets";
import { useAuthStore, useNewTitle } from "../hooks";
import { ApiAuthLoginRequest } from "../api";

const formInitialState = {
  email: "",
  password: "",
};

type FormState = typeof formInitialState;

export const LoginPage = () => {
  const { startLogin } = useAuthStore();
  useNewTitle("Iniciar Sesión");

  const onSubmit = ({ email, password }: FormState) => {
    const credentials: ApiAuthLoginRequest = { email, password };
    startLogin(credentials);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white dark:bg-dark transition-colors duration-[.2]">
      <h1 className="font-semibold text-primary-light-1 dark:text-white text-xl md:text-2xl lg:text-3xl">
        Iniciar Sesión
      </h1>
      <Formik initialValues={formInitialState} onSubmit={onSubmit}>
        <Form className="flex flex-col items-center justify-center w-80 space-y-4 mx-4 p-2">
          <TextField
            label="Email"
            placeholder="example@gmail.com"
            name="email"
          />
          <TextField
            label="Contraseña"
            placeholder="Password"
            type="password"
            name="password"
          />
          <Button variant="secondary" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
      </Formik>
      <div className="flex flex-col justify-center text-center text-xs tracking-wide">
        <p className="mt-6">
          <span className="font-light md:text-base text-primary-light-1 dark:text-white">
            ¿No tienes cuenta?{" "}
          </span>
          <Link
            to="/register"
            className="font-semibold md:text-base text-primary-light-1  dark:text-white"
          >
            Crear cuenta
          </Link>{" "}
        </p>
        <Link
          to="/recovery"
          className="font-semibold md:text-base text-primary-light-1 mt-6 dark:text-white"
        >
          Recuperar contraseña
        </Link>
      </div>
      <BubblesDark />
      <BubblesLight />
    </main>
  );
};
