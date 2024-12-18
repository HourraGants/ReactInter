import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";

import "./App.css";

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

const newEmployee = {
  name: {
    first: "Isac",
    last: "Nøttveit",
  },
  email: "isac.nottveit@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    // Send the request
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };

  return (
    <>
      <div className="App">
        <EmployeeCard employee={employee} />
        <button type="button" onClick={getEmployee}>
          Get employee
        </button>
      </div>
    </>
  );
}

export default App;
