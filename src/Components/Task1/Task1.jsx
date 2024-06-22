import React, { useState } from "react";
import "./Task1.css";
const Task1 = () => {
  const [age, setAge] = useState();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [attend, setAttend] = useState("");
  const [guestName, setGuestname] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const formHandler = (e) => {
    e.preventDefault();
    if (name == "") {
      alert("please fill the name field");
      return false;
    } else if (attend === "yes" && guestName == "") {
      alert("please fill the guest name");
      return false;
    } else if (mail === "") {
      alert("please fill email field");
      return false;
    } else {
      setIsTrue(true);
      alert("submitted");
      return true;
    }
  };

  const ageHandler = (e) => {
    if (e.target.value == 0 || e.target.value < 0 || typeof e == "string") {
      setAge("");
    } else {
      setAge(e.target.value);
    }
  };

  return (
    <>
      <h2>Event Registration Form</h2>
      <div className="parent">
        <form onSubmit={(e) => formHandler(e)}>
          <label htmlFor="name">Enter Your Name </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="email">Enter Your Email </label>
          <input
            type="email"
            id="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="age">Enter Your Age </label>
          <input
            type="number"
            id="number"
            value={age}
            onChange={(e) => ageHandler(e)}
          />
          {age === "" && <span> * please enter a valid age</span>}
          <br />
          <br />
          <label htmlFor="guest">are you attending with a guest </label>
          <input type="radio" name="guest" onClick={() => setAttend("yes")} />
          Yes
          <input type="radio" name="guest" onClick={() => setAttend("No")} />
          No
          <br />
          <br />
          {attend === "yes" && (
            <>
              <input
                value={guestName}
                onChange={(e) => setGuestname(e.target.value)}
                placeholder="enter the guest name"
                type="text"
              />
              <br /> <br />
            </>
          )}
          <button type="submit">submit</button>
        </form>
      </div>
      {isTrue && (
        <>
          <div className="parent1">
            <p> Name : {name}</p>
            <p>Email : {mail}</p>
            <p>Age : {age}</p>
            {attend === "yes" && <p>Guestname : {guestName}</p>}
          </div>
        </>
      )}
    </>
  );
};

export default Task1;
