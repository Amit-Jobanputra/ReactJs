// import { useState } from "react";
// export const Attendance = () => {
//   const [std, setStd] = useState({
//     student_id: "",
//     course_id: "",
//     date: "",
//     status: "",
//   });
//   function handleChange(event) {
//     setStd({ ...std, [event.target.name]: event.target.value });
//   }
//   async function Marked(data) {
//     console.log(data);
//     const response = await fetch("http://localhost:8000/api/testDemo", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((rdata) => {
//       console.log("Response:", rdata);
//       alert("Attendance submitted successfully!");
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       alert("Something went wrong while submitting!");
//     });
//   }
//   return (
//     <>
//       <div
//         style={{
//           maxWidth: "480px",
//           margin: "60px auto",
//           padding: "32px",
//           borderRadius: "24px",
//           background: "black",
//           boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
//           backdropFilter: "blur(14px)",
//           WebkitBackdropFilter: "blur(14px)",
//           border: "1px solid rgba(255, 255, 255, 0.2)",
//           color: "#fff",
//           fontFamily: "Segoe UI, sans-serif",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "26px",
//             fontWeight: "700",
//             marginBottom: "24px",
//             textAlign: "center",
//           }}
//         >
//           🚀 Student Attendance
//         </h2>

//         <div style={{ marginBottom: "20px" }}>
//           <label
//             style={{ fontWeight: "500", marginBottom: "6px", display: "block" }}
//           >
//             Student ID
//           </label>
//           <input
//             type="text"
//             name="student_id"
//             placeholder="Enter Student ID"
//             onChange={(e) => {
//               handleChange(e);
//             }}
//             style={{
//               width: "100%",
//               padding: "12px",
//               borderRadius: "12px",
//               border: "1px solid rgba(255, 255, 255, 0.3)",
//               background: "rgba(255, 255, 255, 0.05)",
//               color: "#fff",
//               outline: "none",
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: "20px" }}>
//           <label
//             style={{ fontWeight: "500", marginBottom: "6px", display: "block" }}
//           >
//             Course ID
//           </label>
//           <input
//             type="text"
//             name="course_id"
//             placeholder="Enter Course ID"
//             onChange={(e) => {
//               handleChange(e);
//             }}
//             style={{
//               width: "100%",
//               padding: "12px",
//               borderRadius: "12px",
//               border: "1px solid rgba(255, 255, 255, 0.3)",
//               background: "rgba(255, 255, 255, 0.05)",
//               color: "#fff",
//               outline: "none",
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: "20px" }}>
//           <label
//             style={{ fontWeight: "500", marginBottom: "6px", display: "block" }}
//           >
//             Date
//           </label>
//           <input
//             type="date"
//             name="date"
//             onChange={(e) => {
//               handleChange(e);
//             }}
//             style={{
//               width: "100%",
//               padding: "12px",
//               borderRadius: "12px",
//               border: "1px solid rgba(255, 255, 255, 0.3)",
//               background: "rgba(255, 255, 255, 0.05)",
//               color: "#fff",
//               outline: "none",
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: "20px" }}>
//           <label
//             style={{ fontWeight: "500", marginBottom: "6px", display: "block" }}
//           >
//             Status
//           </label>
//           <select
//             name="status"
//             onChange={(e) => {
//               handleChange(e);
//             }}
//             style={{
//               width: "100%",
//               padding: "12px",
//               borderRadius: "12px",
//               border: "1px solid rgba(255, 255, 255, 0.3)",
//               background: "black",
//               color: "#fff",
//               fontWeight: "600",
//               outline: "none",
//             }}
//             defaultValue={"Select Status"}
//           >
//             <option value="" disabled>
//               Select Status
//             </option>
//             <option value="Present">Present</option>
//             <option value="Absent">Absent</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "14px",
//             marginTop: "10px",
//             borderRadius: "14px",
//             background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
//             color: "#fff",
//             fontWeight: "600",
//             fontSize: "16px",
//             border: "none",
//             cursor: "pointer",
//             transition: "transform 0.3s ease",
//           }}
//           onMouseOver={(e) => (e.target.style.transform = "scale(1.03)")}
//           onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
//           onClick={() => {
//             Marked(std);
//           }}
//         >
//           ✅ Submit Attendance
//         </button>
//       </div>
//       <label className="text-xl">
//         Your Name:-
//         {`${std.student_id} ${std.course_id} ${std.date} ${std.status}`}{" "}
//       </label>
//     </>
//   );
// };


