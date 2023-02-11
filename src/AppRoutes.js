import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { BackgroundColorChanger } from "./Pages/BackgroundColorChanger";
import { Calculator } from "./Pages/Calculator";
import { Index } from "./Pages/Index";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/bgcolor/:colorname" element={<BackgroundColorChanger />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/" element={<Index />} />
    </Routes>
  );
};
