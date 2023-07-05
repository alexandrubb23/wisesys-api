import { Router } from 'express';
import CreateTaskDto from '../dtos/create-task';
import UpdateTaskDto from '../dtos/update-task';
import Task from '../models/task';
import taskId from '../utils/task';

const router = Router();

const tasks: Task[] = [
  {
    id: Date.now() + 1,
    title: 'Complete Project Proposal',
    description: 'Description 1',
    createDate: '2021-01-01',
  },
  {
    id: Date.now() + 2,
    title: 'Review Codebase',
    description: 'Description 2',
    createDate: '2021-01-02',
  },
  {
    id: Date.now() + 3,
    title: 'Prepare Presentation',
    description: 'Description 3',
    createDate: '2021-01-03',
  },
  {
    id: Date.now() + 4,
    title: 'Debug Application',
    description: 'Description 4',
    createDate: '2021-01-04',
  },
  {
    id: Date.now() + 5,
    title: 'Write Documentation',
    description: 'Description 5',
    createDate: '2021-01-05',
  },
  {
    id: Date.now() + 6,
    title: 'Optimize Performance',
    description: 'Description 6',
    createDate: '2021-01-06',
  },
  {
    id: Date.now() + 7,
    title: 'Implement New Feature',
    description: 'Description 7',
    createDate: '2021-01-07',
  },
  {
    id: Date.now() + 8,
    title: 'Test Application',
    description: 'Description 8',
    createDate: '2021-01-08',
  },
  {
    id: Date.now() + 9,
    title: 'Deploy to Production',
    description: 'Description 9',
    createDate: '2021-01-09',
  },
  {
    id: Date.now() + 10,
    title: 'Fix Bug in Login System',
    description: 'Description 10',
    createDate: '2021-01-10',
  },
];

router.get('/', (req, res) => {
  res.json(tasks);
});

router.post('/', (req, res) => {
  const { title, description } = req.body as CreateTaskDto;
  const task = new Task(title, description);

  tasks.push(task);

  res.status(201).json(task);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body as UpdateTaskDto;

  const task = tasks.find(taskId(id)) as Task;

  if (!task) {
    res.status(404).send('The task with the given id not exist.');
  }

  task.title = title;
  task.description = description;

  res.json(task);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex(taskId(id));

  const newTasks = tasks.splice(taskIndex, 1);

  res.json(newTasks);
});

export default router;
