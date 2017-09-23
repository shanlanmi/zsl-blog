----
title: AJAX
date: 2016-07-21 18:38:44
tags:
- Request
----
## AJAX Intro
AJAX = Asynchronouse JavaScript And XML
AJAX can:
- Update a web page without reloading the page
- Request data from a server - after the page has loaded 
- Receive data from a server - after the page has loaded
- Send data to a server - in the background

### How AJAX Works
1. Browser
  1. Create an XMLHttpRequest object
  1. Send HttpRequest
1. Serveer
  1. Proess HTTPRequest
  1. Create a response and send data back to the browser
1. Browser
  1. Proess the returned data using JavaScript
  1. Update page content

## AJAX XMLHttp
**Create an XMLHttpRequest Object**
The keystone of AJAX is the XMLHttpRequest object.

**The XMLHttpRequest Object**
- All modern browsers support the XMLHttpRequest object.
- The XMLHttpRequest object is used to exchange data with a server **behind** the scenes. This means that it is possible to update parts of a web page, **without** reloading the whole page.

**Create an XMLHttpRequest Object**
- All modern browsers have a built-in XMLHttpRequest object.
  ```HTML
  variable = new XMLHttpRequest();
  ```
- Old versions of Internet Explorer (IE5 and IE6) use an ActiveX Object:
  ```HTML
  variable = new ActiveXObject("Microsoft.XMLHTTP");
  ```
- To handle all browsers:
  ```HTML
  var xhttp;
  if (window.XMLHttpRequest) {
      xhttp = new XMLHttpRequest();
      } else {
      // code for IE6, IE5
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  ```
## AJAX Request
### **Send a Request To a Server**

Method|Description
---|---
open(method, url, async)|Specifies the type of request<BR>method: the type of request: GET or POST<BR>url: the server (file) location<BR>async: true (asynchronous) or false (synchronous)
send()|Sends the request to the server (used for GET)
send(string)|Sends the request to the server (used for POST)

### **GET or POST?**
GET is simpler and faster than POST, and can be used in most cases.
However, always use POST requests when:
- A cached file is not an option (update a file or database on the server).
- Sending a large amount of data to the server (POST has no size limitations).
- Sending user input (which can contain unknown characters), POST is more robust and secure than GET.

#### **GET Requests**

- A simple GET request:
  ```HTML
  <script>
  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("demo").innerHTML = xhttp.responseText;
      }
    };
    xhttp.open("GET", "demo_get.asp", true);
    xhttp.send();
  }
  </script>
  ```
- To avoid getting a cached result, add a unique ID to the URL:
  ```HTML
  xhttp.open("GET", "demo_get.asp?t=" + Math.random(), true);
  xhttp.send();
  ```
- Send information with the GET **method**, add the information to the URL:
  ```HTML
  xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
  xhttp.send();
  ```

#### **POST Requests**
- A simple POST request:
  ```HTML
  xhttp.open("POST", "demo_post.asp", true);
  xhttp.send();
  ```
- To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method:
  ```HTML
  xhttp.open("POST", "ajax_test.asp", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("fname=Henry&lname=Ford");
  ```

Method|Description
---|---
setRequestHeader(header, value)|Adds HTTP headers to the request<br>header: specifies the header name<br>value: specifies the header value

### **The url - A File On a Server**
- The url parameter of the open() method, is an address to a file on a server:
- The file can be any kind of file, like .txt and .xml, or server scripting files like .asp and .php (which can perform actions on the server before sending the response back).

### Asynchronous
**Asynchronous**
- With AJAX, the JavaScript does not have to wait for the server response, but can instead:
- execute other scripts while waiting for server response
- deal with the response when the response ready

**synchronous**
- Using async=false is not recommended, but for a few small requests this can be ok.
- Remember that the JavaScript will **NOT** continue to execute, until the server response is ready.
- If the server is busy or slow, the application will hang or stop.
- When you use async=false, do **NOT** write an onreadystatechange function - just put the code after the send() statement:


## AJAX Response

- responseText: get the response data as a string
  ```HTML
  document.getElementById("demo").innerHTML = xhttp.responseText;
  ```
- responseXML: get the response data as XML data
  ```HTML
  xmlDoc = xhttp.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("ARTIST");
  for (i = 0; i < x.length; i++) {
    txt += x[i].childNodes[0].nodeValue + "<br>";
    }
  document.getElementById("demo").innerHTML = txt;
  ```

## AJAX Events
### The onreadystatechange event
When a request to a server is sent, we want to perform some actions based on the response.
The onreadystatechange event is triggered every time the readyState changes.
The readyState property holds the status of the XMLHttpRequest.
The onreadystatechange event is triggered five times (0-4), one time for each change in readyState.

Property|Description
---|---
onreadystatechange|Stores a function (or the name of a function) to be called automatically each time the readyState property changes
readyState|Holds the status of the XMLHttpRequest. Changes from 0 to 4: <br>0: request not initialized <br>1: server connection established<br>2: request received <br>3: processing request <br>4: request finished and response is ready
status|200: "OK"<br>404: Page not found


### Using a Callback Function
A callback function is a function passed as a parameter to another function.
If you have more than one AJAX task on your website, you should create ONE standard function for creating the XMLHttpRequest object, and call this for each AJAX task.
The function call should contain the URL and what to do on onreadystatechange (which is probably different for each call):


## More Interactive Application
### AJAX PHP Example
1. First, check if the input field is empty (str.length == 0). If it is, clear the content of the txtHint placeholder and exit the function.
1. However, if the input field is not empty, do the following:
1. Create an XMLHttpRequest object
1. Create the function to be executed when the server response is ready
1. Send the request off to a PHP file (gethint.php) on the server
1. Notice that q parameter is added `gethint.php?q="+str`.
1. The str variable holds the content of the input field


### AJAX ASP

### AJAX Database

### AJAX XML File