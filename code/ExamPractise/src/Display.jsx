import React from "react";
import "./Form.css";
export const Display = ({ usersInfo }) => {
  console.log(usersInfo);

  return (
    <>
      {usersInfo && (
        <div className="border border-gray-300 p-4 rounded bg-gray-50 shadow">
          <h3 className="text-xl font-semibold mb-2">Selected User Details</h3>
          <p>
            <strong>ID:</strong> {usersInfo.id}
          </p>
          <p>
            <strong>Father Name:</strong> {usersInfo.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {usersInfo.lastName}
          </p>
          <p>
            <strong>Age:</strong> {usersInfo.age}
          </p>
          <p>
            <strong>Mobile:</strong> {usersInfo.mobile}
          </p>
          
        </div>
      )}
    </>
  );
};
