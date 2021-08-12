import React, { useEffect } from "react";

const UserList = ({ history }) => {
  const userList = JSON.parse(localStorage.getItem("users"));

  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      history.push("/login");
    }
  }, [history]);

  return (
    <div className="user-list-container">
      <h1 className="heading">Users List</h1>
      <div className="user-cards">
        {userList &&
          userList.map((user) => {
            return (
              <div className="card-item">
                <h3 className="title">Name</h3>
                <p className="value">{user.name}</p>
                <h3 className="title">Email</h3>
                <p className="value">{user.email}</p>
                <h3 className="title">Mobile</h3>
                <p className="value">{user.mobile}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserList;
