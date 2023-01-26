


var userDetails = [
    {
    username : "Shiv Singh",
    password : "shiv1998",
    },
    
];

var database = [
    {
        username : "Shiv Singh",
        password : "shiv1998",
    },
    {
        username : "Jay",
        password : "1111",
    },
    {
        username : "Zeeva",
        password : "2222",
    }
];

var newsfeed = [
    {
        username : "Bobby",
        timeline : "So tired from all that learning!",
    },
    {
        username : "Sally",
        timeline : "Javascript is sooooo cool!",
    },
    {
        username : "Mitch",
        timeline : "Javascript is preeetyy cool!",
    }
]

var username = prompt("What's your user name?")
var password = prompt("What's your password?");



function isUserValid(username, password){
    for(var i=0; i<database.length; i++){
        if(username === database[i].username && password === database[i].password){
        return true;
        }
    }
    return false;
}


function signIn(username, password){   
            if(isUserValid(username, password)){
                console.log("LogIn succesfully");      
                console.log(newsfeed);
            }else{
                  alert("Sorry, wrong username or password");
            }
}


signIn(username, password);