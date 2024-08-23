import React from "react";

const UserRow = ({ user, deleteUser, editUser }) => {
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
        <button className="btn">Edit</button>

        <button onClick={() => deleteUser(user.eid)} className="btn btn-error">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default UserRow;
