import React, { useState } from 'react'
import "../Styling/LeftSidebar.css"
import PopUp from './PopUp'

function LeftSidebar({ openPopUp, setOpenPopUp, setFilteredTasks, tasks, isDarkMode }) {

    const [isActive, setIsActive] = useState('all');
    // const [filterActive, setFilterActive ] = useState(false)

    const handleOpenPopUp = () => {
        setOpenPopUp(true)
    }

    const handleAll = () => {
        setFilteredTasks(tasks);
        setIsActive('all');
    }

    const handleImportant = () => {
        const importantTasks = tasks.filter(todo => todo.isImportant);
        setFilteredTasks(importantTasks);
        setIsActive('important')
    }

    const handleOk = () => {
        const completedTasks = tasks.filter(todo => todo.isCompleted)
        setFilteredTasks(completedTasks);
        setIsActive('completed')
    }

    const handleUncompleted = () => {
        const unCompletedTasks = tasks.filter(todo => !todo.isCompleted)
        setFilteredTasks(unCompletedTasks);
        setIsActive('uncompleted')
    }

    return (
        <div>
            <div className='app'>
                <aside className={`sidebar-left ${isDarkMode ? "dark" : "light"}`}>
                    <h2>TO-DO LIST</h2>
                    <button className='btn-purple' onClick={handleOpenPopUp}>Add Task</button>
                    <nav>
                        <ul>
                            <li onClick={handleAll} className={isActive === 'all' ? "active-filter" : ""} >All tasks</li>

                            <li onClick={handleImportant} className={isActive === 'important' ? "active-filter" : ""} >Important tasks</li>

                            <li onClick={handleOk} className={isActive === 'completed' ? "active-filter" : ""} >Completed tasks</li>

                            <li onClick={handleUncompleted} className={isActive === 'uncompleted' ? "active-filter" : ""} >Uncompleted tasks</li>
                        </ul>
                    </nav>
                </aside>



                {openPopUp && <PopUp setOpenPopUp={setOpenPopUp} setFilteredTasks={setFilteredTasks} />}
            </div>
        </div>
    )
}

export default LeftSidebar