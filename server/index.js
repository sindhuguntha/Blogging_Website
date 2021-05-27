const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
//require("dotenv").config();

//config Express App


const app = express();
app.use(cors());
app.use(express.json());



//config PORT
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = 'mongodb+srv://sindhuguntha:Sindhu123@cluster0.pj4qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//config MongoDB

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () =>
    console.log("MongoDB connection has been established!")
);

//config routes
const postsRouter = require("./routes/blog");
const authRouter = require("./routes/auth");

app.use("/auth", authRouter);
// To differentiate backend posts route, I am adding server/
app.use("/server/posts", postsRouter);

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}!`));