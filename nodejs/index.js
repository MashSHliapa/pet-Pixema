import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;

// "база" пользователей
const users = [{ id: 1, email: 'test@example.com', passwordHash: bcrypt.hashSync('hhfjJJ!@5', 10) }];

app.post('/signIn', (req, res) => {
  const { email, password } = req.body;

  const user = users.find((item) => item.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Пользователь не найден' });
  }
  const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);
  console.log(password);
  console.log(user.passwordHash);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Неверный пароль' });
  }
  // Генерируем JWT
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
  console.log(token)
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
