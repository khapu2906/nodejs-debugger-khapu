const debuggerHandle = require('./../handles/debuggerHandle');
module.exports  = {
    show: async (values) => {
        console.log("");
        console.log("_____________________________START______________________________");
        debuggerHandle.handle(values);
        console.log("______________________________END_______________________________");
        console.log("");
        debugger;
    },
}
