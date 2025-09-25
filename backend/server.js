const express = require('express');
const dotenv = requir("dotenv");
const connectdb = require('./config/db');

const authRoutes = require('./routes/auth');

dotenv.config() ;

connectdb();
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send("server is running");
});

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
});

