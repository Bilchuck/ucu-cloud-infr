# HW2

## Service description

It's a node.js server with 2 endpoits

- `/health` - returns {"works":true} if server run
- `/work/:n` - run CPU highload function whith optional param `n`. Use n=100 for ~1 minute of execution.

As a `computation which requires a lot of CPU resources` I wrote a dump function which load CPU with creating large array and multiple random numbers.

This function was moved to a `worker.js` file and is runned using `worker_threads` not to block `/health` endpoint.

# How to run

- `docker build -t {name} .`
- `docker run -p 1337:1337 {name}`