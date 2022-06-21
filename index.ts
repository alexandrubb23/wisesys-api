import express from 'express';
import remindersRouter from './routers/reminders';

const app = express();

app.use(express.json());
app.use('/reminders', remindersRouter);

app.listen(8000, () => console.log('Server started on port 8000'));
