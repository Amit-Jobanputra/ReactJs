import React, { useState, useEffect } from "react";
import "./Form.css";

export const Edit = ({ editInfo, fun }) => {
  const [update, setUpdate] = useState({});

  // Initialize form data from editInfo
  useEffect(() => {
    setUpdate(editInfo);
  }, [editInfo]);

  const handleChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const checkDisplay = async (e) => {
    e.preventDefault();
    let id = update.id;
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/update/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      });
      if (response.ok) {
        alert("User Updated successfully!");
        fun(); // refresh or close form
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl animate-fade-in">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        User Update
      </h2>
      <form onSubmit={checkDisplay}>
        <div>
          <label className="block text-sm font-medium text-gray-600">ID</label>
          <input
            type="text"
            name="id"
            value={update.id || ""}
            readOnly
            className="mt-1 w-full rounded-xl bg-gray-100 border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={update.firstName || ""}
            placeholder="Enter first name"
            className="mt-1 w-full rounded-xl border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={update.lastName || ""}
            placeholder="Enter last name"
            className="mt-1 w-full rounded-xl border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Age</label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={update.age || ""}
            placeholder="Enter age"
            className="mt-1 w-full rounded-xl border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Mobile</label>
          <input
            type="tel"
            name="mobile"
            onChange={handleChange}
            value={update.mobile || ""}
            placeholder="Enter mobile number"
            className="mt-1 w-full rounded-xl border border-gray-300 p-3"
          />
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-xl hover:scale-105 hover:shadow-lg transition duration-300 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};
