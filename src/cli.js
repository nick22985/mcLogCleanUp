import arg from "arg";
import inquirer from "inquirer";
import { mcCLeanUp } from "./main";
var pjson = require("../package.json");
const chalk = require("chalk");

function parseArgumentsIntoOptions(rawArgs) {
	try {
		const args = arg(
			{
				"--path": String,
				"--version": Boolean,
				"-p": "--path",
				"-v": "--version",
			},
			{
				argv: rawArgs.slice(2),
			}
		);
		return {
			path: args["--path"] || args["_"][0] || "",
			version: args["--version"] || false,
		};
	} catch (error) {
		console.log(chalk.blue("[MLCU]") + chalk.blueBright.bold("[Info]") + " Expected: mcCleanup --path [path]");
		console.log(`${chalk.blue("[MLCU]")}${chalk.blueBright.bold("[Info]")} Expected: mcCleanup --path [path], \nReceived: ${rawArgs.slice(2)}`);
		process.exit(1);
	}
}

async function promtForMissingOptions(options) {
	const questions = [];
	if (!options.path) {
		questions.push({
			type: "input",
			name: "path",
			message: "Please Specify a Path:",
		});
	}
	const answers = await inquirer.prompt(questions);
	return {
		...options,
		path: options.path || answers.path,
	};
}

export async function cli(args) {
	let options = parseArgumentsIntoOptions(args);
	if (options.version) {
		console.log(`${chalk.blue("[MLCU]")}${chalk.blueBright.bold("[Info]")} Version: ${pjson.version}`);
		process.exit(1);
	}
	options = await promtForMissingOptions(options);
	await mcCLeanUp(options);
}
