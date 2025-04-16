import React from "react";
import { useState } from "react";
export const LiveExample1 = () => {
  const [profile, setProfile] = useState("");
  function handleChange(event) {
    setProfile({...profile, [event.target.name]: event.target.value });
  }
  async function datasubmit(data){
    const response = await fetch("http://127.0.0.1:8000/api/test",{method:"POST",body:JSON.stringify(data),headers:{
      "Content-Type":"application/json",
    },
  })
  .then((response) => {
    return response.json();
  })
  .then((rdata) => {
    console.log(rdata);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}
  return (
    <>
      <div style={{ height: "100vh", display: "flex" }}>
        <div
          style={{
            height: "100%",
            backgroundColor: "lightgreen",
            width: "50%",
            border: "2px solid black",
            margin: "20px",
            padding: "20px",
          }}
        >
          <div>
            <label className="text-xl">Your FirstName:- </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => {
                handleChange(e);
              }}
              name="FirstName"
            />
          </div>
          <div>
            <label className="text-xl">Your FatherName:- </label>
            <input
              type="text"
              placeholder="Enter Your FatherName"
              onChange={(e) => {
                handleChange(e);
              }}
              name="FatherName"
            />
          </div>
          <div>
            <label className="text-xl">Your LastName:- </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => {
                handleChange(e);
              }}
              name="LastName"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              placeholder="Enter Your Name"
              onClick={()=> {
                datasubmit(profile);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              name="Submit"
            />
          </div>
        </div>

        <div
          style={{
            height: "100%",
            backgroundColor: "lightblue",
            width: "50%",
            border: "2px solid black",
            margin: "20px",
            padding: "20px",
          }}
        >
          <label className="text-xl">
          Your Name:-{`${profile.FirstName!=undefined?profile.FirstName:""} ${profile.FatherName!=undefined?profile.FatherName:""} ${profile.LastName!=undefined?profile.LastName:""}`}{" "}
          </label>
        </div>
      </div>
    </>
  );
};
