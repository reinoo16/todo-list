import React, { useState } from 'react'

function Todo(props) {

    const [checked, setChecked] = useState(false);

    const checkClick = () => {
        setChecked(!checked);
    }

    return (
        <div className="todo">
            <div>
                <label className={checked ? 'tickShow' : null} onClick={checkClick}>
                    <i class="bi bi-check2"></i>
                </label>
                <p>{props.todo}</p>
            </div>
            <div onClick={props.onDelete} className="rubbish">
                <i class="bi bi-trash-fill"></i>
            </div>
        </div>
    )
}

export default Todo