import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserForm />} />
      </Routes>
    </Router>
  );
};

export default App;
