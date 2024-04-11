import React, { useState } from 'react';
import ListItem from './ListItem';
import { IoMdAdd } from "react-icons/io";
import "../styles/TodoList.css"

const TodoList = () => {
    const [task, setTask] = useState('');
    const [todoItems, setTodoItems] = useState(() => {
        const storedItems = localStorage.getItem('my-todo-items');
        if (storedItems) {
            return JSON.parse(storedItems)
        }
        return [];
    });

    const handleTask = (e) => {
        setTask(e.target.value);
    };

    // NEEDS WORK
    // is clearing entire list
    const handleRemove = (taskToRemove) => {
        setTodoItems((previousValues) => {
            const updatedTodoItems = previousValues.filter(item => item.description !== taskToRemove);
            localStorage.setItem('my-todo-items', JSON.stringify(updatedTodoItems));
            return updatedTodoItems;
        })
    }

    //Add todo item to list and update local storage list
    const addItem = () => {
        if (task) {
            setTodoItems((previousItems) => {
                const newItem = {
                    description: task,
                }
                const updatedItems = [newItem, ...previousItems]
                localStorage.setItem('my-todo-items', JSON.stringify(updatedItems));
                return updatedItems;
            });
            setTask('');
        }
    }


    return (
        <>
            <h2>Todo List</h2>
            <div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Add new task" aria-label="Add new task" aria-describedby="button-addon2" value={task} onChange={handleTask} />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addItem}><IoMdAdd />
                    </button>
                </div>
                <div class='list-wrapper'>
                    <ul class='todo-list'>
                        {/* map of list items goes here */
                            todoItems.map((item, i) => <ListItem key={i} description={item.description} remove={handleRemove}/>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
export default TodoList;