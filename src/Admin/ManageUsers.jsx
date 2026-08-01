import React, { useState } from "react";

function ManageUsers() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Nishant",
      lastName: "Bista",
      email: "nishant@gmail.com",
      contact: "9812345678",
      address: "Lalitpur",
      role: "User",
    },
    {
      id: 2,
      firstName: "Anjali",
      lastName: "Khadka",
      email: "anjali@gmail.com",
      contact: "9801234567",
      address: "Kathmandu",
      role: "Admin",
    },
    {
      id: 3,
      firstName: "Ram",
      lastName: "Sharma",
      email: "ram@gmail.com",
      contact: "9845678912",
      address: "Bhaktapur",
      role: "User",
    },
  ]);

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const changeRole = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              role: user.role === "User" ? "Admin" : "User",
            }
          : user
      )
    );
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Manage Users</h2>

      <div className="card shadow">

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Role</th>
                <th width="220">Action</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (

                <tr key={user.id}>

                  <td>{user.id}</td>

                  <td>
                    {user.firstName} {user.lastName}
                  </td>

                  <td>{user.email}</td>

                  <td>{user.contact}</td>

                  <td>{user.address}</td>

                  <td>

                    <span
                      className={`badge ${
                        user.role === "Admin"
                          ? "bg-success"
                          : "bg-primary"
                      }`}
                    >
                      {user.role}
                    </span>

                  </td>

                  <td>

                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => changeRole(user.id)}
                    >
                      Change Role
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default ManageUsers;