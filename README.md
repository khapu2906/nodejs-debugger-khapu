![alt](https://github.com/khapu2906/nodejs-debugger-khapu/blob/main/src/medias/logo.jpg)


---
# Introduction

The package has been developed to support you debug in an easier way. With khapu-debugger, you are going to forget your trouble when logging variable, because:
 * Provides an intuitive interface, vivid colors
 * Convenient customization (showing level if the variable is a object or array)
 * Sepecifily, you can read function in the variable
 
---

# Install
```

npm i khapu-debugger

```

# Usage

```js
const khapu = require('khapu-debugger')

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

const secondValue = "secondValue"

function demo () {
    const num = 123
    const str = "123";
    return numb + str;
}

khapu.show(value)

```

You can show with multiple params

```js
khapu.showMultiple([value, secondeValue])
```

Set options to use
```js
const options = {
    stop: true, //boolean //used if you want to stop program when debugging
    showFunction: true, //boolean //used if you want to view function in the debugging variable
    showLevel: null //number //used to set level which you want to show, if its value is null, all level of the variable
}


khapu.show(value, options)
//or
khapu.showMultiple([value, secondValue], options)

```

---
# Demo results

*For first paragraph code*

![alt](https://github.com/khapu2906/nodejs-debugger-khapu/blob/main/src/medias/showNotConfig.jpg)

*For seconde paragraph code*

![alt](https://github.com/khapu2906/nodejs-debugger-khapu/blob/main/src/medias/showMutipleNotConfig.jpg)

*For final paragraph code*

![alt](https://github.com/khapu2906/nodejs-debugger-khapu/blob/main/src/medias/showWithConfig.jpg)

---

# Maintain

* [Khapu](https://github.com/khapuonstage)
