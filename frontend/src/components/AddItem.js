import React, { useState } from "react";

function AddItem() {
  const [phone, setPhone] = useState({
    name: "",
    ram: "",
    processor: "",
    storage: "",
    display: "",
    camera: "",
  });
  const [addedPhone, setAddedPhone] = useState([]);

  const inputHandler = (e) => {
    setPhone({ ...phone, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newPhone = { ...phone, id: new Date().getTime.toString() };
    setAddedPhone([...addedPhone, newPhone]);
    setPhone({
      name: "",
      ram: "",
      processor: "",
      storage: "",
      display: "",
      camera: "",
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={phone.name}
            onChange={inputHandler}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ram" className="form-label">
            RAM
          </label>
          <input
            type="text"
            className="form-control"
            id="ram"
            name="ram"
            value={phone.ram}
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="processor" className="form-label">
            Processor
          </label>
          <input
            type="text"
            className="form-control"
            id="processor"
            name="processor"
            value={phone.processor}
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="storage" className="form-label">
            Storage
          </label>
          <input
            type="text"
            className="form-control"
            id="storage"
            name="storage"
            value={phone.storage}
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="display" className="form-label">
            Display
          </label>
          <input
            type="text"
            className="form-control"
            id="display"
            name="display"
            value={phone.display}
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="camera" className="form-label">
            Camera
          </label>
          <input
            type="text"
            className="form-control"
            id="camera"
            name="camera"
            value={phone.camera}
            onChange={inputHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="container">
        {addedPhone.map((val) => {
          return (
            <div key={val.id}>
              <h3>{val.name}</h3>
              <h3>{val.ram}</h3>
              <h3>{val.processor}</h3>
              <h3>{val.storage}</h3>
              <h3>{val.display}</h3>
              <h3>{val.camera}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddItem;
