const express = require("express");

const app = express();

const groceryRoutes = require("./routes/grocery");

const errorController = require("./controllers/error");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});

app.use("/groceries", groceryRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
