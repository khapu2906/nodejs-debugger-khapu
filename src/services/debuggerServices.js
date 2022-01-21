const debuggerHandle = require('./../handles/debuggerHandle');
module.exports  = {
    show: async (values) => {
        debuggerHandle.handle(values);
       debugger;
    },
    // handle: async(values, level = 0) => {
    //     let space = '';
    //     for (let i = 0; i < level; i++) {
    //         space += '  ';
    //     }
    
    //     for (const [key, value] of Object.entries(values)) {
    
    //         switch (typeof (value)) {
    //             case 'object':
    //                 if (Array.isArray(value)) {
    //                     console.log('\x1b[33m%s\x1b[0m', `${space + key}`,'\x1b[31m', `: [`);
    //                     khapuDebug.handle(value, level + 1);
    //                 } else {
    //                     console.log('\x1b[33m%s\x1b[0m', `${space + key}`,`: {`);
    //                     khapuDebug.handle(value, level + 1);
    //                 }
    //                 break;
    //             case 'number': 
    //                 console.log('\x1b[33m%s\x1b[0m',`${space + key}`, '\x1b[34m', `: ${value},`,'\x1b[0m');
    //                 break;
    //             case 'function':
    //                 console.log('\x1b[33m%s\x1b[0m',`${space + key}`, '\x1b[36m' ,`: [FUNCTION: ${value.name}],`,'\x1b[0m');
    //                 break;
    //             default:
    //                 console.log('\x1b[33m%s\x1b[0m',`${space + key}`, `: ${value},`,'\x1b[0m');
    //                 break;
    //         }
    //         if (typeof (value) == 'object') {
    //             if (Array.isArray(value)) {
    //                 console.log('\x1b[31m', `${space}],`, '\x1b[0m');
    //             } else {
    //                 console.log(`${space}},`);
    //             }
    //         }
    //     }
    // }
}
