const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const app = express();
app.use(express.json());
app.use('/api', apiRoutes);
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch(err => console.error(err));
