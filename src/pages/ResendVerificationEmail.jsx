import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FiMail } from "react-icons/fi";

import { LOGO } from "../assets/";
import { TextInput } from "../components/FormLib";
import { ToastContainer, toast } from "react-toastify";
import {
  StyledFormArea,
  StyledSubmitButton,
  ButtonGroup,
  Avatar,
  StyleTitle,
  colors,
} from "../components/Style";

const API_BASE_URL = process.env.REACT_APP_BASE_API_URL;

function ResendVerificationEmail() {
  const resendVerificationEmailHandler = async (values, setSubmitting) => {
    await fetch(`${API_BASE_URL}/auth/resend-verification-mail`, {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success("Check your email to verify your account");
        } else {
          toast.error("Invalid request, please try again");
        }
      })
      .catch((err) => {
        console.log("something went wrong");
      });
    setSubmitting(false);
  };
  return (
    <StyledFormArea>
      <Avatar image={LOGO} />
      <StyleTitle size={30} color={colors.dark2}>
        Resend verification email
      </StyleTitle>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email").required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          resendVerificationEmailHandler(values, setSubmitting);
        }}
      >
        {() => (
          <Form>
            <TextInput
              name="email"
              type="email"
              label="Email"
              Placeholder="enter email"
              icon={<FiMail />}
            />

            <ButtonGroup>
              <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </StyledFormArea>
  );
}

export default ResendVerificationEmail;