// import { useState } from "react";

// export const Attendance = () => {
//   const [std, setStd] = useState({
//     student_id: "",
//     course_id: "",
//     date: "",
//     status: "",
//   });

//   function handleChange(event) {
//     setStd({ ...std, [event.target.name]: event.target.value });
//   }

//   function Marked(data) {
//     if (!data.student_id || !data.course_id || !data.date || !data.status) {
//       alert("Please fill in all fields before submitting.");
//       return;
//     }

//     console.log("Submitting:", data);

//     fetch("http://localhost:8000/api/testDemo", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((rdata) => {
//         console.log("Response:", rdata);
//         alert("Attendance submitted successfully!");
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("Something went wrong while submitting!");
//       });
//   }

//   return (
//     <>
//       <div
//         style={{
//           maxWidth: "480px",
//           margin: "60px auto",
//           padding: "32px",
//           borderRadius: "24px",
//           background: "black",
//           boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
//           backdropFilter: "blur(14px)",
//           WebkitBackdropFilter: "blur(14px)",
//           border: "1px solid rgba(255, 255, 255, 0.2)",
//           color: "#fff",
//           fontFamily: "Segoe UI, sans-serif",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "26px",
//             fontWeight: "700",
//             marginBottom: "24px",
//             textAlign: "center",
//           }}
//         >
//           🚀 Student Attendance
//         </h2>

//         {/* Student ID */}
//         <div style={{ marginBottom: "20px" }}>
//           <label style={{ fontWeight: "500", marginBottom: "6px", display: "block" }}>
//             Student ID
//           </label>
//           <input
//             type="text"
//             name="student_id"
//             placeholder="Enter Student ID"
//             value={std.student_id}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "12px",
//               borderRadius: "12px",
//               border: "1px solid rgba(255, 255, 255, 0.3)",
//               background: "rgba(255, 255, 255, 0.05)",
//               color: "#fff",
//               outline: "none",
//             }}
//           />
//         </div>

//         {/* Course ID */}
//         <div style={{ marginBottom: "20px" }}>
//           <label style={{ fontWeight: "500", marginBottom: "6px", display: "block" }}>
//             Course ID
//           </label>
//           <input
//             type="text"
//             name="course_id"
//             placeholder="Enter Course ID"
//             value={std.course_id}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "12px",
//               borderRadius: "12px",
//               border: "1px solid rgba(255, 255, 255, 0.3)",
//               background: "rgba(255, 255, 255, 0.05)",
//               color: "#fff",
//               outline: "none",
//             }}
//           />
//         </div>

//         {/* Date */}
//         <div style={{ marginBottom: "20px" }}>
//           <label style={{ fontWeight: "500", marginBottom: "6px", display: "block" }}>
//             Date
//           </label>
//           <input
//             type="date"
//             name="date"
//             value={std.date}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "12px",
//               borderRadius: "12px",
//               border: "1px solid rgba(255, 255, 255, 0.3)",
//               background: "rgba(255, 255, 255, 0.05)",
//               color: "#fff",
//               outline: "none",
//             }}
//           />
//         </div>

//         {/* Status */}
//         <div style={{ marginBottom: "20px" }}>
//           <label style={{ fontWeight: "500", marginBottom: "6px", display: "block" }}>
//             Status
//           </label>
//           <select
//             name="status"
//             value={std.status}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "12px",
//               borderRadius: "12px",
//               border: "1px solid rgba(255, 255, 255, 0.3)",
//               background: "black",
//               color: "#fff",
//               fontWeight: "600",
//               outline: "none",
//             }}
//           >
//             <option value="">Select Status</option>
//             <option value="Present">Present</option>
//             <option value="Absent">Absent</option>
//           </select>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="button"
//           style={{
//             width: "100%",
//             padding: "14px",
//             marginTop: "10px",
//             borderRadius: "14px",
//             background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
//             color: "#fff",
//             fontWeight: "600",
//             fontSize: "16px",
//             border: "none",
//             cursor: "pointer",
//             transition: "transform 0.3s ease",
//           }}
//           onMouseOver={(e) => (e.target.style.transform = "scale(1.03)")}
//           onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
//           onClick={() => Marked(std)}
//         >
//           ✅ Submit Attendance
//         </button>
//       </div>

