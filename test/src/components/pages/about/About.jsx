import React, {useState , useEffect} from 'react';
import Form from "./Form"
import Todolist from './Todolist';
const About =()=>{
const initialState= JSON.parse(localStorage.getItem("todos")) || []
const [input,setInput]=useState(" ");
const [todos,setTodos]=useState(initialState);
const [editTodo,setEditTodo]=useState(null)

useEffect (()=>{
localStorage.setItem("todos", JSON.stringify(todos))
},[todos]);
return(
    <div>
        <div className="container body">
            <div className="row mt-3">
                <div className="col-4">
                    <div className="main_wrapper">
                        <h1>Todo list</h1>
                        <Form
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                        />
                        <Todolist  todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;