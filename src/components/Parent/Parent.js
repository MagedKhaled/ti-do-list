import {useState} from 'react'
import EnterTask from './EnterTask/EnterTask'
import ShowTasks from './ShowTasks/ShowTasks'
import './Parent.css'

const Parent = () => {
    const [tasks,setTasks] = useState([]);
        const addTask = (val) => {
            setTasks([...tasks,val])
        }
    return(
        <div className="Parent">
            <EnterTask 
                clickHandler = {(val) => addTask(val)}
            />
            <ShowTasks
                tasks = {tasks}
            />
        </div>
    )
}

export default Parent