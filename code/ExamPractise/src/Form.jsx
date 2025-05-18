import React, { useEffect, useState } from "react";
import "./Form.css";
import { Display } from "./Display";
import { Edit } from "./Edit";

export const Form = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
  });
  const [get, setget] = useState([]);
  //  console.log(get);
  const [selectedRcored, setSelectedRcored] = useState();
  const [selectedcheck, setSelectedCheck] = useState(null);
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const checkDisplay = async (e) => {
    e.preventDefault();
     await fetch("http://127.0.0.1:8000/api/exam", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((Response) => {
        alert("✅ Attendance submitted successfully!");
        handleSelect();
        return Response.json();
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };
  const handleSelect = () => {
    fetch("http://127.0.0.1:8000/api/record")
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setget(data.data);
        }
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  };
  useEffect(() => {
    handleSelect();
  }, []);

  const handleView = (id) => {
    fetch(`http://127.0.0.1:8000/api/onerecord/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setSelectedRcored(data.data);
          // setSelectedCheck(data.data);
        }
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };
  const handleEdit = (id) => {
    fetch(`http://127.0.0.1:8000/api/onerecord/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setSelectedRcored(data.data);
          setSelectedCheck(data.data);
        }
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };
  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8000/api/delete/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          alert("✅ Attendance submitted successfully!");
          handleSelect();
        }
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

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
      <div>
        <table className="w-full table-auto border border-gray-300 mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Mobile</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {get.map((re, i) => (
              <tr key={i} className="text-center">
                <td className="border px-4 py-2">{re.id}</td>
                <td className="border px-4 py-2">{re.firstName}</td>
                <td className="border px-4 py-2">{re.lastName}</td>
                <td className="border px-4 py-2">{re.age}</td>
                <td className="border px-4 py-2">{re.mobile}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => handleView(re.id)}
                  >
                    View
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 ml-2 rounded hover:bg-red-700"
                    onClick={() => handleDelete(re.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 ml-2 rounded hover:bg-red-700"
                    onClick={() => handleEdit(re.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Display usersInfo={selectedRcored} />
        {selectedcheck?(

          <Edit editInfo={selectedRcored} fun={handleSelect} />
        ):(
          "please select records "
        )
        }
      </div>
    </>
  );
};
