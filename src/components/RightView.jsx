import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import UserList from "./UserList";

const RightView = () => {
  return (
    <div className="right-container">
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Signup} />
      <Route exact path="/users" component={UserList} />
    </div>
  );
};

export default RightView;
