
const observer = require('system/events');

observer.on("*",function(evt){
    console.log("**********")
    console.log(evt.type)
    console.log(JSON.stringify(evt.subject))
    console.log(JSON.stringify(evt.data))

})
