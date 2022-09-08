import { Route, Routes } from "react-router-dom";
import { ChangePasswordPage, SendEmailRecoveryPage } from "../pages";

export const RecoveryRouter = () => {
  return (
    <Routes>
      <Route path="/:token" element={<ChangePasswordPage />} />

      <Route path="/*" element={<SendEmailRecoveryPage />} />
    </Routes>
  );
};
