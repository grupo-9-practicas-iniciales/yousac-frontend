import * as Yup from "yup";

import { Form, Formik } from "formik";
import { BubblesDark, BubblesLight } from "../assets";
import { Button, TextField, ErrorMessageField } from "../components";
import { useParams, Navigate } from "react-router-dom";
import { useChangePassword, useNewTitle } from "../hooks";

const changePasswordFormSchema = Yup.object().shape({
  password: Yup.string()
    .required("Campo Requerido")
    .min(8, "Minimo 8 caracteres")
    .max(50, `Máximo 50 caracteres`),
  confirmPassword: Yup.string()
    .required("Campo Requerido")
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
});

export const ChangePasswordPage = () => {
  const { token } = useParams();

  if (!token) {
    return <Navigate to="/recovery" />;
  }

  const { isCheking, changePassword } = useChangePassword(token);

  const onSubmit = ({ password, confirmPassword }: any) => {
    changePassword(password, confirmPassword);
  };

  useNewTitle("Cambiar Contraseña");

  return (
    <main className="flex flex-col justify-center items-center bg-light dark:bg-dark min-h-screen">
      <h1>Ingresa la nueva contraseña</h1>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={changePasswordFormSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col w-8/12 md:w-4/12 my-10 space-y-5">
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
                label="Confirmar contraseña"
                placeholder=""
                name="confirmPassword"
                type="password"
                autoComplete="off"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <ErrorMessageField message={errors.confirmPassword} />
              ) : null}
            </div>
            <Button type="submit" variant="secondary">
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
      <BubblesDark />
      <BubblesLight />
    </main>
  );
};
