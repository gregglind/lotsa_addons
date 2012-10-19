if (typeof __$coverObject === "undefined"){
	var __$coverObject = {};
	if (typeof window !== "undefined") window.__$coverObject = __$coverObject;
	else if (typeof global !== "undefined") global.__$coverObject = __$coverObject;
}
console.log("coverobject is:", JSON.stringify(__$coverObject));
__$coverObject["lib/main.js"] = {};
__$coverObject["lib/main.js"].__code = "\nlet main = function(){\n    if (true) {\n        console.log(\"horray for consistency\")\n        return 1;\n    } else {\n        console.error(\"uh-oh, the axis has tilted\")\n    };\n};\n\nexports.main = main;\n";
__$coverObject["lib/main.js"]["1:178"] = 0;
__$coverObject["lib/main.js"]["180:200"] = 0;
__$coverObject["lib/main.js"]["28:174"] = 0;
__$coverObject["lib/main.js"]["174:175"] = 0;
__$coverObject["lib/main.js"]["48:94"] = 0;
__$coverObject["lib/main.js"]["94:103"] = 0;
__$coverObject["lib/main.js"]["125:173"] = 0;
__$coverObject['lib/main.js']['1:178']++;
let main = function () {
    __$coverObject['lib/main.js']['28:174']++;
    if (true) {
        __$coverObject['lib/main.js']['48:94']++;
        console.log('horray for consistency');
        __$coverObject['lib/main.js']['94:103']++;
        return 1;
    } else {
        __$coverObject['lib/main.js']['125:173']++;
        console.error('uh-oh, the axis has tilted');
    }
    __$coverObject['lib/main.js']['174:175']++;
    ;
};
__$coverObject['lib/main.js']['180:200']++;
exports.main = main;