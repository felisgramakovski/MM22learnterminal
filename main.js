import chalk from 'chalk';
import boxen from 'boxen';

function write(text) {
    process.stdout.write(text);
}

console.log(chalk.bgGreen.magenta('Hello world'));

console.log(boxen('tsauki', {padding: 1}));

console.log(boxen('mis teoksil', {padding: 1, margin: 1, borderStyle: 'double'}));

console.log(boxen('tahaks süüa', {title: 'magical', titleAlignment: 'center'}));

console.log(boxen('varsti saab koju', {title: 'example'}));

console.log(boxen('vihm', {width: 15}));