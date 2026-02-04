const bodyParser = require('body-parser');
const cors = require('cors'); 

var apiRouter = require('./api');
var siteRouter = require('./site');

module.exports = function(app){
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/', siteRouter);
   app.use('/api', apiRouter); 
}