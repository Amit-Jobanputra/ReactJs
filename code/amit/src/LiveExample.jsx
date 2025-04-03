import React from 'react';
import { useState } from 'react';
export const LiveExample =()=> {
    function handleChange(event) {
        console.log(event.target.value);
        // setName(event.target.value);
        if(event.target.name === "FirstName"){
            setFirstName(event.target.value);}
        else if(event.target.name === "LastName"){
            setLastName(event.target.value);}
    }
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
  return (
    <>
        <div style={{height:"100vh",display:"flex"}}>
            <div style={{height:"100%",backgroundColor:"lightgreen" , width:"50%", border:"2px solid black",margin:"20px", padding:"20px"}}><div>
                    <label className="text-xl">Your FirstName:- </label>
                    <input type="text" placeholder="Enter Your Name"  onChange={(e)=>{handleChange(e)}} name="FirstName" /></div>
                    <div>
                    <label className="text-xl">Your LastName:- </label>
                    <input type="text" placeholder="Enter Your Name"  onChange={(e)=>{handleChange(e)}} name="LastName" />
                    </div>
            </div>

            <div  style={{height:"100%",backgroundColor:"lightblue" , width:"50%", border:"2px solid black",margin:"20px", padding:"20px"}}>
                <label className="text-xl">Your Name:-{`${FirstName} ${LastName}`} </label>
            </div>
        </div>
    </>
  );
};