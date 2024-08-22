import React from "react";

const UserRow = ({ user, deleteUser, editUser }) => {
  const edit = () => {
    document.getElementById("my_modal_3").showModal();
  };
  return (
    <tr>
      <td>
        <div className="mask mask-squircle h-12 w-12">
          <img src={user.profileImg} alt="Avatar Tailwind CSS Component" />
        </div>
      </td>
      <td>
        <div className="font-bold">{user.firstname}</div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{user.position}</span>
      </td>
      <td>{user.email}</td>
      <th className="flex gap-2">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={() => edit()}>
          Edit
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="modal-box flex flex-col gap-4">
              <h3 className="font-bold text-lg">Updata User</h3>
              <label className="input input-bordered flex items-center gap-2">
                Name
                <input
                  type="text"
                  className="grow"
                  placeholder="First name"
                  value={user.firstname}
                  // value="static"
                  //   onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Job
                <input
                  type="text"
                  className="grow"
                  placeholder="Job"
                  value={user.position}
                  //   onChange={(e) => setJob(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Email
                <input
                  type="text"
                  className="grow"
                  placeholder="daisy@site.com"
                  value={user.email}
                  //   onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <button
                onClick={() =>
                  editUser(user.eid, user.firstname, user.position, user.email)
                }
                className="btn btn-success"
              >
                UpData User
              </button>
            </div>
          </div>
        </dialog>
        <button onClick={() => deleteUser(user.eid)} className="btn btn-error">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default UserRow;
