import fs from "fs";

export async function mcCLeanUp(options) {
	try {
		let logFile = await fs.readFileSync(options.path, "utf8");
		let logArray = logFile.match(/.*\[CHAT\].*\n/g).join("");
		logArray = logArray
			.replace(/§[A-z*0-9]/g, "")
			.replace(/.*\[CHAT\]\n/g, "")
			.replace(/.*\[CHAT\]\s\n/g, "")
			.replace(/.*\[STAFF\].*\n/g, "")
			.replace(/.*\[PlayerVaultsX\].*\n/g, "");
		let extension = options.path.match(/\.([0-9a-z]+)(?:[\?#]|$)/i);
		let filename = options.path.replace(/\.([0-9a-z]+)(?:[\?#]|$)/i, "") + "_cleaned" + extension[0];
		fs.writeFileSync(filename, logArray, "utf8");
		console.log("Done");
	} catch (e) {
		if (e.code == "ENOENT") {
			console.log(e);
			console.log("No log file found");
			process.exit(1);
		} else {
			console.log(e);
			process.exit(1);
		}
	}
}
