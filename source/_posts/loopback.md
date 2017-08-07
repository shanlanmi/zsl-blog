----
title: loopback
date: 2016-11-23 12:58:32
categories:
- NodeJS
----
## slc

- Run app
  ```
  node .
  ```
  Browse your REST API at: http://0.0.0.0:3000/explorer
  Web server listening at: http://0.0.0.0:3000/
- Connect your API to datasource
  ```
  slc loopback:datasource
  ```
- Create model
  ```
  slc loopback:model
  ```
- Define relations
  ```
  slc loopback:relation
  ```
- Define access controls
  ```
  slc loopback:acl
  ```
  1. Deny everyone all endpoints.
  This is often the starting point when defining ACLs, because then you can selectively allow access for specific actions.
    ```JavaScript
    ? Select the model to apply the ACL entry to: (all existing models)
    ? Select the ACL scope: All methods and properties
    ? Select the access type: All (match all types)
    ? Select the role: All users
    ? Select the permission to apply: Explicitly deny access
    ```
  1. Now allow everyone to read reviews.
    ```JavaScript
    ? Select the model to apply the ACL entry to: Review
    ? Select the ACL scope: All methods and properties
    ? Select the access type: Read
    ? Select the role: All users
    ? Select the permission to apply: Explicitly grant access
    ```
Allow authenticated users to write a review; that is, if you’re logged in, you can add a review.

? Select the model to apply the ACL entry to: Review
? Select the ACL scope: A single method
? Enter the method name: create
? Select the role: Any authenticated user
? Select the permission to apply: Explicitly grant access
Now, enable the author of a review (its “owner”) to make any changes to it.

$ slc loopback:acl
? Select the model to apply the ACL entry to: Review
? Select the ACL scope: All methods and properties
? Select the access type: Write
? Select the role: The user owning the object
? Select the permission to apply: Explicitly grant access


## Models
- When you define a model it automatically comes with a predefined REST API with a full set of create, read, update, and delete operations.  
- The Basic model object has methods for adding **hooks** and for **validating** data.

### Built-in models

### Custom models
Create models:
1. LoopBack model generator
1. From an existing relational database using model discovery.
  Then you can keep your model synchronized with the database using LoopBack’s schema / model synchronization API.
1. By instance introspection for free-form data in NoSQL databases or REST APIs.

You can also create and customize models programmatically using the **LoopBack** **API,** or by manually editing the model definition **JSON file**.(no recommend)

### Model relations
BelongsTo
HasMany
HasAndBelongsToMany

### Model create, retrieve, update, and delete operations

Operation|REST|LoopBack|SQL
:-|:-|:-|:-
Create|PUT /modelName <br>POST /modelName|create()*|INSERT
Read (Retrieve)|GET /modelName?filter=...|find()*|SELECT
Update (Modify)|POST /modelName<br> PUT /modelName|updateAll()*|UPDATE
Delete (Destroy)|DELETE /modelName/modelID|destroyById()*|DELETE

## Application logic
You can add custom application logic in below ways:
1. Add application logic to **models** through **remote** **methods** (custom REST endpoints)
  - **Remote** **hooks** that are triggered by remote methods
  - **operation** **hooks** that are triggered by model create, retrieve, update, and delete methods.
1. Add **boot** **scripts** that run when the application starts.
1. Define custom **middleware,** similar to Express middleware.

You can add code to validate data before saving it to the model and back-end data store.

### Middleware phases
LoopBack middleware is the same as Express middleware.
Middleware can:
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.
  ```
  "files": {
    "loopback#static":{
      "params": "$!../client"
    }
  },
  ```
  `$!`: The path is relative to the location of middleware.json



## Data sources and connectors
LoopBack generalizes backend services such as databases, REST APIs, SOAP web services, and storage services as data sources.
![connectors](http://loopback.io/images/9830484.png)

## Routing
### LoopBack middleware chain
- initial:before
- initial
- initial:after
- session:before
- session
- session:after
- auth:before
- auth
- auth:after
- parse:before
- parse
- parse:after
- routes:before
- Express middleware
- Components
- Boot scripts
- routes
- routes:after
- files:before
- files
- files:after
- final:before
- final
- final:after

### route
1. Use loopback API in `/server/boot/routes.js`
  ```JavaScript
  module.exports = function(app) {
    // Install a "/ping" route that returns "pong"
    app.get('/ping', function(req, res) {
      res.send('pong');
    });
  }
  ```
1. Use Express router middleware in `/server/boot/routes.js`
  ```JavaScript
  module.exports = function(app) {
    var router = app.loopback.Router();
    router.get('/ping', function(req, res) {
      res.send('pongaroo');
    });
    app.use(router);
  }
  ```
1. `/server/boot/routes.js`
  ```JavaScript
  ...
  app.use('/express-status', function(req, res, next) {
    res.json({ running: true });
  });

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
  ```

## Remote method
### Add a remote method
StrongeLoop API Explorer
```JavaScript
module.exports = function(CoffeeShop) {
  CoffeeShop.status = function(cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;
    console.log('Current hour is %d', currentHour);
    var response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    cb(null, response);
  };
  CoffeeShop.getName = function(shopId, cb) {
    CoffeeShop.findById( shopId, function (err, instance) {
        var response = "Name of coffee shop is " + instance.name;
        cb(null, response);
        console.log(response);
    });
  }
  CoffeeShop.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    },
   'getName', {
      http: {path: '/getname', verb: 'get'},
      accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
      returns: {arg: 'name', type: 'string'}
    }
  );
};
```

### Remote hook
A remote hook is simply a function that gets executed before or after a remote method (either a custom remote method or a built-in CRUD method).  

- `beforeRemote()`: runs before the remote method
- `afterRemote()`: runs after the remote method

```JavaScript
module.exports = function(Review) {
  Review.beforeRemote('create', function(context, user, next) {
    // Inserts the publisherId using the access token attached to the request.
    context.args.data.date = Date.now();
    // Sets the date of the review instance to the current date.
    context.args.data.publisherId = context.req.accessToken.userId;
    next();
  });
};
```

### route
1. Use loopback API in `/server/boot/routes.js`
  ```JavaScript
  module.exports = function(app) {
    // Install a "/ping" route that returns "pong"
    app.get('/ping', function(req, res) {
      res.send('pong');
    });
  }
  ```
1. Use Express router middleware in `/server/boot/routes.js`
  ```JavaScript
  module.exports = function(app) {
    var router = app.loopback.Router();
    router.get('/ping', function(req, res) {
      res.send('pongaroo');
    });
    app.use(router);
  }
  ```
1. `/server/boot/routes.js`
  ```JavaScript
  ...
  app.use('/express-status', function(req, res, next) {
    res.json({ running: true });
  });

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
  ```
## LoopBack components

- **Push notifications**
  Enables sending information to mobile apps for immediate display in a ”badge,” alert, or pop-up message on the mobile device.
- **Storage component**
  Enables uploading and downloading files to and from cloud storage providers (Amazon, Rackspace, Openstack, and Azure) as well as the server file system.
- **Third-party login**
  Integrates Passport and enables user login (and account linking) using third-party credentials from Facebook, Google, Twitter, Github, or any system that supports OAuth, OAuth 2, or OpenID.
- **Synchronization**
  Enables mobile applications to operate offline and then synchronize data with the server application when reconnected.
- **OAuth 2.0**
  Enables LoopBack applications to function as oAuth 2.0 providers to authenticate and authorize client applications and users to access protected API endpoints.
