import './ShowTasks.css'

const ShowTasks = (props) => {
    const doDone = (target) => {
        target.innerText = 'Undo'
        target.className = 'btn btn-primary'
        target.parentElement.parentElement.className="row bg-secondary"
    }

    const doUndo = (target) => {
        target.innerText = 'Done'
        target.className = 'btn btn-success'
        target.parentElement.parentElement.className="row"

    }

    const doneClick = (event) => {
        {event.target.innerText == 'Done' ? (
            doDone(event.target)
            
        ):(
            doUndo(event.target)
        )}
    }

    
    const cancelClick = (event) => {
        let parentElement = event.target.parentElement.parentElement
        parentElement.remove();
    }
            
    
    
    return(
        <div className="showContainer">
            <h1>Let's get some work done!</h1>
            <div className="taskContainer">
                {props.tasks.map((task) => {
                    return(
                        <label className="row">
                            <h1 className="col-6">{task}</h1>
                            <div className="col">
                            <button className="btn btn-success" onClick={doneClick}>Done</button>
                            <button className="btn btn-warning" onClick={cancelClick}>Cancel</button>
                            </div>
                            </label>
                    );
                })}
            </div>
        </div>
    )
}

export default ShowTasks