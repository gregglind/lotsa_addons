if (typeof __$coverObject === "undefined"){
	if (typeof window !== "undefined") window.__$coverObject = {};
	else if (typeof global !== "undefined") global.__$coverObject = {};
	else throw new Error("cannot find the global scope");
}
__$coverObject["lib/main.js"] = {};
__$coverObject["lib/main.js"].__code = "\nlet main = function(){\n    if (true) {\n        console.log(\"hooray for consistency\")\n        return 1;\n    } else {\n        console.error(\"uh-oh, the axis has tilted\")\n    };\n};\n\nexports.main = main;\n";
__$coverObject["lib/main.js"]["1:177"] = 0;
__$coverObject["lib/main.js"]["180:199"] = 0;
__$coverObject["lib/main.js"]["28:173"] = 0;
__$coverObject["lib/main.js"]["174:174"] = 0;
__$coverObject["lib/main.js"]["48:93"] = 0;
__$coverObject["lib/main.js"]["94:102"] = 0;
__$coverObject["lib/main.js"]["125:172"] = 0;
__$coverObject['lib/main.js']['1:177']++;
let main = function () {
    __$coverObject['lib/main.js']['28:173']++;
    if (true) {
        __$coverObject['lib/main.js']['48:93']++;
        console.log('hooray for consistency');
        __$coverObject['lib/main.js']['94:102']++;
        return 1;
    } else {
        __$coverObject['lib/main.js']['125:172']++;
        console.error('uh-oh, the axis has tilted');
    }
    __$coverObject['lib/main.js']['174:174']++;
    ;
};
__$coverObject['lib/main.js']['180:199']++;
exports.main = main;