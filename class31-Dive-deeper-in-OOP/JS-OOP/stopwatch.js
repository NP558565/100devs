function Stopwatch() {
	//private variables
	let startTime,
		endTime,
		running,
		duration = 0;

	this.start = function () {
		//validation check
		if (running) throw new Error("Stopwatch has already started");

		running = true;

		//set start time to current date time (assume this is js method built in)
		startTime = new Date();
	};

	this.stop = function () {
		//validation check
		if (running) throw new Error("Stopwatch has already stpped");

		running = false;

		//set start time to current date time (assume this is js method built in)
		endTime = new Date();

		//returns in milliseconds so we divide by 1000 then add it to the duration which we defined earlier as 0
		const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
		duration += seconds;
	};

	this.reset = function () {
		startTime = null;
		endTime = null;
		running = false;
		duration = 0;
	};

	//Read only property
	Object.defineProperty(this, "duration", {
		//getter returns duration which is a local variable in this function
		get: function () {
			return duration;
		},
	});
}
