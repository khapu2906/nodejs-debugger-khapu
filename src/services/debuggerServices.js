const debuggerHandle = require('./../handles/debuggerHandle');

const debuggerServices  = {
    OPTIONS: {
        showFunction: false,
        debug: true
    },
    show: async (values, options = debuggerServices.OPTIONS) => {
        console.log("");
        console.log("_____________________________START______________________________");
        console.log("");
        debuggerHandle.handle(values, 0, options.showFunction);
        console.log("");
        console.log("______________________________END_______________________________");
        console.log("");
        if (options.debug) {
            process.exit();
        }
    },
}

module.exports = debuggerServices; 

