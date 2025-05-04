import React from "react";
import "./Form.css";

export const Edit = () => {
  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          User Information
        </h2>
        <form onSubmit={checkDisplay}>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              onChange={(e) => {
                handleChange(e);
              }}
              className="mt-1 w-full rounded-xl border border-gray-300 p-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              onChange={(e) => {
                handleChange(e);
              }}
              className="mt-1 w-full rounded-xl border border-gray-300 p-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter last name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Age
            </label>
            <input
              type="number"
              name="age"
              onChange={(e) => {
                handleChange(e);
              }}
              className="mt-1 w-full rounded-xl border border-gray-300 p-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter age"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              onChange={(e) => {
                handleChange(e);
              }}
              className="mt-1 w-full rounded-xl border border-gray-300 p-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter mobile number"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-xl hover:scale-105 hover:shadow-lg transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
