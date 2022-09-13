import { Form, Formik } from "formik";
import { BubblesDark, BubblesLight } from "../assets";
import { Button, TextField, WavyFooter } from "../components";
import { useNewTitle } from "../hooks";
import { useApi } from "../hooks/useApi";

export const SendEmailRecoveryPage = () => {
  const { perfomFetch } = useApi();

  const onSubmit = ({ email }: any) => {
    

    perfomFetch({
      url: "/auth/recovery",
      method: "post",
      body: {
        email,
      },
    });
  };

  useNewTitle("Recuperar Contraseña");
  return (
    <>
      <main className="flex flex-col justify-center items-center bg-light dark:bg-dark min-h-screen">
        <h1 className="font-semibold text-primary-light-1 dark:text-white text-xl md:text-2xl lg:text-3xl">
          Recupera tu contraseña
        </h1>
        <Formik initialValues={{ email: "" }} onSubmit={onSubmit}>
          <Form className="flex flex-col w-8/12 md:w-4/12 my-10 space-y-5">
            <TextField type="email" name="email" placeholder="Email" />
            <Button type="submit" variant="secondary">
              Enviar
            </Button>
          </Form>
        </Formik>
        <BubblesDark />
        <BubblesLight />
      </main>
      <WavyFooter />
    </>
  );
};
