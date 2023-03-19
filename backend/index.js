const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./models/User');



const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/signup', async (req, res) => {
    console.log(req.body);
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        email: req.body.email,
        password: hashedPassword,
        username:req.body.username
      });
      await user.save();
      const token = jwt.sign({ userId: user._id }, 'mysecretkey');
      res.send({ token });
    } catch (error) {
      console.log(error);
      res.status(500).send('An error occurred while signing up');
    }
  });

app.post('/login', async (req, res) => {
try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(401).send('Invalid email or password');
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
        return res.status(401).send('Invalid email or password');
    }
    const token = jwt.sign({ userId: user._id, username:user.username }, 'mysecretkey');
    res.send({ token });
} catch (error) {
    console.log(error);
    res.status(500).send('An error occurred while logging in');
}
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});