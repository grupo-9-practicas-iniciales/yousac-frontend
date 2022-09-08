import { Link } from "react-router-dom";
import { Button, Input, ToogleThemeButton } from "../components";
import { BubblesDark, BubblesLight } from "../assets";

import { useForm } from "../hooks";

const formInitialState = {
  idStudent: "",
  names: "",
  lastNames: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type FormState = typeof formInitialState;

export const RegisterPage = () => {
  const {
    onInputChange,
    idStudent,
    names,
    lastNames,
    email,
    password,
    confirmPassword,
  } = useForm<FormState>(formInitialState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white dark:bg-dark transition-colors duration-[.2]">
      <h1 className="text-3xl font-bold text-primary-light-1 dark:text-white">
        Regístrate
      </h1>
      <form
        className="flex flex-col items-center justify-center w-80 space-y-4 mx-4 p-2"
        onSubmit={onSubmit}
      >
        <Input
          label="Registro académico"
          placeholder="202100000"
          name="idStudent"
          value={idStudent}
          classStyles=""
          onChange={onInputChange}
        />
        <Input
          label="Nombres"
          placeholder="Juan"
          name="names"
          value={names}
          classStyles="w-full"
          onChange={onInputChange}
        />
        <Input
          label="Apellidos"
          placeholder="Pérez"
          name="lastNames"
          value={lastNames}
          classStyles="w-full"
          onChange={onInputChange}
        />
        <Input
          label="Email"
          placeholder="example@gmail.com"
          name="email"
          value={email}
          classStyles="w-full"
          onChange={onInputChange}
        />
        <Input
          label="Contraseña"
          placeholder="Password"
          name="password"
          value={password}
          classStyles="w-full"
          onChange={onInputChange}
        />

        <Input
          label="Confirmar contraseña"
          placeholder="password"
          name="confirmPassword"
          value={confirmPassword}
          classStyles="w-full"
          onChange={onInputChange}
        />

        <Button text="Registrate" variant="secondary" className="w-full" />
      </form>
      <div className="flex flex-col justify-center text-center text-xs tracking-wide">
        <p className="mt-6">
          <span className="font-light text-primary-light-1">
            ¿Ya tienes cuenta?{" "}
          </span>
          <Link
            to="/login"
            className="font-semibold text-primary-light-1 font-base"
          >
            Inicia sesión aquí
          </Link>{" "}
        </p>
      </div>
      <ToogleThemeButton fab={true} />
      <BubblesDark />
      <BubblesLight />
    </main>
  );
};
