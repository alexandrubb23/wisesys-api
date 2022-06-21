import { Router } from 'express';
import CreateReminderDto from '../dtos/create-reminder';
import UpdateReminderDto from '../dtos/update-reminder';
import Reminder from '../models/reminder';
import reminderId from '../utils/reminder';

const router = Router();

const reminders: Reminder[] = [];

router.get('/', (req, res) => {
  res.json(reminders);
});

router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);

  reminders.push(reminder);

  res.status(201).json(reminder);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body as UpdateReminderDto;

  const reminder = reminders.find(reminderId(id)) as Reminder;

  if (!reminder) {
    res.status(404).send('The reminder with the given id not exist.');
  }

  reminder.title = title;

  res.json(reminder);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const reminderIndex = reminders.findIndex(reminderId(id));

  res.json(reminders.splice(reminderIndex, 1));
});

export default router;
