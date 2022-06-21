import Reminder from '../models/reminder';

function reminderId(id: string) {
  return (reminder: Reminder) => reminder.id === parseInt(id);
}

export default reminderId;
