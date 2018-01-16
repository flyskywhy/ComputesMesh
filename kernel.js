const computes = require('computes-ipfs')
// const computes = require('/Users/topher/Projects/computes/npm-ipfs')

var operation = "(function(data) { var result = data; return result; })";

// Set options
var options = {
  domain: "0381de45-609c-682e-7258-4e79ed738f00"
};

// Connect kernel to computes
var job = computes.connect(options.domain);

job.on("ready", function (){
  console.log("connected to ipfs...");

  // Submit operations
  // job.compute(operation, {hello:"hello"}, options);
  for(var data = 0; data < 3; data++) {
    job.compute(operation, data, options);
  }

});

var jobCount = 0
// Fired as cores return results
job.on("result", function (result){
  console.log(result);
  jobCount++;
  if (jobCount == 3){
    job.disconnect();
  }
});
