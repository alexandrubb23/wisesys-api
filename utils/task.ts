import Task from '../models/task';

function taskId(id: string) {
  return (task: Task) => task.id === parseInt(id);
}

export default taskId;
