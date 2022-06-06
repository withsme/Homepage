const express = require('express');
const app = express();
const PORT = 5000; 

const router = require('./Router/router');
const activityRouter = require('./Router/activityRouter');
const seminarRouter = require('./Router/seminarRouter');
const publicationRouter = require('./Router/publicationRouter');
const newsRouter = require('./Router/newsRouter');

app.use(express.json());
var cors = require('cors')
app.use(cors());

app.use('/activity', activityRouter);
app.use('/seminar', seminarRouter);
app.use('/publication', publicationRouter);
app.use('/news', newsRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`
)});