import chalk from 'chalk';
import fs from 'fs';

export async function mcCLeanUp(options) {
	try {
		console.log(`${chalk.blue('[MLCU]')}${chalk.blueBright.bold('[Info]')} In progress ...`);
		let logFile = await fs.readFileSync(options.path, 'utf8');
		console.log(logFile.match(/.*\[CHAT\].*\n/g));
		let logArray = logFile.match(/.*\[CHAT\].*\n/g);
		if (logArray == null) throw new Error('No chat log found');
		logArray = logArray.join('');
		logArray = logArray
			.replace(/§[A-z*0-9]/g, '')
			.replace(/.*\[CHAT\]\n/g, '')
			.replace(/.*\[CHAT\]\s\n/g, '')
			.replace(/.*\[PlayerVaultsX\].*\n/g, '');
		let extension = options.path.match(/\.([0-9a-z]+)(?:[\?#]|$)/i);
		let filename = options.path.replace(/\.([0-9a-z]+)(?:[\?#]|$)/i, '') + '_cleaned' + extension[0];
		fs.writeFileSync(filename, logArray, 'utf8');
		console.log(`${chalk.blue('[MLCU]')}${chalk.green.bold('[Success]')} Saved as: ${filename}`);
	} catch (e) {
		if (e.code == 'ENOENT') {
			console.log(`${chalk.blue('[MLCU]')}${chalk.red('[Error]')} File not found: ${options.path}`);
			process.exit(1);
		} else if (e.code === 'No chat logs found in file') {
			console.log(`${chalk.blue('[MLCU]')}${chalk.red('[Error]')} No chat log found`);
			process.exit(1);
		} else {
			console.log(`${chalk.blue('[MLCU]')}${chalk.red('[Error]')} ${e.message}`);
			process.exit(1);
		}
	}
}
