const khapuDebug = require('./services/debuggerServices');
const value = {
    test1: {
        test11: {
            test111: {
                test1111: {
                    test11112: "test"
                },
                test1112: 123,
                tesst111: [1,2,3]
            },
            tea: ass
        },
        test12: "test3"
    },
    test2: "test4"
};
function ass () {
    return 1 + 1;
}

khapuDebug.show(value);