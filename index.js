import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  console.log(req.url);
  res.send('Hello, world!');
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
