import { FaTrash, FaCheckCircle } from "react-icons/fa";


const TaskItem = ({ task, index, toggleTask, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(index)}>
        <FaCheckCircle className="check-icon" />
        {task.text}
      </span>
      <FaTrash className="delete-icon" onClick={() => deleteTask(index)} />
    </div>
  );
};

export default TaskItem;
