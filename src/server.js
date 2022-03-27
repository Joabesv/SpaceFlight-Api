import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  return res
    .status(200)
    .json({ msg: 'Back-end Challenge 2021 🏅 - Space Flight News' });
});

app.listen(PORT, () => {
  return console.log(`Server Started at http://localhost:${PORT}`);
});
