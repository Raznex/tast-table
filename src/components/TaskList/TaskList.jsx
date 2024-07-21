import Task from '../Task/Task';
import './TaskList.scss';
const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className='task-list'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
