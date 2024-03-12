const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
//restapi
//hCculxYmGbucGpXq
//mongodb+srv://restapi:<password>@cluster0.q1rxnpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect('mongodb+srv://cluster0.q1rxnpn.mongodb.net/RestAPI', {
    appName: 'Cluster0',
    user: 'restapi',
    pass: 'hCculxYmGbucGpXq'
})
.then(() =>{
    console.log('MongoDB is connected...');
});

const EmployeeRoute = require('./Route/Employee.route');
app.use('/employees', EmployeeRoute);

// app.all('/test', (req, res, next) =>{
//    console.log(req.params);
//    res.send('req.query');
// });

// Wrong endpoint
app.use((req, res, next) =>{
    const err = new Error("Not Found");
    err.status = 404; 
    next(err); 
});

//Express Error Handler Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(3000, () =>{
    console.log("Listening to port 3000...");
});