import { Link } from "react-router-dom";
import { Button, Input, ToogleThemeButton } from "../components";
import {
  BubbleDark,
  BubbleLight,
  BubbleDarkTiny,
  BubbleLightTiny,
} from "../assets";

import { useAuthStore, useForm } from "../hooks";

const formInitialState = {
  email: "",
  password: "",
};

type FormState = typeof formInitialState;

export const LoginPage = () => {
  const { onInputChange, email, password } =
    useForm<FormState>(formInitialState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-dark transition-colors duration-[.2]">
      <h1>Iniciar Sesión</h1>
      <form
        className="flex flex-col items-center justify-center w-80 space-y-4 mx-4 p-2"
        onSubmit={onSubmit}
      >
        <Input
          placeholder="Email"
          name="email"
          value={email}
          className="w-full"
          onChange={onInputChange}
        />
        <Input
          placeholder="Password"
          name="password"
          value={password}
          className="w-full"
          onChange={onInputChange}
        />
        <Button text="Iniciar Sesión" variant="secondary" className="w-full" />
      </form>
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
      <BubbleDark />
      <BubbleLight />
      <BubbleDarkTiny />
      <BubbleLightTiny />
    </div>
  );
};
