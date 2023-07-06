import { Router } from 'express';
import User from '../models/user';

const router = Router();

const users: User[] = [
  {
    id: Date.now() + 1,
    firstName: 'Alexandru',
    lastName: 'Barbulescu',
    email: 'alex_bb23@yahoo.co.uk',
    password: '123456',
  },
];

router.post('/', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Check if user already exist
  if (users.find(user => user.email === email)) {
    return res.status(409).send('The user is already registered.')
  }

  const user = new User(firstName, lastName, email, password);

  users.push(user);

  res.status(201).send(user);
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    user => user.email === email && user.password === password
  );

  if (!user) {
    res
      .status(404)
      .send('The user with the given email or password not exist.');
  }

  res.status(200).send(user);
});

export default router;
