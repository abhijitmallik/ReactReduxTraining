const app = require('express')();
//const router = express.Router();

/* GET home page. */
app.get('/', function(req, res) {
  res.JSON({title: 'Express' });
});