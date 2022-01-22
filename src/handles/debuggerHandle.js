const configs = require('./../configs/config');
const reset = configs.colorGroup.fashion.reset;

class DebuggerHandle 
{
    #object(key) {
        const color = configs.colorGroup.foreground.yellow;
        console.log(`${color}${key}${reset}: {`);
    }

    #array(key) {
        const color = configs.colorGroup.foreground.yellow;
        const open = configs.colorGroup.foreground.red;
        console.log(`${color}${key}${reset}: ${open}[`);
    }

    #number(key, value) {
        const color = configs.colorGroup.foreground.yellow;
        const valueColor = configs.colorGroup.foreground.blue;
        console.log(`${color}${key}${reset}: ${valueColor}${value}${reset},`);
    }

    #text(key, value) {
        const color = configs.colorGroup.foreground.yellow;
        const valueColor = configs.colorGroup.foreground.white;
        console.log(`${color}${key}${reset}: ${valueColor}${value}${reset},`);

    }

    #function(space, key, value, showFunction) {
        const color = configs.colorGroup.foreground.yellow;
        let valueColor = configs.colorGroup.foreground.cyan;
        const background = configs.colorGroup.background.white;
        if (showFunction) {
            let functions = `${value}`;
            functions = functions.split(" "); 
            let countRN = 0;
            for(const i in functions) {
                if (functions[i].includes('\r\n')) {
                    countRN += 1;
                    let spaceFunction = '';
                    for (let j = 0; j < countRN; j++) {
                        spaceFunction +=  '   ';
                    }
                    const c = (i * 1) + 1; 
                    if (typeof functions[c] !== 'undefined' ) {

                    } else {
                        functions[i] = functions[i].replace('\r\n', '\r\n' + space);
                    }
                }
            }
            valueColor = configs.colorGroup.foreground.black;
            functions = functions.join(' ');
            console.log(`${color}${space + key}${reset}:${background}${valueColor}${functions},${reset}`);
        } else {
            console.log(`${color}${space + key}${reset}:${valueColor}[FUNCTION: ${value.name}]${reset},`);
        }
    }
    #classify(value, level, showFunction, showLevel) {
        switch (typeof (value)) {
            case 'object':
                this.#handleObject(value, level, showFunction, showLevel);
                break;
            case 'number': 
                this.#number('number', value);
                break;
            case 'function':
                this.#function('', 'function', value, showFunction);
                break;
            default:
                this.#text('text', value);
                break;
        }
    }
    #handleObject(values, level, showFunction, showLevel) {
        let space = '';

        // console.log(showLevel, level);
        if (showLevel !== null && showLevel > 0 && level == showLevel) {
            return false;
        }

        for (let i = 0; i < level; i++) {
            space += '  ';
        }
        if (values !== null && typeof values !== undefined) {
            for (const [key, value] of Object.entries(values)) {
                const keyNew = space + key;
                switch (typeof (value)) {
                    case 'object':
                        if (Array.isArray(value)) {
                            this.#array(keyNew);
                        } else {
                            this.#object(keyNew);
                        }
                        this.#handleObject(value, level + 1, showFunction, showLevel);
                        break;
                    case 'number': 
                        this.#number(keyNew, value);
                        break;
                    case 'function':
                        this.#function(space, key, value, showFunction);
                        break;
                    default:
                        this.#text(keyNew, value);
                        break;
                }
                if (typeof (value) === 'object') {
                    if (Array.isArray(value)) {
                        const reset = configs.colorGroup.fashion.reset;
                        const close = configs.colorGroup.foreground.red;
                        console.log(`${close}${space}]${reset},`);
                    } else {
                        console.log(`${space}},`);
                    }
                }
            }
        }
    }
    handle(values, level = 0, showFunction, showLevel) {
        this.#classify(values, level, showFunction, showLevel);
        // this.#classify(values, level, showFunction, showLevel);
    }
}

module.exports = new DebuggerHandle();