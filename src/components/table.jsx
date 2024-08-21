import React, { useEffect, useState } from "react";
import UserRow from "./user-card";
import UserHead from "./user-head";

const TableList = () => {
  const [users, setUsers] = useState();
  const getEmloyeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };
  useEffect(() => {
    getEmloyeesData();
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center my-4 mx-8">
        <button className="btn btn-active btn-neutral">theme</button>
        <h1 className="text-4xl">USER LIST</h1>
        <button className="btn btn-info">Create User</button>
      </div>

      <div className="overflow-x-auto my-4 mx-8">
        <table className="table">
          <UserHead />
          <tbody>
            {users?.map((user) => (
              <UserRow user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
