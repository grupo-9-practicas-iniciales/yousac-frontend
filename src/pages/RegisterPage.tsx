import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button, TextField, ToogleThemeButton } from "../components";
import { BubblesDark, BubblesLight } from "../assets";

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
  const formSchema = Yup.object().shape({
    IdStudent: Yup.string()
      .required("Campo Requerido")
      .min(8, "Minimo 8 caracteres")
      .max(8, `Máximo 8 caracteres`),
    Names: Yup.string()
      .required("Campo Requerido")
      .min(3, "Minimo 3 caracteres")
      .max(50, `Máximo 50 caracteres`),
    LastNames: Yup.string()
      .required("Campo Requerido")
      .min(3, "Minimo 3 caracteres")
      .max(50, `Máximo 50 caracteres`),
    Email: Yup.string().required("Campo Requerido").email("Correo no válido"),
    Password: Yup.string()
      .required("Campo Requerido")
      .min(8, "Minimo 8 caracteres")
      .max(50, `Máximo 50 caracteres`),
    ConfirmPassword: Yup.string()
      .required("Campo Requerido")
      .oneOf([Yup.ref("Password"), null], "Las contraseñas no coinciden"),
  });

  const onSubmit = (values: FormState) => {
    console.log(values);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white dark:bg-dark transition-colors duration-[.2]">
      <h1 className="text-3xl font-bold text-primary-light-1 mb-5">
        Regístrate
      </h1>
      <Formik
        initialValues={formInitialState}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col items-center justify-center w-80 space-y-4 mx-4 p-2">
          <TextField
            label="Registro Académico"
            placeholder="202100000"
            name="IdStudent"
            type="text"
          />
          <ErrorMessage
            name="IdStudent"
            component="div"
            className="text-error-light-1 bg-dark"
          />
          <TextField
            label="Nombres"
            placeholder="Juan"
            name="Names"
            type="text"
          />
          <ErrorMessage
            name="Names"
            component="div"
            className="text-error-light-1 bg-dark"
          />
          <TextField
            label="Apellidos"
            placeholder="Perez"
            name="LastNames"
            type="text"
          />
          <ErrorMessage
            name="LastNames"
            component="div"
            className="text-error-light-1 bg-dark"
          />
          <TextField
            label="Correo Electrónico"
            placeholder="tu@ejemplo.com"
            name="Email"
            type="email"
          />
          <ErrorMessage
            name="Email"
            component="div"
            className="text-error-light-1 bg-dark"
          />
          <TextField
            label="Contraseña"
            placeholder=""
            name="Password"
            type="password"
          />
          <ErrorMessage
            name="Password"
            component="div"
            className="text-error-light-1 bg-dark"
          />
          <TextField
            label="Confirmar Contraseña"
            placeholder=""
            name="ConfirmPassword"
            type="password"
          />
          <ErrorMessage
            name="ConfirmPassword"
            component="div"
            className="text-error-light-1 bg-dark"
          />

          <Button
            variant="primary"
            className="mr-1 mb-1 btn-block"
            type="submit"
          >
            Guardar
          </Button>
        </Form>
      </Formik>
      <BubblesLight />
      <BubblesDark />
      <ToogleThemeButton fab={true} />
    </main>
  );
};
