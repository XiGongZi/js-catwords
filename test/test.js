var catwords = require("../src/index.js");
var assert  = require("assert");
var words = require("../index.json");

catwords.initWord(words);

it(`should return ["纳斯"]`, function()
{
    var sum = catwords.init("纳斯");
    sum = JSON.stringify(sum);
    console.log(sum);
    assert.equal(sum, `["纳斯"]`);
});

it(`should return ["纳斯","腮红"]`, function()
{
    var sum = catwords.init("纳斯腮红");
    sum = JSON.stringify(sum);
    console.log(sum);
    assert.equal(sum, `["纳斯","腮红"]`);
});


it(`should return ["纳斯","腮红"]`, function()
{
    var sum = catwords.init("纳斯1腮红");
    sum = JSON.stringify(sum);
    console.log(sum);
    assert.equal(sum, `["纳斯","腮红"]`);
});


it(`should return ["纳斯","腮红"]`, function()
{
    var sum = catwords.init("1纳斯3腮红4")
    sum = JSON.stringify(sum);
    console.log(sum);
    assert.equal(sum, `["纳斯","腮红"]`);
});


it(`should return ["腮红"]`, function()
{
    var sum = catwords.init("纳2斯腮红");
    sum = JSON.stringify(sum);
    console.log(sum);
    assert.equal(sum, `["腮红"]`);
});


it(`should return ["纳斯"]`, function()
{
    var sum = catwords.init("纳斯腮2红");
    sum = JSON.stringify(sum);
    console.log(sum);
    assert.equal(sum, `["纳斯"]`);
});