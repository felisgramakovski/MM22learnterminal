import chalk from 'chalk';
import boxen from 'boxen';


console.log(boxen(chalk.bgGreen.magenta('kastid'), {padding: 5, margin: 300, borderStyle:'arrow', borderColor: 'redBright'}));

console.log(boxen(chalk.magenta('tsauks'), {padding: 1, margin: 1, borderStyle: 'classic'}));

console.log(boxen(chalk.cyan('pasta'), {padding: 5, margin: 2, borderStyle:'arrow', borderColor: 'yellowBright'}));

console.log(boxen(chalk.bgCyan.strikethrough('jouuu'), {padding: 5, margin: 1, borderStyle:'bold'}));

console.log(boxen(chalk.bgRed.green('sook'), {padding: 10, margin: 1, title: 'nämma', titleAlignment: 'center', borderColor: 'cyanBright'}));

console.log(boxen(chalk.bgGreen.inverse('hahahaha'), {padding: 1, margin: 1, borderStyle:'classic'}));
