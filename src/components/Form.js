import React from "react";

const Form = () => {
    const ondubmit = (e)=>{
        e.preventDefault();
        alert("Request Accepted");
    }

  return (
    <div className='container mt-4'>
    <div className="container my-5">
    <h3 style={{color:'white'}} >Request InviSecure to secure your Port </h3>
      <form onSubmit={ondubmit}>
        <div className="mb-3">
          <label htmlFor="pid" className="form-label" style={{color:'white'}}>
            Process PID
          </label>
          <input
            type="text"
            className="form-control"
            id="pid"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="port" className="form-label" style={{color:'white'}}>
            Application Port
          </label>
          <input
            type="text"
            className="form-control"
            id="port"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ip" className="form-label" style={{color:'white'}}>
            IP
          </label>
          <input
            type="text"
            className="form-control"
            id="ip"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Form;
