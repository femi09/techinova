import React from "react";
import "./index.css";

const CreateNextProject = () => {
  return (
    <div className="createNextProject">
      <div className="createNextProject__content">
        <p className="createNexProject__title">
          Create your <span>next project</span> with startup framework
        </p>
        <button className="btn btn-primary">GET STARTED</button>
      </div>

      <img src="/assets/startup_framework.png" alt="" />
    </div>
  );
};

export default CreateNextProject;
