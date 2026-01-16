import React, { useState } from "react";
import LeftSidebar from "./Components/LeftSidebar";
import Main from "./Components/Main";
import RightSidebar from "./Components/RightSidebar";

function App() {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((dark) => !dark)
  }
  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <LeftSidebar
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
        tasks={tasks}
        setFilteredTasks={setFilteredTasks}
        isDarkMode={isDarkMode}
      />

      <Main
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
        tasks={tasks}
        setTasks={setTasks}
        filteredTasks={filteredTasks}
        setFilteredTasks={setFilteredTasks}
        isDarkMode={isDarkMode}
      />

      <RightSidebar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    </div>
  );
}

export default App;
