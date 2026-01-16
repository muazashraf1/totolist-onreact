import React, { useState } from 'react'
import "../Styling/PopUp.css"

function PopUp({ setOpenPopUp, setTasks, setFilteredTasks, isDarkMode }) {

    const [newTasks, setNewTasks] = useState({ isCompleted: false, isImportant: false, date: "", description: "", task: "" })

    const handleClose = () => {
        setOpenPopUp(false)
    }

    const handleChange = (e) => {
        setNewTasks({ ...newTasks, task: e.target.value })
    }

    const handleDateChange = (e) => {
        setNewTasks({ ...newTasks, date: e.target.value })
    }

    const handleDescriptionChange = (e) => {
        setNewTasks({ ...newTasks, description: e.target.value })
    }

    const handleClosedPopUpAndAdd = () => {
        setOpenPopUp(false);

        setTasks(prevTasks => [...prevTasks, newTasks]);
        setFilteredTasks(prevTasks => [...prevTasks, newTasks]);

    }


    return (
        <div className={`popup-overlay ${isDarkMode ? "dark" : "light"}`} onClick={() => setOpenPopUp(false)}>
            <div className={`popup-content ${isDarkMode ? "dark" : "light"}`} onClick={(e) => e.stopPropagation()}>
                <div className={`popup-header ${isDarkMode ? "dark" : "light"}`}>
                    <h2>Add a task</h2>
                    <span className='close-btn' onClick={handleClose}>×</span>
                </div>

                <div className={`popup-body ${isDarkMode ? "dark" : "light"}`}>
                    <label>Title</label>
                    <input type="text" onChange={handleChange} placeholder='e.g styudy for test ...' />

                    <label>Date</label>
                    <input type="date" onChange={handleDateChange} />

                    <label>Description (optional)</label>
                    <textarea placeholder='e.g enter ypour reminder ....' onChange={handleDescriptionChange}></textarea>

                    <div className='check-boxes'>
                        <label><input type="checkbox" onChange={() => setNewTasks({ ...newTasks, isImportant: !newTasks.isImportant })} />Mark as Important</label>
                        <label><input type="checkbox" onChange={() => setNewTasks({ ...newTasks, isCompleted: !newTasks.isCompleted })} />Mark as complete</label>
                    </div>

                    <button className='add-task-btn' onClick={handleClosedPopUpAndAdd}>Add Task</button>
                </div>
            </div>

        </div>
    )
}

export default PopUp