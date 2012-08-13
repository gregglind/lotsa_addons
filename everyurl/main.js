const observer = require("observer-service");

observer.add("http-on-modify-request",function(){
    console.log("got a modify");
});

observer.add("http-on-examine-response",function(){
    console.log("got an example");
});
