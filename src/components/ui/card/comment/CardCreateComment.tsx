import * as Yup from "yup";

import { Form, Formik } from "formik";
import { AiOutlineSend } from "react-icons/ai";

import { TextField, ErrorMessageField, Button } from "../../..";

const formValidationSchema = Yup.object().shape({
  comment: Yup.string()
    .required("No puedes enviar un comentario vacío")
    .max(150, "Máximo 150 caracteres"),
});

type CardCreateCommentProps = {
  createComment: (message: string) => void;
};

export const CardCreateComment = ({
  createComment,
}: CardCreateCommentProps) => {
  const onSubmit = ({ comment }: any) => {
    createComment(comment);
  };

  return (
    <Formik
      initialValues={{ comment: "" }}
      validationSchema={formValidationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col w-full my-2">
          <div className="flex w-full space-x-2">
            <TextField
              type="text"
              name="comment"
              placeholder="Escribe un comentario"
            />

            <Button className="w-1/4 flex justify-center align-middle" type="submit">
              <AiOutlineSend />
            </Button>
          </div>
          {errors.comment && touched.comment ? (
            <ErrorMessageField message={errors.comment} />
          ) : null}
        </Form>
      )}
    </Formik>
  );
};
