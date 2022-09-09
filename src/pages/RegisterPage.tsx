import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "../components";

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
    Email: Yup.string()
      .required("Campo Requerido")
      .email("Correo Electronico Invalido")
      .max(255, `Máximo 255 caracteres`),
    UserName: Yup.string()
      .min(5, `Mínimo 5 caracteres`)
      .max(25, `Máximo 25 caracteres`)
      .required("Campo Requerido"),
    Password: Yup.string()
      .required("Campo Requerido")
      .min(5, `Mínimo 5 caracteres`),
    MobilePhone: Yup.number()
      .required("Campo Requerido")
      .min(8, `Mínimo  8 caracteres`),
  });

  const onSubmit = (values: FormState) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={formInitialState}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="UserName">Nombre Usuario: </label>
          <Field
            className="form-control"
            name="UserName"
            placeholder=""
            type="text"
          />
          <ErrorMessage
            name="UserName"
            component="div"
            className="text-error-light-1 bg-dark"
          />
          <label htmlFor="Email">Correo Electronico: </label>
          <Field
            className="form-control"
            name="Email"
            placeholder=""
            type="email"
          />
          <ErrorMessage
            name="Email"
            component="div"
            className="field-error text-danger"
          />
          <label htmlFor="Password">Contraseña: </label>
          <Field
            className="form-control"
            name="Password"
            placeholder=""
            type="password"
          />
          <ErrorMessage
            name="Password"
            component="div"
            className="field-error text-danger"
          />
          <label htmlFor="MobilePhone">Teléfono: </label>
          <Field
            className="form-control"
            name="MobilePhone"
            placeholder=""
            type="number"
          />
          <ErrorMessage
            name="MobilePhone"
            component="div"
            className="field-error text-danger"
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
    </>
  );
};
