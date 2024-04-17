import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css"
import TaskCard from './TaskCard/TaskCard';

export default function DeskBody() {

    const [todoTasks, setTodoTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8080/user/1/tasks')
        .then(response => {
            const tasks = response.data;
            const todo = tasks.filter(task => task.status === 'to do');
            const inProgress = tasks.filter(task => task.status === 'in progress');
            const completed = tasks.filter(task => task.status === 'completed');
            setTodoTasks(todo);
            setInProgressTasks(inProgress);
            setCompletedTasks(completed);
        })
        .catch(error => {
            console.log(error)
        });
    }, []);

        console.log(todoTasks)
    return (
        <div className="task-list">
            <div className="column">
                <h2>To Do</h2>
                {todoTasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
            <div className="column">
                <h2>In Progress</h2>
                {inProgressTasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
            <div className="column">
                <h2>Completed</h2>
                {completedTasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
      </div>
    )
}