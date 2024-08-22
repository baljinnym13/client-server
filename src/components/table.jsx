import React, { useEffect, useState } from "react";
import UserRow from "./user-card";
import UserHead from "./user-head";

const TableList = () => {
  const [users, setUsers] = useState();
  const [firstName, setFirstName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const getEmloyeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };
  const createUser = async () => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: job,
        email: email,
        position: job,
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { user } = await res.json();
    setUsers([...users, user]);
  };
  const deleteUser = async (userId) => {
    console.log("userId", userId);
    const res = await fetch(`http://localhost:8000/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    setUsers(users.filter((user) => user.eid !== userId));
    // const { users } = await res.json();
  };
  const editUser = async (userId) => {
    const res = await fetch(`http://localhost:8000/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("first", res);
  };
  useEffect(() => {
    getEmloyeesData();
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center my-4 mx-8">
        <button className="btn btn-active btn-neutral">theme</button>
        <h1 className="text-4xl">USER LIST</h1>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Create User
        </button>
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
      </div>

      <div className="overflow-x-auto my-4 mx-8">
        <table className="table">
          <UserHead />
          <tbody>
            {users?.map((user, id) => (
              <UserRow
                key={id}
                user={user}
                deleteUser={deleteUser}
                editUser={editUser}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
