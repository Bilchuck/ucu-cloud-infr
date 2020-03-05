# HW2

## Service description

It's a node.js server with 2 endpoits

- `/health` - returns {"works":true} if server run
- `/work/:n` - run CPU highload function whith optional param `n`. Use n=100 for ~1 minute of execution.

As a `computation which requires a lot of CPU resources` I wrote a dump function which load CPU with creating large array and multiple random numbers.

This function was moved to a `worker.js` file and is runned using `worker_threads` not to block `/health` endpoint.

# Pre Install

- docker
- kubectl
- minukube

# How to run

- `kubectl apply -f kube/` - create a POD
- `kubectl expose deployment service --type=NodePort` - expose pod so we can access via minikube

- `minikube service service --url` - would return a url for API testing. E.G. `http://192.168.64.2:31148`
- `minikube dashboard` - open dashboard GUI in browser were all runned PODs can be monitored

# Test

Health:

```
curl -X GET \
  http://localhost:1337/health \
  -H 'Postman-Token: 2b241387-f93a-44c0-ace8-9eb04ffc0498' \
  -H 'cache-control: no-cache'
```

CPU load task:
```
curl -X GET \
  http://localhost:1337/work/1000 \
  -H 'Postman-Token: 58df48b7-3909-4647-affb-c0aa4955476a' \
  -H 'cache-control: no-cache'
```

P.S. You can import above cURL code into Postman