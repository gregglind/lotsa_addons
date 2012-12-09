let data = require('self').data
require("panel").Panel({
   contentURL: data.url("hello.html")
}).show()
