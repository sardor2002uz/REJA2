const http = require("http");
const mongodb = require("mongodb");



let db;
const connectionString = "mongodb+srv://sardor020516_db_user:Zx3MlVfZZ5T6gC5B@cluster0.5plyvsp.mongodb.net/Reja?appName=Cluster0";

mongodb.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
   if(err) console.log("ERROR on connection MongoDB");
   else {
    console.log("MongoDB connection succeed");
    module.exports = client;
    const app = require("./app");
     const server = http.createServer(app);
     let PORT = 3001;
     server.listen(PORT, function () {
     console.log(
      `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
  );
}); 
   } 
}); 








