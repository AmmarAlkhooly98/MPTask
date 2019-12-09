const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const { sequelize } = require('./models');
const db = require('./models/index');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

require('./routes')(app);

sequelize.sync({ force: false }).then(() => {
	app.listen(config.port);
	console.log(`listening on port ${config.port}`);
});
