import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import { Button, TextField, ToogleThemeButton } from "../components";

import { BubblesDark, BubblesLight } from "../assets";
import { useAuthStore } from "../hooks/useAuthStore";
import { ApiAuthRequest } from "../api/api.types";

const formInitialState = {
  email: "",
  password: "",
};

type FormState = typeof formInitialState;

export const LoginPage = () => {
  const { startLogin } = useAuthStore();

  const onSubmit = ({ email, password }: FormState) => {
    const credentials: ApiAuthRequest = { email, password };
    startLogin(credentials);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white dark:bg-dark transition-colors duration-[.2]">
      <h1>Iniciar Sesión</h1>
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
            name="password"
          />
          <Button variant="secondary" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
      </Formik>
      <div className="flex flex-col justify-center text-center text-xs tracking-wide">
        <p className="mt-6">
          <span className="font-light text-primary-light-1">
            ¿No tienes cuenta?{" "}
          </span>
          <Link
            to="/register"
            className="font-semibold text-primary-light-1 font-base"
          >
            Crear cuenta
          </Link>{" "}
        </p>
        <Link
          to="/recovery"
          className="font-semibold text-primary-light-1 font-base mt-6"
        >
          Recuperar contraseña
        </Link>
      </div>
      <ToogleThemeButton fab={true} />
      <BubblesDark />
      <BubblesLight />
    </main>
  );
};
