import { useEffect,useState } from "react";
import "./Showrecord.css";
export const Showrecord = ()=>{
    const [grades, setGrades] = useState([]);
      const [selectedGrade, setSelectedGrade] = useState(null);
      const [loading, setLoading] = useState(false); // for main table loading
      const [viewLoading, setViewLoading] = useState(false); // for view button loading
      useEffect(() => {
        setLoading(true);
        fetch("http://127.0.0.1:8000/api/showall")
          .then((res) => res.json()
            
        )
          .then((data) => {
            
            if (data.code === 200) {
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
      
      const handleView = (id) => {
        setViewLoading(true);
        fetch(`http://127.0.0.1:8000/api/single/${id}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.code === 200) {
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
                  <th className="border px-4 py-2">student_id</th>
                  <th className="border px-4 py-2">course_id</th>
                  <th className="border px-4 py-2">date</th>
                  <th className="border px-4 py-2">status</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((user,i) => (
                  <tr key={i} className="text-center">
                    <td className="border px-4 py-2">{user.Id}</td>
                    <td className="border px-4 py-2">{user.student_id}</td>
                    <td className="border px-4 py-2">{user.course_id}</td>
                    <td className="border px-4 py-2">{user.date}</td>
                    <td className="border px-4 py-2">{user.status}</td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => handleView(user.Id)}
                      >
                       view
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
                  <strong>ID:</strong> {selectedGrade.Id}
                </p>
                <p>
                  <strong>Student Id:</strong> {selectedGrade.student_id}
                </p>
                <p>
                  <strong>Course Id:</strong> {selectedGrade.course_id}
                </p>
                <p>
                  <strong>Date:</strong> {selectedGrade.date}
                </p>
                <p>
                  <strong>Status:</strong> {selectedGrade.status}
                </p>
              </div>
            )
          )}
        </div>
      );    
}