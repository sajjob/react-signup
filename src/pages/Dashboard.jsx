import React, { useContext } from "react";

import "./DashStyles.scss";
import RegisterContext from "../context/registerContext";

const Dashboard = () => {
  const { setIsSignin, logUser } = useContext(RegisterContext);


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className="dash-header">
        <button
          className="logout-btn"
          onClick={() => setIsSignin(false)}
        >
          Logout
        </button>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-message">
          <h2>Welcome </h2>
          <h4 style={{ color: "red" }}>{logUser.username}</h4>
        </div>
        <div className="dashboard-ifno">
          <h3>Edit Your Profile</h3>
          <form onSubmit={handleSubmit}>
            <div className="dashboard-input">
              <label htmlFor="email">Email </label><br />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={logUser.email}
              />
            </div>
            <div className="dashboard-input">
              <label htmlFor="password">Password </label><br />
              <input
                type="text"
                name="password"
                placeholder="Password"
                value={logUser.password}
              />
            </div>
            <button className="edit-btn">Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
