const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());



app.get('/api/exercise', (req, res) => {
   
   res.status(200).send(req.query);
});




app.post('/api/exercise', (req, res) => {
    const body = req.body
    const jsonStr = JSON.stringify(body)

    res.status(200).send(body.innerHTML = jsonStr)
        
    /*"<h1>Hello from Express!<h1>" + "<h2>POST parameters<h2>" + "<p>I received these parameters: </p>" +
    "<ul>" + "<li>" +"firstname: " + firstname + "</li>" + "<li>" + "lastname: " + lastname + "</li>"+
    "<li>" + "submit: " + submit + "</li>" + "</ul>")
    console.log(req.body)*/
});

app.post('/api/login', (req, res) => {
    let user = req.body.user
    let password = req.body.pwd
    if (user == ('') || password==('')) {
        res.status(400).send("Please fill in username and password")
    } else if (user == ('mark')&& password==('giraffe')) {
        res.status(200).send(req.body)
    } else {
        res.status(403).end();
    }
});

app.get('/api', (req, res) => {
    res.json({msg: 'Hello World!'})
})

app.listen(port, () => console.log(`Server listening on port ${port}`));