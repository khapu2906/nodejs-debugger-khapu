
class DebuggerHandle 
{
    handle(values, level = 0, showFunction = false) {
        let space = '';
        for (let i = 0; i < level; i++) {
            space += '  ';
        }
    
        for (const [key, value] of Object.entries(values)) {
    
            switch (typeof (value)) {
                case 'object':
                    if (Array.isArray(value)) {
                        console.log('\x1b[33m%s\x1b[0m', `${space + key}`,'\x1b[31m', `: [`);
                        this.handle(value, level + 1, showFunction);
                    } else {
                        console.log('\x1b[33m%s\x1b[0m', `${space + key}`,`: {`);
                        this.handle(value, level + 1, showFunction);
                    }
                    break;
                case 'number': 
                    console.log('\x1b[33m%s\x1b[0m',`${space + key}`, '\x1b[34m', `: ${value},`,'\x1b[0m');
                    break;
                case 'function':
                    if (!showFunction) {
                        console.log('\x1b[33m%s\x1b[0m',`${space + key}`, '\x1b[36m' ,`: [FUNCTION: ${value.name}],`,'\x1b[0m');
                    } else {
                        console.log('\x1b[33m%s\x1b[0m',`${space + key}`, '\x1b[36m' ,`: ${value},`,'\x1b[0m');
                    }
                    break;
                default:
                    console.log('\x1b[33m%s\x1b[0m',`${space + key}`, `: ${value},`,'\x1b[0m');
                    break;
            }
            if (typeof (value) == 'object') {
                if (Array.isArray(value)) {
                    console.log('\x1b[31m', `${space}],`, '\x1b[0m');
                } else {
                    console.log(`${space}},`);
                }
            }
        }
    }
}

module.exports = new DebuggerHandle();