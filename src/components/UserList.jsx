import React, { useEffect, useState } from "react";
import { getAllUsers, deleteUser } from "../api";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

return (
  <div className="container mt-4">
    <h2 className="mb-4">Users List</h2>
    <Link to="/create" className="btn btn-primary mb-3">Add New User</Link>
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Roll No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.rollNo}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.dept}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="btn btn-warning btn-sm mr-2">Edit</Link>
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default UserList;
