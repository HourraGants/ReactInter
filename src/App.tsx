import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";

import "./App.css";

const sampleEmployee = {
  name: {
    first: "Leon",
    last: "Dixon",
  },
  email: "leon.dixon@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/51.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const [isLoading, setIsLoading] = useState(false);

  const getEmployee = () => {
    setIsLoading(true);
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="App">
        <EmployeeCard employee={employee} />
        <button type="button" onClick={getEmployee} disabled={isLoading}>
          {isLoading ? "Loading..." : "Get employee"}
        </button>
      </div>
    </>
  );
}

export default App;
