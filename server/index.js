import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'this is index file' });
});
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`app is listening in the port address of ${port}`);
});
