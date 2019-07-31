const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connect = require('./config/db');

connect();

app.use(cookieParser());
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/books', require('./routes/books'));

app.get('/', (req, res) => {
  res.send('hello from root');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
