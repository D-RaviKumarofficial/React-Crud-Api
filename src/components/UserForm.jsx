import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createUser, updateUser, getUserById } from "../api";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ rollNo: "", name: "", email: "", dept: "" });

  useEffect(() => {
    if (id) {
      getUserById(id).then((res) => setUser(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateUser(id, user);
    } else {
      await createUser(user);
    }
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{id ? "Edit User" : "Create User"}</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label className="form-label">Roll No:</label>
          <input type="text" className="form-control" name="rollNo" value={user.rollNo} onChange={handleChange} required />
          <div className="invalid-feedback">Please enter a roll number.</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" value={user.name} onChange={handleChange} required />
          <div className="invalid-feedback">Please enter a name.</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} required />
          <div className="invalid-feedback">Please enter a valid email.</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Department:</label>
          <input type="text" className="form-control" name="dept" value={user.dept} onChange={handleChange} required />
          <div className="invalid-feedback">Please enter a department.</div>
        </div>

        <button type="submit" className="btn btn-primary w-100">{id ? "Update" : "Create"}</button>
      </form>
      <button onClick={handleBack} className="btn btn-secondary w-100 mt-2">Back</button>
    </div>
  );
};

export default UserForm;
