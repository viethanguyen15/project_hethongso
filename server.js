/*build server nodejs*/
var express = require("express");
var app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./home_page"); 

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(7000, function(){
    console.log('http://localhost:7000/');
});

/**listen any client connect to server */
io.on("connection", function(socket){
    console.log("client connected: " + socket.id);
    socket.on("disconnect", function(){
        console.log(socket.id + " disconnect");
    });
    /*socket.on("client-send-data", function(data){
        console.log(data);
        io.sockets.emit("server-send-data", data);
    });*/
});

app.get("/", function(req, res){
    res.render("index");
});

/**----connect mysql----- */
/**------select data from data-----*/