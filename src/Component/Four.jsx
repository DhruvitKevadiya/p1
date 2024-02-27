import React, { useEffect, useState } from "react";

export const Four = () => {

  const data = [
    {
      roll_no: 1,
      name: "Dhruvit",
      gender: "Male",
      maths: 30,
      english: 30,
      science: 20,
    },
    {
      roll_no: 2,
      name: "Manoj",
      gender: "Male",
      maths: 60,
      english: 40,
      science: 60,
    },
    {
      roll_no: 3,
      name: "Rushika",
      gender: "Female",
      maths: 50,
      english: 90,
      science: 30,
    },
    {
      roll_no: 4,
      name: "Jay",
      gender: "Male",
      maths: 50,
      english: 90,
      science: 60,
    },
    {
      roll_no: 5,
      name: "Priyanka",
      gender: "Female",
      maths: 70,
      english: 90,
      science: 80,
    },
    {
      roll_no: 6,
      name: "Ashika",
      gender: "Female",
      maths: 85,
      english: 90,
      science: 89,
    },
    {
      roll_no: 7,
      name: "Rajesh",
      gender: "Male",
      maths: 33,
      english: 40,
      science: 50,
    },
    {
      roll_no: 8,
      name: "Rashika",
      gender: "Female",
      maths: 80,
      english: 70,
      science: 89,
    },
    {
      roll_no: 9,
      name: "Rashmi",
      gender: "Female",
      maths: 89,
      english: 90,
      science: 87,
    },
    {
      roll_no: 10,
      name: "Ramesh",
      gender: "Male",
      maths: 60,
      english: 70,
      science: 60,
    },
  ];

  const [arrey, setArrey] = useState(data);


  const abc = (ele) => {
    if (ele > 90 && ele <= 100) {
      return "Pass with A grade";
    } else if (ele > 80 && ele <= 90) {
      return "Pass with B grade";
    } else if (ele > 70 && ele <= 80) {
      return "Pass with C grade";
    } else if (ele > 60 && ele <= 70) {
      return "Pass with D grade";
    } else if (ele > 50 && ele <= 60) {
      return "Pass with E grade";
    } else {
      return "Fail";
    }
  };
  const [sortOrder, setSortOrder] = useState("descending");
  // const [rank,setRank] = useState();

  const calculateSort = () => {

    const newArray = arrey.sort((a, b) => {
      return sortOrder === "ascending"
        ? a.maths + a.english + a.science - (b.maths + b.english + b.science)
        : b.maths + b.english + b.science - (a.maths + a.english + a.science);
    });

    // const newArray2 = newArray.map((student, index) => {
    //   return {
    //     ...student,
    //     rank: index +  1
    //   };
    // });
  
    setArrey(newArray);
  };
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };
  useEffect(calculateSort, [sortOrder]);


  
  return (
    <>
      <div style={{ margin: "10px", textAlign: "center" }}>
        <select
          name="sort"
          id="sort"
          onChange={handleSortChange}
          value={sortOrder}
        >
          <option value="descending">Descending</option>
          <option value="ascending">Ascending</option>
        </select>
      </div>
      <div
        style={{
          border: "2px solid red",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {arrey.map((element) => {
          return (
            <div
              key={element.roll_no}
              style={{
                border: "2px solid black",
                width: "300px",
                margin: "10px",
              }}
            >
              <h3>Name: {element.name}</h3>
              <h3>Roll Number: {element.roll_no}</h3>
              <h3>Gender: {element.gender}</h3>
              <h3>
                Total Marks: {element.maths + element.english + element.science}
              </h3>
              <h3>
                Percentage:{" "}
                {(
                  (100 *
                    ((element.maths + element.english + element.science) / 3)) /
                  90
                ).toFixed(2)}
                %
              </h3>
              <h3>
                Grade:{" "}
                {abc(
                  (100 *
                    ((element.maths + element.english + element.science) / 3)) /
                    90
                )}
              </h3>
              {/* <h3>Rank: {element.rank}</h3> */}
            </div>
          );
        })}
      </div>
    </>
  );
};
