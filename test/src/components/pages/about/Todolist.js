import React from "react";
const Todolist = ({ todos, setTodos,setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id == todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
const handleEdit =({id})=>{
const findTodo=todos.find((todo)=> todo.id === id)
setEditTodo(findTodo); 
}
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="todo_list" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button_complete task_button"
              onClick={() => handleComplete(todo)}
            >
              <i className="bi bi-check2-circle"></i>
            </button>
            <button className="button_edit task_button"
             onClick={() => handleEdit(todo)}
            >
              <i className="bi bi-pencil-square"></i>
            </button>
            <button
              className="button_delete task_button "
              onClick={() => handleDelete(todo)}
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
export default Todolist;
