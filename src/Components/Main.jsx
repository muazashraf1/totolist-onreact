import "../Styling/Main.css"
import PopUp from '../Components/PopUp'

function Main({ openPopUp, setOpenPopUp, setTasks, setFilteredTasks, filteredTasks, tasks, isDarkMode }) {

    const handleOpenPopUp = () => {
        setOpenPopUp(true)
    }

    const handleCompleted = (index) => {
        const updatedTasks = [...filteredTasks];
        updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted
        setFilteredTasks(updatedTasks)
    }

    const handleDelete = (index) => {
        const taskToDelete = filteredTasks[index];
        const updatedFilteredTask = filteredTasks.filter((_, i) => i !== index)
        setFilteredTasks(updatedFilteredTask)

        const updatedTasks = tasks.filter(todo => todo !== taskToDelete)
        setTasks(updatedTasks)
    }

    const handleImportant = (index) => {
        const updatedFilteredTask = [...filteredTasks];
        const selectedTask = updatedFilteredTask[index];
        selectedTask.isImportant = !selectedTask.isImportant;

        const updatedTasks = tasks.map(todo =>
            todo.task === selectedTask.task
                ? { ...todo, isImportant: selectedTask.isImportant }
                : todo
        );

        setFilteredTasks(updatedFilteredTask);
        setTasks(updatedTasks);
    }

    const handleSearch = (e) => {
        const search = e.target.value.toLowerCase();
        const filtered = tasks.filter(task =>
            task.task.toLowerCase().includes(search)
        );
        setFilteredTasks(filtered);
    }

    const d = new Date();
    const date = d.toLocaleDateString('en-GB');

    return (
        <main className={`main-content ${isDarkMode ? "dark" : "light"}`}>

            <div className="main-section">

                <div className='top-bar'>
                    <input type="text" onChange={handleSearch} placeholder="Serach the task" className='search-box' />
                    <span className='date'>{date}</span>
                    <button className="main-btn" onClick={handleOpenPopUp} >ADD TASK</button>
                </div>

                <div className="task-content">
                    <h3 className='task-h3'>All task ({filteredTasks.length} tasks) </h3>

                    <div className='task-list'>
                        {filteredTasks.map((todo, index) => (
                            <div key={index} className={`task-item ${todo.isCompleted ? "completed-task" : ""}`}>
                                <div className='task-description'>
                                    <div className='completed-btn'>
                                        <button className='task-btn' onClick={() => handleCompleted(index)}>{todo.isCompleted ? "completed" : "Uncmpleted"}</button>
                                    </div>
                                    <h3>{todo.task}</h3>
                                    <p>{todo.date}</p>
                                </div>
                                <h4>{todo.description}</h4>

                                <div className='task-btm-content'>

                                    <div className='task-icons'>
                                        <i onClick={() => handleImportant(index)} className={`fa-solid fa-star ${todo.isImportant ? "important-task" : ""}`}></i>
                                        <i onClick={() => handleDelete(index)} className="fa-solid fa-trash-can"></i>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="add-box" onClick={handleOpenPopUp}>Add new task</div>
                </div>




                {openPopUp && <PopUp setOpenPopUp={setOpenPopUp} setTasks={setTasks} setFilteredTasks={setFilteredTasks} isDarkMode={isDarkMode} />}
            </div>
        </main>
    )
}

export default Main