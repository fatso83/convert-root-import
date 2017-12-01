'use strict';

const read = require('fs').readFileSync;
const helpers =  require('./helpers.js');

const rootPathPrefix = '~';
module.exports = function convert(sourceFile, rootPathSuffix){
    const content = read(sourceFile).toString();
    const lines = content.split('\n');
    const re = /((.*)?import .*(from )?['"])(.*)(['"].*)/
    let transformed = '';


    lines.forEach(l => {
        const match = l.match(re);
        if (match) {
            const importPath = match[4];
            const newPath = helpers.transformRelativeToRootPath(importPath, rootPathSuffix, rootPathPrefix, sourceFile);
            const fromIfDefined = match[3]? match[3]: '';
            transformed += `${match[1]}${fromIfDefined}${newPath}${match[5]}\n`;
        } else {
            transformed += `${l}\n`;
        }
    })

    // remove last added newline, as it wasn't there to begin with
    return transformed.slice(0,-1);
}
