const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors());

const tea = {
	oolong: {
		type: "black",
		origin: "Yo mommas house",
		waterTemp: 200,
		steepTime: 180,
		caffineLevel: true,
		flavor: "delicious",
	},
	matcha: {
		type: "green",
		origin: "My mommas house",
		waterTemp: 200,
		steepTime: 180,
		caffineLevel: true,
		flavor: "delicious",
	},
	unknown: {
		type: "none",
		origin: "unknown",
		waterTemp: 0,
		steepTime: 0,
		caffineLevel: null,
		flavor: "unknown",
	},
};

app.get("/", (request, response) => {
	response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
	const teaName = request.params.name.toLowerCase();
	if (tea[teaName]) {
		response.json(tea[teaName]);
	} else {
		response.json(tea["unknown"]);
	}
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`The Server is running on on port ${PORT}! Betta go catch `);
});
