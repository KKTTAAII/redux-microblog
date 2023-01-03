import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBox from "./NavBox";
import NewPost from "./NewPost";
import Home from "./Home";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <NavBox />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
