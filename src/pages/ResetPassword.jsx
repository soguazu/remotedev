import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FiLock } from "react-icons/fi";
import { ThreeCircles } from "react-loader-spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { LOGO } from "../assets/";
import { TextInput } from "../components/FormLib";
import {
  StyledFormArea,
  StyledSubmitButton,
  ButtonGroup,
  Avatar,
  StyleTitle,
  colors,
} from "../components/Style";

const API_BASE_URL = process.env.REACT_APP_BASE_API_URL;

function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const resetPasswordHandler = async (
    values,
    navigate,
    setFieldError,
    setSubmitting
  ) => {
    await fetch(`${API_BASE_URL}/auth/reset-password`, {
      method: "POST",
      body: JSON.stringify({
        token: searchParams.get("token"),
        newPassword: values.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success("Password updated successfully");
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
    <div>
      <StyledFormArea>
        <Avatar image={LOGO} />
        <StyleTitle size={30} color={colors.dark2}>
          Set new password
        </StyleTitle>
        <Formik
          initialValues={{
            password: "",
          }}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(6, "Password is too short")
              .max(30, "Password is too long")
              .matches(
                /[a-zA-Z0-9]/,
                "Password must have at least one uppercase, one lowercase and a number"
              )
              .required("Required"),
            // repeat_password: Yup.string()
            //   .required("Required")
            //   .oneOf([Yup.ref("password")], "Passwords must match"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            resetPasswordHandler(
              values,
              navigate,
              setFieldError,
              setSubmitting
            );
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="password"
                type="password"
                label="Password"
                Placeholder="password"
                icon={<FiLock />}
              />

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
                )}
                {isSubmitting && (
                  <ThreeCircles
                    height="100"
                    width="100"
                    color={colors.theme}
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
      </StyledFormArea>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default ResetPassword;
