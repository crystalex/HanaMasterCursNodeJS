process.on('exit', function(code) {

       console.log('About to exit with code:', code);
//});

// endless loop
//process.on('beforeExit', function(code) {

   // Following code will never execute.
   setTimeout(function() {
      console.log("This will not run");
   }, 0);
  
   console.log('About to exit with code:', code);
});
console.log("Program Ended");