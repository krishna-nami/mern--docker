import express from 'express';
const app = express();
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.json({ message: 'Home file' });
});

app.listen(port, () => {
  console.log(`The app is listening in port address ${port}`);
});
