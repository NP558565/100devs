// TOP LEVEL FUNCTION FROM EXPRESS
const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
	"ice cube": {
		age: 29,
		birthName: "Jimmy Crack Korn",
		birthLocation: "Westside, Compton",
	},
	"snoop dog": {
		age: 35,
		birthName: "Calvin Cordozar Broadus Jr",
		birthLocation: "Long Beach, California",
	},
	unknown: {
		age: 0,
		birthName: "unkown",
		birthLocation: "unkown",
	},
};

// NETWORK REQUEST TO SERVE A FILE (MAIN PAGE)
app.get("/", (request, response) => {
	response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
	const rapperName = request.params.name.toLowerCase();
	// console.log(rappers[rapperName].birthName);
	if (rappers[rapperName]) {
		response.json(rappers[rapperName]);
	} else {
		response.json(rappers["unknown"]);
	}
});

app.listen(PORT, () => {
	console.log(`The Server is now running on port ${PORT}! Betta Go Catch It!`);
});
