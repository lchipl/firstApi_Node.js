const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const jsonParser = bodyParser.json();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/users"));
const urlencodedParser = bodyParser.urlencoded({ extended: false })
	const users = [

                {

                               id: 1,

                               name: "Антон",

                               age: 25

                },

                {

                               id: 2,

                               name: "Марина",

                               age: 20

                },

                {

                               id: 3,

                               name: "Людвиг",

                               age: 30

                },

                {

                               id: 4,

                               name: "Себастьян",

                               age: 15

                }

];
app.listen(333,function(){
	console.log('Started');
});

app.get('/',function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.post('/users/:id',urlencodedParser, function(req, res) {
	const findId = Number(req.body.searchForId);
	res.send(users[findId]);
});

app.post('/users',function(req,res){
	res.send(users);
});
app.post('/user',urlencodedParser, function(req, res) {
	console.log(req.body);
	const userName = req.body.name;
    const userAge = req.body.age;
    const id =users.length+1;
    const user = {id:id,name: userName,  age: userAge};
    users.push(user);
    res.send(user);
	});


app.get('/users/:id', function(req, res) {
	console.log(req.params);
	const userID = users.find(function(users) {
		return users.id === Number(req.params.id);
	});
	res.send(userID);
});
app.post('/user/delete',urlencodedParser,function(req, res){
	const deL =Number(req.body.delForId);
	let i = deL;
	delete users[deL];
	res.send("Пользователь с id:"+i+" успешно удалён" );
});
app.post('/users/delete',urlencodedParser,function(req, res){
	users.length = underfined;
	res.send("Пользователи удалены");
});