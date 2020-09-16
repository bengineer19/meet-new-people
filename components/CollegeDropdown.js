import React from "react";
import Styled from "styled-components";

const colleges = [
  "Select College",
  "Christ's",
  "Churchill",
  "Clare",
  "Corpus Christi",
  "Downing",
  "Emmanuel",
  "Fitzwilliam",
  "Girton",
  "Gonville & Caius",
  "Homerton",
  "Hughes Hall",
  "Jesus",
  "King's",
  "Lucy Cavendish",
  "Magdalene",
  "Murray Edwards",
  "Newnham",
  "Pembroke",
  "Peterhouse",
  "Queens'",
  "Robinson",
  "Selwyn",
  "Sidney Sussex",
  "St Catharine's",
  "St Edmund's",
  "St John's",
  "Trinity",
  "Trinity Hall",
  "Wolfson",
];

const Select = Styled.select`
  height: 50px;
  width: 200px;
  background-color: #E9EFF6;
  color: #666;

  border-width: 0;
  border-radius: 10px;
  padding: 5px;
`;

export default React.forwardRef(({ register }, ref) => (
  <>
    <Select name="college" ref={ref}>
      {colleges.map((college) => {
        const collegeKey = college
          .toLowerCase()
          .split(" ")
          .join()
          .split("'")
          .join();
        return (
          <option value={collegeKey} key={collegeKey}>
            {college}
          </option>
        );
      })}
    </Select>
  </>
));
