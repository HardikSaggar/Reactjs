import styles from './AddTodo.module.css'

export default function AppTodo() {
  return (
      <div className={`${styles['add-items']} row`}>
      <div className="col-6">
        <input type="text" placeholder="Enter here" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}