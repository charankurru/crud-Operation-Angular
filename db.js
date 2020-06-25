const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(
  process.env.MONGODB_URL ||
    'mongodb+srv://charan:bharathi@cluster0-2hbtz.mongodb.net/easyPrep?retryWrites=true&w=majority',
  options,
  (err) => {
    if (!err) console.log('MongoDB connection succeeded.');
    else
      console.log(
        'Error in DB connection : ' + JSON.stringify(err, undefined, 2)
      );
  }
);

module.exports = mongoose;
