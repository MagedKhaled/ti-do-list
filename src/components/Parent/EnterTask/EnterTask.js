import './EnterTask.css'

const EnterTask = (props) => {
    // clickHandler = props.clickHandler
    const addTaskClick = () => {
        var inpElement = document.getElementById('taskName')
        {inpElement.value ? (props.clickHandler(inpElement.value)) : (alert('Enter Valid Task'))}
        
    }
    return(
        <div className="firstEnterContainer">
        <div className="bg-primary enterContainer"> 
            <h1>To-Do App!</h1>
            <h4>Add New To-Do</h4>
            <input id='taskName' className="form-control" type="text" placeholder='Enter new task' />
            <button id='taskAdd' className="btn btn-primary" onClick={() => addTaskClick()}>Add</button>
        </div>
        </div>  
    )
}

export default EnterTask