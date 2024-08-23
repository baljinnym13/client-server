import React from "react";

const Modal = ({ setFirstName, setJob, setEmail, createUser }) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box flex flex-col gap-4">
        <h3 className="font-bold text-lg">Create New User</h3>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            className="grow"
            placeholder="First name"
            // value="static"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Job
          <input
            type="text"
            className="grow"
            placeholder="Job"
            onChange={(e) => setJob(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            type="text"
            className="grow"
            placeholder="daisy@site.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <div className="modal-action">
          <button onClick={createUser} className="btn btn-info">
            Create User
          </button>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
