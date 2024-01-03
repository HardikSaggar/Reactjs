import AppTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import './App.css'

function App() {
  const todoItems = [
    { name: "Visit Market", date: "20/01/2024" },
    { name: "Buy", date: "20/01/2024" },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
