import React from "react";

const UserRow = ({ user }) => {
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
        <button className="btn btn-success">Edit</button>
        <button className="btn btn-error">Delete</button>
      </th>
    </tr>
  );
};

export default UserRow;
