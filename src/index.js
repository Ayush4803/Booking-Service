const express = require('express');
const bodyparser=require('body-parser')
const app = express();
const dotenv = require('dotenv');
const apiRoutes= require('./routes/index');
const db= require('./models/index')
dotenv.config();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
const PORT = process.env.PORT || 3000; // add a fallback in case .env is missing
app.use('/api',apiRoutes)
app.listen(PORT, () => {
  console.log(`Successfully started the server at PORT: ${PORT}`);
  if(process.env.DB_SYNC){
    db.sequelize.sync({alter:true})
  }
});
