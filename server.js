const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://sardor020516_db_user:Zx3MlVfZZ5T6gC5B@cluster0.5plyvsp.mongodb.net/Reja?appName=Cluster0";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB:", err);
      return;
    }

    console.log("MongoDB connection succeed");

    const db = client.db("Reja");

    const app = require("./app")(db);

    const server = http.createServer(app);

    const PORT = 3000;

    server.listen(PORT, () => {
      console.log(
        `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
      );
    });
  }
);