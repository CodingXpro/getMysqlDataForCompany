const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hate123@',
    database: 'sslc',
    dialect: "mysql"
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get/:std_id', (req, res) => {
    const id = req.params.std_id;
    const sqlQuery = "SELECT  English,Hindi,Marathi,Math,Email_id,Phone_number,FirstName,result from studentinfo as s WHERE s.std_id=(?) ";
    db.query(sqlQuery, id, (err, result) => {
        if (err) {
            res.status(200).send({ message: `Error ${err}` });
        } else {
            res.status(200).send(result);
        }
    });

})
app.listen(3001, () => {
    console.log("server is running on 3001");
})