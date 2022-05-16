import React, { Component } from "react";
import PhotoContextProvider from "../context/PhotoContext";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import PageNotFound from "./PageNotFound";
import "../styles/App.css";

const App = () => {
  const navigate = useNavigate();
  const handleSubmit = (e, navigate, searchInput) => {

  };

  return (
    <PhotoContextProvider>
      <div className="container">
        <Header handleSubmit={handleSubmit} navigate={navigate} />
        <Routes>
            <Route path="/search/:searchTerm" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </PhotoContextProvider>
  );
};

export default App;
