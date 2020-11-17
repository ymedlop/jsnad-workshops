'use strict'

function exercise (myEnvVar) {
  // TODO return a child process with
  // a single environment variable set 
  // named MY_ENV_VAR. The MY_ENV_VAR 
  // environment variable's value should 
  // be the value of the myEnvVar parameter 
  // passed to this exercise function
  return require('child_process').spawn(process.argv[0], ['-p', 'process.env', 'child.js'], {env: {MY_ENV_VAR: myEnvVar}});
}

module.exports = exercise
