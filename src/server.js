const khapu = require('./services/debuggerService');


const value = {
    abc: {
        abc1: {
            abc11: {
                abc111: {
                    abc1111: "abc",
                    abc1112: {
                    }
                },
                abc112: 112,
                abc113: [1, 1, 3]
            },
            abc11: demo
        },
        abc2: "abc2"
    },
    xyz: "xyz"
}

function demo () {
    const num = 123
    const str = "123";
    return numb + str;
}

const secondValue = "secondValue"

const options = {
    stop: true, //boolean //used if you want to stop program when debugging
    showFunction: true, //boolean //used if you want to view function in the debugging variable
    showLevel: null //number //used to set level which you want to show, if its value is null, all level of the variable
}

// khapu.show(value, options)
//or
khapu.showMultiple([value, secondValue])

