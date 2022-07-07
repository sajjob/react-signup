import React, { useContext } from "react";

import "./DashStyle.scss";
import signupContext from "../context/signupContext";

const Dashboard = () => {
  const { setIsSignup, formData, setActiveStepIndex } =
    useContext(signupContext);

  return (
    <div>
      <div className="dash-header">
        <button
          className="logout-btn"
          onClick={() => {
            setActiveStepIndex(0);
            setIsSignup(false);
          }}
        >
          Logout
        </button>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-message">
          <h2>Welcome </h2>
          <h4 style={{ color: "red" }}>{formData.name}</h4>
        </div>
        <div className="dashboard-ifno">
          <h3>Edit Your Profile</h3>
          <form>
            <div className="dashboard-input">
              <label htmlFor="email">Email </label>
              <br />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
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
