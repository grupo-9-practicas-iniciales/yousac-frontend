import { FormEvent, useState } from 'react';

import { Navigate } from "react-router-dom";
import { Button, CardPost, Navbar, TextField } from "../components";
import { useComment, useContentStore } from "../hooks";

import "animate.css";
import { ScrollToTop } from "../components/helpers/ScrollToTop";
import { Form, Formik } from 'formik';

const formInitialState = {
  message: ''
}

type FormState = typeof formInitialState;


export const PostPage = () => {
  const { selectedPost } = useContentStore();

  if (!selectedPost) {
    return <Navigate to="/app" />;
  }

  const { comments, createComment } = useComment(selectedPost.idPost);

  {/* USE COMMENT POC */ }
  const onCreateComment = ({ message }: FormState) => {
    createComment(message);
  }

  return (
    <div className="bg-white dark:bg-dark transition-colors">
      <ScrollToTop />
      <Navbar />
      <div
        className="flex mt-5 md:mt-7 p-10 md:p-16 lg:p-0 justify-center mx-auto min-h-screen w-full
        animate__animated animate__fadeIn"
      >
        <div className="max-w-2xl w-full">
          <CardPost post={selectedPost} behavior="default" />
        </div>
      </div>

      {/* COMMENTS SECTION */}

      {/* USE COMMENT POC */}

      {/* Create comment form */}
      <div>
        <Formik initialValues={formInitialState} onSubmit={onCreateComment}>
          <Form >
            <div >
              <TextField placeholder='mensaje' name='message' />
              <Button type='submit'>
                Publicar comentario
              </Button>
            </div>
          </Form>
        </Formik>
      </div>

      {/*  Display comments */}
      {
        comments.map(comment => (
          <div key={comment.idComment}>
            <p className='my-5'>{comment.message}</p>
          </div>
        ))
      }
      <code>
        {
          JSON.stringify(comments)
        }
      </code >
      {/* END COMMENT POC */}


    </div>
  );
};
