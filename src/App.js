import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CopyRightText, StyledContainer } from "./components/Style";

import {
  Home,
  ResetPassword,
  VerifyEmail,
  ResendVerificationMail,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <StyledContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/verify-email/:token" element={<VerifyEmail />} />
            <Route
              path="/resend-verification-email"
              element={<ResendVerificationMail />}
            />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
          <CopyRightText>All rights reserved &copy; 2022</CopyRightText>
        </StyledContainer>
      </Router>
    </>
  );
}

export default App;
