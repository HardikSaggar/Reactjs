import styles from './TodoItem.module.css'

export default function TodoItem({ todoName, todoDate }) {
  // let todoName = "Milk";
  // let todoDate = "04/12/2020";
  return (
    <div className={`row ${styles["added-items"]}`}>
      <div className="col-6">
        <p>{todoName}</p>
      </div>
      <div className="col-4">
        <p>{todoDate}</p>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
