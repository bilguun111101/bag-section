import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bag from "./Bag/Bag";

const RoutesSection = () => {
  return (
    // <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/bag" element={<Bag />} />
      </Routes>
    </BrowserRouter>
    // </Layout>
  );
};

export default RoutesSection;
