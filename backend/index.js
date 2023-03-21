const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const User = require('./models/User');
const Pdf = require('./models/pdfSchema');
const Annotation = require('./models/annotationSchema');


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/')
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "_"+file.originalname);
  }
})
const upload = multer({storage: storage})

mongoose.connect('mongodb+srv://aman003malhotra:Aman123@cluster0.hcbyp.mongodb.net/pdfEditor?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/signup', async (req, res) => {
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
    res.send({ token, username:user.username, id:user._id   });
} catch (error) {
    res.status(500).send('An error occurred while logging in');
}
});



app.post('/file-upload', upload.single('pdfFile') , async (req, res) => {    
    if(req.file.mimetype === 'application/pdf'){
      const fileName = req.file.filename;
      const user_id = req.body.user_id;
      const pdf = new Pdf({
        user: user_id,
        filename: fileName
      });
      await pdf.save();
      res.status(200).send('File Saved Successfully')
    }else{
      res.status(401).send('Invalid File Type');
    }
});

app.post('/file-delete', async(req,res) => {
  try{
    const data = await Pdf.deleteOne({ filename: req.body.filename });
    res.status(200).send("file deleted successfully");
  }catch{
    res.status(500).send("unable to fetch data right now");
  }
    
    
    
})

app.get('/allfiles/:user_id', async (req, res) => {
  try{
    const data = await Pdf.find({ user: req.params.user_id });
    res.status(200).send(data);
  }
  catch{
    res.status(500).send("unable to fetch data right now");
  }
});

app.get('/get_all_annotation/:filename', async(req,res) => {
    const anno = await Annotation.find({filename:req.params.filename});
    res.status(200).send(anno);
})

app.post('/add_annotation', async(req,res) => {
  const anno = new Annotation({annotation:req.body.annotation ,filename: req.body.filename, ann_id:req.body.id});
  await anno.save();
  res.status(200).send('Annotation saved successfully')
})

app.post('/delete_annotation', async(req,res) => {
  const anno = await Annotation.deleteOne({ ann_id:req.body.id});
  res.status(200).send('Annotation deleted successfully');
})

app.post('/update_annotation', async(req,res) => {
  const anno = await Annotation.updateOne({ ann_id: req.body.id}, { annotation: req.body.updated });
  res.status(200).send(anno);
})

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});