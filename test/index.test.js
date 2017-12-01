/* The helpers were copied over from the babel plugin, so they are tested there:
* https://github.com/entwicklerstube/babel-plugin-root-import/blob/master/test/helper.spec.js
* commit: 3b5990162de2997a933cdeca9295715ab777990c
*/

'use strict';

const convert = require('../');
const chai = require('chai');
const should = chai.should();
const read = require('fs').readFileSync;

chai.config.includeStack = true;

const rootPrefix = '~';

// this should normally be empty, unless you are perhaps a 
// build folder, AFAIK
const rootPathSuffix = ''; 

const fixtureTest = function(name) {
    const actual = convert(__dirname + '/fixtures/' + name + '.js', rootPathSuffix);
    const expect = read(__dirname + '/fixtures/' + name + '.result').toString();
    actual.should.equal(expect);
}

describe('convert', function(){

    it('should not convert a "normal" path', function(){
        fixtureTest('normal');
    });

    it('should convert a path with a tilde prefix', function(){
        fixtureTest('tilde-path');
    });

});
