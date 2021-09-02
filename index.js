const port = 2056;
const Collector = require('./netflowv9');
const collector = Collector({port});

console.log("Start");
collector.on('data', function(data) {
    console.log("--------------- data ---------------------");
    console.log(data);
});
collector.on('template', function(data) {
    console.log("+++++++++++++++ template ++++++++++++++++++");
    console.log(data);
});