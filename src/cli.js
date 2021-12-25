import arg from "arg";
import inquirer from "inquirer";
import { mcCLeanUp } from "./main";
var pjson = require("../package.json");

function parseArgumentsIntoOptions(rawArgs) {
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
		path: args["--path"] || args._[0],
		version: args["--version"] || false,
	};
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
		console.log(pjson.version);
		process.exit(1);
	}
	options = await promtForMissingOptions(options);
	await mcCLeanUp(options);
}
