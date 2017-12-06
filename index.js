import express from 'express'
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000;

// mongose connect
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/crmdb', {
  useMongoClient: true
})

// bodyParser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

// pass app to routes
routes(app)


app.get('/', (req, res) => 
  res.send('Node and express server is running ont port 3000')
);

app.listen(PORT, () => 
  console.log('your server is running ont port 3000')
);