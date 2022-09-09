import { Link } from "react-router-dom";
import { Button, TextField, ToogleThemeButton } from "../components";
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
    onResetForm,
    idStudent,
    names,
    lastNames,
    email,
    password,
    confirmPassword,
  } = useForm<FormState>(formInitialState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid().length === 0) {
      console.log("Formulario válido");
      onResetForm();
    } else {
      console.log(isFormValid());
    }
  };

  const isFormValid = () => {
    if (!idStudent.trim().match(/^[0-9]{9}$/)) {
      alert("El número de carnet debe tener 9 dígitos");
      return "El id debe ser de 9 dígitos";
    } else if (!names.trim().match(/^[a-zA-ZÀ-ÿ\s]{1,40}$/)) {
      return "El nombre solo puede contener letras y espacios";
    } else if (!lastNames.trim().match(/^[a-zA-ZÀ-ÿ\s]{1,40}$/)) {
      return "El apellido solo puede contener letras y espacios";
    } else if (
      !email.trim().match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    ) {
      return "El email no es válido";
    } else if (password.trim().length < 6) {
      return "La contraseña debe tener al menos 6 caracteres";
    } else if (password.trim() !== confirmPassword.trim()) {
      return "Las contraseñas no coinciden";
    }
    return "";
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white dark:bg-dark transition-colors duration-[.2]">
      <h1 className="text-3xl font-bold text-primary-light-1 mb-5">
        Regístrate
      </h1>
      <form
        className="flex flex-col items-center justify-center w-80 space-y-4 mx-4 p-2"
        onSubmit={onSubmit}
      >
        <TextField
          type="text"
          errorMessage="El número de carnet debe tener 9 dígitos"
          isRequired={true}
          label="Registro académico"
          placeholder="202100000"
          name="idStudent"
          value={idStudent}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          errorMessage="El número de carnet debe tener 9 dígitos"
          isRequired={true}
          label="Nombres"
          placeholder="Juan"
          name="names"
          value={names}
          onChange={onInputChange}
        />
        <TextField
          errorMessage="El número de carnet debe tener 9 dígitos"
          isRequired={true}
          type="text"
          label="Apellidos"
          placeholder="Pérez"
          name="lastNames"
          value={lastNames}
          onChange={onInputChange}
        />
        <TextField
          errorMessage="El número de carnet debe tener 9 dígitos"
          isRequired={true}
          type="email"
          label="Email"
          placeholder="ejemplo@gmail.com"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <TextField
          errorMessage="El número de carnet debe tener 9 dígitos"
          isRequired={true}
          type="password"
          label="Contraseña"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
        />

        <TextField
          errorMessage="El número de carnet debe tener 9 dígitos"
          isRequired={true}
          type="password"
          label="Confirmar contraseña"
          placeholder="Confirmar password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onInputChange}
        />

        <Button variant="secondary" className="w-full">
          Registrarse
        </Button>
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
