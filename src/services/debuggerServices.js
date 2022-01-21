const debuggerHandle = require('./../handles/debuggerHandle');
module.exports  = {
    show: async (values, debug = true) => {
        console.log("");
        console.log("_____________________________START______________________________");
        console.log("");
        debuggerHandle.handle(values);
        console.log("");
        console.log("______________________________END_______________________________");
        console.log("");
        if (debug) {
            debugger;
        }
    },
}
