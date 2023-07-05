import express from 'express';
import cors from 'cors';

import tasksRouter from './routers/tasks';
import usersRouter from './routers/users';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/tasks', tasksRouter);
app.use('/users', usersRouter);

app.listen(8000, () => console.log('Server started on port 8000'));
