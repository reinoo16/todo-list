import React, { useState } from 'react'
import Todo from './Todo';

function ToDoList() {

    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');

    const addTodo = () => {
        if (inputText) {
            setTodos([...todos, inputText]);
            setInputText('');
        }
    }

    const todoAddPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

    return (
        <div className='to-do-list'>
            <div className="container">
                <div className="to-do-items">
                    <h1>To-Do List</h1>
                    <div className="todo-add">
                        <input className='todo-add-input' type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyPress={todoAddPress} placeholder='Create To-Do' />
                        <div onClick={addTodo} className="add-btn">
                            <i class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                    <div className="todos">
                        {todos.map((todo, index) => (
                            <Todo key={index} todo={todo} onDelete={() => deleteTodo(index)} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList