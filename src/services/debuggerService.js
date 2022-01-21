const debuggerHandle = require('../handles/debuggerHandle');
const color = require('./../configs/config').colorGroup.foreground.green;
const background = require('./../configs/config').colorGroup.background.magenta;
const backgroundBlack = require('./../configs/config').colorGroup.background.black;
const blink = require('./../configs/config').colorGroup.fashion.blink;
const reset = require('./../configs/config').colorGroup.fashion.reset;


const debuggerServices  = {
    OPTIONS: {
        showFunction: false,
        debug: true
    },
    show: async (values, options = debuggerServices.OPTIONS) => {
        console.log(`${background}${color}*******************************************************************************${reset}`);
        console.log(`${blink}${background}${color}*                                  KHAPU LOG                                  *${reset}`);
        console.log(`${background}${color}*******************************************************************************${reset}`);
        debuggerHandle.handle(values, 0, options.showFunction);
        console.log("");
        console.log(`${color}*******************************************************************************${reset}`);
        console.log(`${blink}${color}*                                  END LOG                                    *${reset}`);
        console.log(`${color}*******************************************************************************${reset}`);
        console.log("");
        if (options.debug) {
            process.exit();
        }
    },
    showMultiple: async(values, options = debuggerServices.OPTIONS) => {
        console.log(`${background}${color}*******************************************************************************${reset}`);
        console.log(`${blink}${background}${color}*                                  KHAPU LOG                                  *${reset}`);
        console.log(`${background}${color}*******************************************************************************${reset}`);
        let count = 0;
        if (Array.isArray(values)) {
            values.forEach((e) => {
                count += 1;
                console.log("");
                debuggerHandle.handle(e, 0, options.showFunction);
                if (count < values.length) {
                    console.log(`_______________________________________________________________________________`);
                    console.log(`____________________________________NEXT_______________________________________`);
                }
            });
        }
        console.log("");
        console.log(`${color}*******************************************************************************${reset}`);
        console.log(`${blink}${color}*                                  END LOG                                    *${reset}`);
        console.log(`${color}*******************************************************************************${reset}`);
        console.log("");
        if (options.debug) {
            process.exit();
        }
    }
}

module.exports = debuggerServices; 

