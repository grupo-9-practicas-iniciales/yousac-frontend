import { Button, TextField, ToogleThemeButton } from "../components";

import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

import { BubblesDark, BubblesLight } from "../assets";

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
  const onSubmit = ({
    idStudent,
    names,
    lastNames,
    email,
    password,
    confirmPassword,
  }: FormState) => {
    console.log(
      typeof idStudent,
      names,
      lastNames,
      email,
      password,
      confirmPassword
    );
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white dark:bg-dark transition-colors duration-[.2]">
      <h1 className="text-3xl font-bold text-primary-light-1 mb-5">
        Regístrate
      </h1>
      <Formik
        initialValues={formInitialState}
        validationSchema={registerFormSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col items-center justify-center w-80 space-y-4 mx-4 p-2 overflow-x-auto">
            <div className="w-full">
              <TextField
                label="Registro Académico"
                placeholder="202100000"
                name="idStudent"
                type="text"
              />
              {errors.idStudent && touched.idStudent ? (
                <ErrorMessage name="idStudent" />
              ) : null}
            </div>
            <div className="w-full">
              <TextField
                label="Nombres"
                placeholder="Juan"
                name="names"
                type="text"
              />
              {errors.names && touched.names ? (
                <ErrorMessage name="names" />
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
                <ErrorMessage name="lastNames" />
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
                <ErrorMessage name="email" />
              ) : null}
            </div>
            <div className="w-full">
              <TextField
                label="Contraseña"
                placeholder=""
                name="password"
                type="password"
              />
              {errors.password && touched.password ? (
                <ErrorMessage name="password" />
              ) : null}
            </div>
            <div className="w-full">
              <TextField
                label="Confirmar Contraseña"
                placeholder=""
                name="confirmPassword"
                type="password"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <ErrorMessage name="confirmPassword" />
              ) : null}
            </div>

            <Button
              variant="secondary"
              className="mr-1 mb-1 btn-block"
              type="submit"
            >
              Guardar
            </Button>
          </Form>
        )}
      </Formik>
      <BubblesLight />
      <BubblesDark />
      <ToogleThemeButton fab={true} />
    </main>
  );
};
