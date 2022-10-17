import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { colors, ExtraMsg, TextLink } from "../components/Style";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const API_BASE_URL = process.env.REACT_APP_BASE_API_URL;

const verifyEmail = async (token, loader, setLoader) => {
  await fetch(`${API_BASE_URL}/auth/verify-email`, {
    method: "POST",
    body: JSON.stringify({
      token,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setLoader(!loader);
      console.log(data);
      if (data.success) {
        toast.success("Email verified successfully");
      } else {
        toast.error(
          "Invalid token, please click on link below to resend verification email"
        );
      }
    })
    .catch((err) => {
      setLoader(!loader);
      console.log("something went wrong");
    });
};

function VerifyEmail() {
  const [loader, setLoader] = useState(true);
  const location = useLocation().pathname.split("/");

  useEffect(() => {
    verifyEmail(location[2], loader, setLoader);
  }, [location, loader]);

  return (
    <div>
      {loader && (
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
      <ExtraMsg>
        <TextLink to="/resend-verification-email">
          Resend verification email
        </TextLink>
      </ExtraMsg>
    </div>
  );
}

export default VerifyEmail;
