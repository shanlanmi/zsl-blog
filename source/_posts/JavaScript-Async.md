----
title: JavaScript Async
date: 2016-08-12 09:27:54
categories:
- Request
----
## Events

### Scheduling Events
JavaScript event handlers don’t run until the thread is free.
The event handler won't be executed until all currently running code and all event handler in the queue finished.
JavaScript code can never be interrupted.

### Types of Async Functions

#### I/O Functions

- JS is a perfect fit for nonblocking I/O.
- WebKit’s console.log has surprised many a developer by behaving asynchronously.
- Node’s console.log, on the other hand, is strictly synchronous.

#### Timing Functions
- No JavaScript timing function can cause code to run while other code is running in the same JavaScript process.
- It turns out that setTimeout and setInterval are slow by design. In fact, the HTML spec (which all major browsers respect) mandates a minimum timeout/interval of 4ms!

### Writing Async Functions
		When is a function async
		Sometimes-async function
		Async functions with caching
		Async Recursion vs. Callback Storage
### Handling Async Errors
- throw in a callback is a JavaScripter’s way of saying, I don’t want to think about this right now.
- The current best practice for handling async errors?
  - If you want your whole application to stop, go ahead and use throw.
  - Otherwise, give some thought as to how the error should be handled, as close to the source as possible.

### Un-nesting Callbacks
- The most common anit-parttern in JavaScript is nesting call-backs within callbacks.
- Avoid more than two levels of function nesting. 

## Distributing Events
### PubSub
### Evented Models
### Custom jQuery Events

## Promises and Deferreds
- All ajax functions return Promises.
- A Promise is an **object** that represents a task with two possible **outcomes** (success or failure) and holds **callbacks** that fire when one outcome or the other has occurred. 
  ```
  $.get('/mydata', {
    success: onSuccess,
    failure: onFailure,
    always: onAlways
  });
  ```
- You can derive new Promise from existing ones.

### A Very Brief History of Promises
### Making Promises
- A Deferred is a Promise.
- A pure Promise only lets you add more callbacks; someone else has to trigger them.
- We can trigger our Deferred with the resolve and reject methods.
- A Promise can be resolved or rejected only once; after that, it’s inert.
- We say that a Promise is pending until it’s either resolved or rejected, you can find out whether a Promise is "pending", "resolved", or "rejected" by calling its state method. 
- You can trigger a deferred directly with `resolve` and `reject` methods.
  ```JavaScript
  $q('#playGame').focus().on('keypress', function(e) {
    var Y = 121, N = 110;
    if (e.keyCode === Y) {
      promptDeferred.resolve();
    } else if (e.keyCode === N) {
      promptDeferred.reject();
    } else {
      return false;  // our Deferred remains pending
    };
  });
  ```

### Making a pure promise
- Get a promise that isn't a deferred
  ```
  var promptPromise = promptDeferred.promise();
  ```
- Every Deferred contains a Promise, and every Promise represents a Deferred.

### Passing Data to Callbacks
- There are also special methods for running the callbacks in a particular context (that is, setting this to a particular value): `resolveWith` and `rejectWith`. Just pass the context as the **first** argument, and pass all other arguments in as an **array**.
  ```JavaScript
  var slashdotter = {
    comment: function(editor){
      console.log('Obviously', editor, 'is the best text editor.');
    }
  };
  var grammarDeferred = new $.Deferred();
  grammarDeferred.done(function(verb, object) {
    this[verb](object);
  });
  grammarDeferred.resolveWith(slashdotter, ['comment', 'Emacs']);
  ```

### Progress Notifications
- Note that calls to nanowrimoing.notify will have no effect once nanowrimoing is resolved, just like any additional resolve and reject calls would be ignored.

### Combining Promis

### Using Functions as Promises
- Will give you a Promise that immediately resolves with the value.
  ```JavaScript
  $.when('foo')
  ```

### Binding to the Future with pipe
- `pipe` says this: Give me a callback for this Promise, and I’ll give you a Promise that represents the result of that callback.
- There two things you can do from a pipe callback:
  - If you return a Promise, the Promise returned by pipe will mimic it.
  - If you return a non-Promise value (or nothing), the Promise returned by pipe will immediately be resolved, rejected, or notified with that value, according to what just happened to the original Promise.

