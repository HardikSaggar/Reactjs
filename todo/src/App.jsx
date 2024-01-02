import AddItems from "./components/AddItems";
import AppTodo from "./components/AddTodo";
import AppName from "./components/AppName";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <AddItems></AddItems>
        <AddItems></AddItems>
      </center>
    </>
  );
}

export default App;
