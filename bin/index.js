#!/usr/bin/env node

'use strict';

const program = require('commander');
const fs = require('fs');
const convert = require('..');
const packageJson = JSON.parse(fs.readFileSync(__dirname + '/../package.json').toString());

program
.version(packageJson.version)
.option('-o, --overwrite', 'Overwrites in place')
.on('--help', () => {
	console.log('Convert root path prefixed files. Outputs to standard out by default');
	console.log('Example:');
	console.log('convert-root-import -o myFile.es6.js');
})
.parse(process.argv);

const filename = program.args[0];

if(!filename) {
	console.error('Missing filename');
	process.exit(1)
}

const converted = convert(filename, '');

if (program.overwrite) {
	fs.writeFileSync(filename, converted);
} else {
	console.log(converted);
}
