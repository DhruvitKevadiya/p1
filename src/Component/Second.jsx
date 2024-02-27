import React, { useState } from "react";

function Second() {
  const [arrey, setArrey] = useState([
    {
      roll_no: 1,
      name: "Dhruvit",
      gender: "Male",
    },
    {
      roll_no: 2,
      name: "Manish",
      gender: "Male",
    },
    {
      roll_no: 3,
      name: "Rushika",
      gender: "Female",
    },
    {
      roll_no: 4,
      name: "Jay",
      gender: "Male",
    },
    {
      roll_no: 5,
      name: "Priyanka",
      gender: "Female",
    },
    {
      roll_no: 6,
      name: "Ashika",
      gender: "Female",
    },
    {
      roll_no: 7,
      name: "Rajesh",
      gender: "Male",
    },
    {
      roll_no: 8,
      name: "Rashika",
      gender: "Female",
    },
    {
      roll_no: 9,
      name: "Rashmi",
      gender: "Female",
    },
    { roll_no: 10, name: "Ramesh", gender: "Male" },
  ]);

  const boys = arrey.filter((element) => element.gender === "Male");

  const girls = arrey.filter(element => element.gender == "Female");

  return (
    <>
      <div>
        <h4>Male Students</h4>
        <ul>
          {boys.map((element) => {
            return <li key={element.roll_no}>{element.name}</li>;
          })}
        </ul>
        <h4>Female Students</h4>
        <ul>
          {girls.map((element) => {
            return <li key={element.roll_no}>{element.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Second;
