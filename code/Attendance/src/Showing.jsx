import { useEffect, useState } from "react";
import "./showing.css";

export const Showing = () => {
  const [grades, setGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [loading, setLoading] = useState(false); // for main table loading
  const [viewLoading, setViewLoading] = useState(false); // for view button loading

  // Fetch all records on mount
  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/showall")
      .then((res) => res.json())
      .then((data) => {
        if (data.HeaderCode === 200) {
          setGrades(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching grades:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Handle view single record
  const handleView = (id) => {
    setViewLoading(true);
    fetch(`http://localhost:8000/api/grades/${id}/single`)
      .then((res) => res.json())
      .then((data) => {
        if (data.HeaderCode === 200) {
          setSelectedGrade(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching single grade:", error);
      })
      .finally(() => {
        setViewLoading(false);
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Records</h2>

      {loading ? (
        <p className="text-lg text-gray-600">Loading data...</p>
      ) : (
        <table className="w-full table-auto border border-gray-300 mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Student Id</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">City</th>
              <th className="border px-4 py-2">Mobile</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.FirstName}</td>
                <td className="border px-4 py-2">{user.LastName}</td>
                <td className="border px-4 py-2">{user.City}</td>
                <td className="border px-4 py-2">{user.Mobile}</td>
                <td className="border px-4 py-2">{user.Email}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => handleView(user.id)}
                  >
                    {viewLoading && selectedGrade?.id === user.id
                      ? "Loading..."
                      : "View"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {viewLoading && !selectedGrade ? (
        <p className="text-md text-blue-600">Loading selected user...</p>
      ) : (
        selectedGrade && (
          <div className="border border-gray-300 p-4 rounded bg-gray-50 shadow">
            <h3 className="text-xl font-semibold mb-2">
              Selected User Details
            </h3>
            <p>
              <strong>ID:</strong> {selectedGrade.id}
            </p>
            <p>
              <strong>Student Id:</strong> {selectedGrade.FirstName}
            </p>
            <p>
              <strong>Last Name:</strong> {selectedGrade.LastName}
            </p>
            <p>
              <strong>City:</strong> {selectedGrade.City}
            </p>
            <p>
              <strong>Mobile:</strong> {selectedGrade.Mobile}
            </p>
            <p>
              <strong>Email:</strong> {selectedGrade.Email}
            </p>
          </div>
        )
      )}
    </div>
  );
};
