const express = require('express')
require('dotenv').config();
const app = express();
const cors = require('cors')
const port = process.env.port || 8000;
const mongoose = require('./config/mongoose')

app.use(cors());
app.use(express.json());


app.use(require('./routes/taskRoute'))
// Starting the server
app.listen(port,()=>{
    console.log(`Server is started at ${port}`);
})