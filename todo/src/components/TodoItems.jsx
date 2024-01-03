import TodoItem from "./TodoItem";


export default function TodoItems({ todoItems }) {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.date}></TodoItem>
      ))}
    </div>
  );
}
