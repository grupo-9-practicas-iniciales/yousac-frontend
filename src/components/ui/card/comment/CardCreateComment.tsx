import { Form, Formik } from "formik";
import { TextField } from "../../textField/TextField";
import { Button } from "../../button/Button";

export const CardCreateComment = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik initialValues={{ message: "" }} onSubmit={onSubmit}>
      <Form className="flex w-full">
        <TextField name="message" placeholder="Escribe un comentario" />
        <Button type="submit"></Button>
      </Form>
    </Formik>
  );
};
