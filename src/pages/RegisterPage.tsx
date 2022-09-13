import { Button, Spinner, TextField } from "../components";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { BubblesDark, BubblesLight } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessageField } from "../components/ui/textField/ErrorMessageField";
import { useApi, useNewTitle } from "../hooks";
import { ApiUserCreateRequest, APIUserCreateResponse } from "../api";
import { useEffect } from "react";

const formInitialState = {
  idStudent: "",
  names: "",
  lastNames: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const registerFormSchema = Yup.object().shape({
  idStudent: Yup.number()
    .required("El número de identificación es requerido")
    .positive("El número de identificación no puede ser negativo")
    .integer("El número de identificación debe ser un número entero")
    .test(
      "len",
      "El número de identificación debe tener 9 dígitos",
      (val) => val?.toString().length === 9
    ),
  names: Yup.string()
    .required("Campo Requerido")
    .min(3, "Minimo 3 caracteres")
    .max(50, `Máximo 50 caracteres`),
  lastNames: Yup.string()
    .required("Campo Requerido")
    .min(3, "Minimo 3 caracteres")
    .max(50, `Máximo 50 caracteres`),
  email: Yup.string().required("Campo Requerido").email("Correo no válido"),
  password: Yup.string()
    .required("Campo Requerido")
    .min(8, "Minimo 8 caracteres")
    .max(50, `Máximo 50 caracteres`),
  confirmPassword: Yup.string()
    .required("Campo Requerido")
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
});

type FormState = typeof formInitialState;

export const RegisterPage = () => {
  const { isLoading, perfomFetch, response } = useApi<APIUserCreateResponse>();
  const navigate = useNavigate();

  const onSubmit = ({
    idStudent,
    names,
    lastNames,
    email,
    password,
    confirmPassword,
  }: FormState) => {
    const body: ApiUserCreateRequest = {
      idStudent,
      names,
      lastnames: lastNames,
      email,
      password,
      password2: confirmPassword,
    };

    perfomFetch({
      url: "/user/create",
      method: "post",
      body,
    });
  };

  useEffect(() => {
    if (response) {
      if (response.ok) {
        navigate("/login", {
          replace: true,
        });
      }
    }
  }, [response]);

  useNewTitle("Registro");

  return (
    <>
      <main className=" min-h-screen bg-white dark:bg-dark transition-colors duration-[.2]">
        <Formik
          initialValues={formInitialState}
          validationSchema={registerFormSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="py-[50px] mx-auto flex flex-col items-center justify-center w-5/6 lg:w-3/5 xl:w-1/3 space-y-4 p-2">
              <h1 className="text-3xl text-center font-bold text-primary-light-1 mb-5">
                Regístrate
              </h1>
              <div className="md:max-h-screen overflow-auto w-full px-1">
                <TextField
                  label="Registro Académico"
                  placeholder="202100000"
                  name="idStudent"
                  type="number"
                />
                {errors.idStudent && touched.idStudent ? (
                  <ErrorMessageField message={errors.idStudent} />
                ) : null}
                <div className="w-full">
                  <TextField
                    label="Nombres"
                    placeholder="Juan"
                    name="names"
                    type="text"
                  />
                  {errors.names && touched.names ? (
                    <ErrorMessageField message={errors.names} />
                  ) : null}
                </div>
                <div className="w-full">
                  <TextField
                    label="Apellidos"
                    placeholder="Perez"
                    name="lastNames"
                    type="text"
                  />
                  {errors.lastNames && touched.lastNames ? (
                    <ErrorMessageField message={errors.lastNames} />
                  ) : null}
                </div>
                <div className="w-full">
                  <TextField
                    label="Correo Electrónico"
                    placeholder="tu@ejemplo.com"
                    name="email"
                    type="email"
                  />
                  {errors.email && touched.email ? (
                    <ErrorMessageField message={errors.email} />
                  ) : null}
                </div>
                <div className="w-full">
                  <TextField
                    label="Contraseña"
                    placeholder=""
                    name="password"
                    type="password"
                    autoComplete="off"
                  />
                  {errors.password && touched.password ? (
                    <ErrorMessageField message={errors.password} />
                  ) : null}
                </div>
                <div className="w-full">
                  <TextField
                    label="Confirmar Contraseña"
                    placeholder=""
                    name="confirmPassword"
                    type="password"
                    autoComplete="off"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <ErrorMessageField message={errors.confirmPassword} />
                  ) : null}
                </div>
              </div>
              <Button disabled={isLoading} variant="secondary" type="submit">
                Guardar
              </Button>
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
            </Form>
          )}
        </Formik>
        {/* <BubblesLight /> */}
        {/* <BubblesDark /> */}
      </main>
    </>
  );
};
