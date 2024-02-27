import React, { useEffect, useState } from "react";

export const Six = () => {
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
      maths: 100,
      english: 90,
      science: 90,
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

  const [arrey, setArrey] = useState([]);
  const [sortOrder, setSortOrder] = useState("descending");

  const handleSortChange = (event) => {
    if(event.target.value !== sortOrder){

        let studentData = [...arrey];
        if(studentData?.length > 0){
            studentData = studentData
          .sort((a, b) => {
            return event.target.value === "descending"
              ? a.per - b.per
              : b.per - a.per;
          })
        //   .map((item, index) => {

        //     const rnk = event.target.value === "descending"
        //     ? studentData.length - index 
        //     : index +   1;
        //     return { ...item, rank: rnk };
        //   });
            setArrey(studentData);

        }
        setSortOrder(event.target.value);
    }
  };



  useEffect(() => {
     if(data?.length>0){
    let studentData = [...data];
    studentData = studentData.map((item) =>{

        let totalMarks = 0;
        totalMarks += item?.english?item.english:0;
        totalMarks += item?.maths?item.maths:0;
        totalMarks += item?.science?item.science:0;

        const per = totalMarks > 0 ? (totalMarks/3)?.toFixed(2) : 0.0;

        let grade =
        per > 90 && per <= 100
          ? "A"
          : per > 80 && per <= 90
          ? "B"
          : per > 70 && per <= 80
          ? "C"
          : per > 60 && per <= 70
          ? "D"
          : per > 50 && per <= 60
          ? "E"
          : "Fail";
           
        return {...item,totalMarks,per,grade}
    });
    studentData = studentData
    .sort((a, b) => {
      return a.per - b.per;
    })
    .map((item,index)=>{
        return {...item ,rank: studentData?.length - index};
    });
    setArrey(studentData);

    }
    
  }, [])
  

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
              <h3>Total Marks: {element.totalMarks}</h3>
              <h3>Percentage: {element.per}%</h3>
              <h3>Grade: {element.grade}</h3>
              <h3>Rank: {element.rank}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};
