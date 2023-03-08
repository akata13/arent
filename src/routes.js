import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./components/layout";
import HomePage from "./pages/home";
import ErrorPage from "./pages/404";
import RecordPage from "./pages/record";
import HealthPage from "./pages/health";

export const RootRouter = React.memo(() => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/record"} element={<RecordPage />} />
        <Route path={"/health"} element={<HealthPage />} />
        <Route path={"/404"} element={<ErrorPage />} />
      </Route>

      <Route path="*" element={<Navigate to={"/404"} replace />} />
    </Routes>
  );
});