//       {/* Summary Section */}
//       <label className="text-xl" style={{ display: "block", textAlign: "center", marginTop: "20px" }}>
//         Attendance Summary:
//         <br />
//         {`${std.student_id} | ${std.course_id} | ${std.date} | ${std.status}`}
//       </label>
//     </>
//   );
// };
import { useState } from "react";

export function Attendance() {
  const [std, setStd] = useState({
    student_id: "",
    course_id: "",
    date: "",
    status: "",
  });

  const [waiting, setWaiting] = useState(false); // For optional wait message

  function handleChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    setStd(function (prev) {
      return { ...prev, [name]: value };
    });
  }

  async function Marked(data) {
    if (!data.student_id || !data.course_id || !data.date || !data.status) {
      alert("❌ Please fill all the fields!");
      return;
    }

    alert("⏳ Please wait, submitting attendance...");
    setWaiting(true);

    var response = await fetch("http://localhost:8000/api/testDemo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    response
      .json()
      .then(function (resData) {
        console.log("✅ Response:", resData);
        alert("✅ Attendance submitted successfully!");
        setWaiting(false);
        setStd({
          student_id: "",
          course_id: "",
          date: "",
          status: "",
        });
      })
      .catch(function (err) {
        console.error("❌ Error parsing response:", err);
        alert("❌ Failed to parse server response.");
        setWaiting(false);
      });
  }

  return (
    <>
      <div
        style={{
          maxWidth: "480px",
          margin: "60px auto",
          padding: "32px",
          borderRadius: "24px",
          background: "black",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#fff",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "26px",
            fontWeight: "700",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          🚀 Student Attendance
        </h2>

        {/* Student ID */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "500", marginBottom: "6px", display: "block" }}>
            Student ID
          </label>
          <input
            type="text"
            name="student_id"
            placeholder="Enter Student ID"
            value={std.student_id}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Course ID */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "500", marginBottom: "6px", display: "block" }}>
            Course ID
          </label>
          <input
            type="text"
            name="course_id"
            placeholder="Enter Course ID"
            value={std.course_id}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Date */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "500", marginBottom: "6px", display: "block" }}>
            Date
          </label>
          <input
            type="date"
            name="date"
            value={std.date}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Status */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "500", marginBottom: "6px", display: "block" }}>
            Status
          </label>
          <select
            name="status"
            value={std.status}
            onChange={handleChange}
            style={{
              ...inputStyle,
              background: "black",
              fontWeight: "600",
            }}
          >
            <option value="">Select Status</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={function () {
            Marked(std);
          }}
          style={submitButtonStyle}
          onMouseOver={function (e) {
            e.target.style.transform = "scale(1.03)";
          }}
          onMouseOut={function (e) {
            e.target.style.transform = "scale(1)";
          }}
        >
          ✅ Submit Attendance
        </button>
        

    
      </div>

      {/* Summary Section */}
      <label
        className="text-xl"
        style={{
          display: "block",
          textAlign: "center",
          marginTop: "20px",
          color: "black",
          fontSize: "18px",
        }}
      >
        Attendance Summary:
        <br />
        {std.student_id + " | " + std.course_id + " | " + std.date + " | " + std.status}
      </label>
    </>
  );
}

var inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  background: "rgba(255, 255, 255, 0.05)",
  color: "#fff",
  outline: "none",
};

var submitButtonStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "10px",
  borderRadius: "14px",
  background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
  color: "#fff",
  fontWeight: "600",
  fontSize: "16px",
  border: "none",
  cursor: "pointer",
  transition: "transform 0.3s ease",
};
