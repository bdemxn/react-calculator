import React from 'react';

function Form() {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">A:</label>
        <input type="text" name="" id="" />
      </div>
      <div className="mb-3">
        <label className="form-label">B:</label>
        <input type="text" name="" id="" />
      </div>
      <div className="mb-3">
        <label className="form-label">C:</label>
        <input type="text" name="" id="" />
      </div>
      <button type="submit" className="btn btn-primary">Solve</button>
    </form>
  );
}

export default Form;