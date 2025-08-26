# Promise has typically 3 states

- Pending : not awaited and hence has not completed yet ( e.g. typically when you dont await an axios or db call)
- Rejected: When promise failed ( wrong url | server down etc)
- Fulfilled: Promise completed succesfully (e.g. db call has completed and returned a result succesfully)
  // - settled : referes to a combination of either rejected or fulfilled

# What is a promise:

- layman's definition: It is something in JS that tells us whether an operation has completed or not (pending)
- technical definition: it is a JS object that represents whether an asynchronous operation(like db or axios call) is completed or not

---

// An assignment :

1.  WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
