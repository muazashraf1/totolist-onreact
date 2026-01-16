import React from 'react'
import "../Styling/RightSidebar.css"

function RightSidebar({ isDarkMode, toggleDarkMode }) {
    return (
        <aside className={`sidebar-right ${isDarkMode ? "dark" : "light"}`}>
            <div className="user-box">
                <p>Hi, User!</p>
                <img src="fav.ico" alt="" />
            </div>
            <div className="darkmode">

                <button onClick={toggleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>

            </div>
        </aside>
    )
}

export default RightSidebar