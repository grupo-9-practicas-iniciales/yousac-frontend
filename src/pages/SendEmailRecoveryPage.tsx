import { Form, Formik } from "formik";
import { BubblesDark, BubblesLight } from "../assets";
import { Button, TextField } from "../components";

export const SendEmailRecoveryPage = () => {
  const onSubmit = ({ email }: any) => {
    console.log(email);
  };

  return (
    <main className="flex flex-col justify-center items-center bg-light dark:bg-dark min-h-screen">
      <h1>Recupera tu contraseña</h1>
      <Formik initialValues={{ email: "" }} onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col w-8/12 md:w-4/12 my-10 space-y-5"
          >
            <TextField type="email" name="email" placeholder="Email" />
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
