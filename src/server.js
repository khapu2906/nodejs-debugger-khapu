const khapuDebug = require('./services/debuggerService');

const value = {
    "status": 1,
    "code": 200,
    "message": "success",
    "data": {
        "project": {
            "id": 1,
            "appIdCrc": 3048506110,
            "appId": "50646423-887a-403c-8274-a224bee080d2"
        },
        "cluster": {
            "id": 1,
            "kasClusterId": "df19597e-24cd-4e24-83ad-af539254147d",
            "name": "cluster1",
            "endpoint": "cluster1.kas.bfcplatform.vn:9094",
            "protocol": "SASL_PLAINTEXT",
            "mechanism": "SCRAM-SHA-512"
        },
        "logs": {
            "data": [
                {
                    "id": "uqIFfH4BxIQ_dYXUHy1V",
                    "dataRequest": null,
                    "time": 1642758217554,
                    "type": "Acl",
                    "keyResponse": "acl",
                    "action": "update",
                    "status": "success"
                },
                {
                    "id": "8pgEfH4BxIQ_dYXUsMBR",
                    "dataRequest": null,
                    "time": 1642758189133,
                    "type": "Acl",
                    "keyResponse": "acl",
                    "action": "update",
                    "status": "success"
                },
                {
                    "id": "55QEfH4BxIQ_dYXUfFyr",
                    "dataRequest": null,
                    "time": 1642758175912,
                    "type": "Acl",
                    "keyResponse": "acl",
                    "action": "store",
                    "status": "success"
                },
                {
                    "id": "yosEfH4BxIQ_dYXUGNAA",
                    "dataRequest": null,
                    "time": 1642758150140,
                    "type": "Acl",
                    "keyResponse": "acl",
                    "action": "store",
                    "status": "success"
                },
                {
                    "id": "5oEDfH4BxIQ_dYXUoRsv",
                    "dataRequest": null,
                    "time": 1642758119724,
                    "type": "Consumer",
                    "keyResponse": "consumerGroup",
                    "action": "store",
                    "status": "success"
                },
                {
                    "id": "kH0DfH4BxIQ_dYXUfeWg",
                    "dataRequest": {
                        "username": "testacl"
                    },
                    "time": 1642758110621,
                    "type": "Credential",
                    "keyResponse": "credential",
                    "action": "store",
                    "status": "success"
                },
                {
                    "id": "eXgDfH4BxIQ_dYXUOx66",
                    "dataRequest": {
                        "name": "test-acl",
                        "replica": 2,
                        "partition": 1,
                        "retention": 86400000
                    },
                    "time": 1642758093751,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "store",
                    "status": "success"
                },
                {
                    "id": "-FkBfH4BxIQ_dYXU197h",
                    "dataRequest": {
                        "retention": 2419200000
                    },
                    "time": 1642758002654,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "update",
                    "status": "success"
                },
                {
                    "id": "5VkBfH4BxIQ_dYXUzyar",
                    "dataRequest": {
                        "partition": 15
                    },
                    "time": 1642758000552,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "L1cBfH4BxIQ_dYXUuUFd",
                    "dataRequest": {
                        "partition": 15
                    },
                    "time": 1642757994841,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "bLr6e34BxIQ_dYXUhwoP",
                    "dataRequest": null,
                    "time": 1642757523387,
                    "type": "Acl",
                    "keyResponse": "acl",
                    "action": "update",
                    "status": "success"
                },
                {
                    "id": "J2fTe34BxIQ_dYXUmJrj",
                    "dataRequest": {
                        "partition": 2
                    },
                    "time": 1642754971872,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "nWXTe34BxIQ_dYXUgrK3",
                    "dataRequest": {
                        "partition": 3
                    },
                    "time": 1642754966196,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "H2LTe34BxIQ_dYXUWGHh",
                    "dataRequest": {
                        "partition": 2
                    },
                    "time": 1642754955486,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "T2DTe34BxIQ_dYXURqfH",
                    "dataRequest": {
                        "name": "wuttheheo",
                        "replica": 2,
                        "partition": 2,
                        "retention": 172800000
                    },
                    "time": 1642754950409,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "store",
                    "status": "success"
                },
                {
                    "id": "VLC-e34BxIQ_dYXU1ue5",
                    "dataRequest": {
                        "partition": 15
                    },
                    "time": 1642753611332,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "UZ-9e34BxIQ_dYXU9z-I",
                    "dataRequest": {
                        "retention": 24192000002
                    },
                    "time": 1642753554297,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "update",
                    "status": "success"
                },
                {
                    "id": "cZa9e34BxIQ_dYXUh2Ft",
                    "dataRequest": {
                        "partition": 14
                    },
                    "time": 1642753525610,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "0I29e34BxIQ_dYXUETs6",
                    "dataRequest": {
                        "name": "test",
                        "kasTopicId": "bizfly-5-1-test"
                    },
                    "time": 1642753495350,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "delete",
                    "status": "success"
                },
                {
                    "id": "RIS8e34BxIQ_dYXUlgTd",
                    "dataRequest": {
                        "name": "saaa",
                        "kasTopicId": "bizfly-5-1-saaa"
                    },
                    "time": 1642753464018,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "delete",
                    "status": "success"
                },
                {
                    "id": "AVite34BxIQ_dYXUf-wi",
                    "dataRequest": {
                        "partition": 13
                    },
                    "time": 1642752475095,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "giyre34BxIQ_dYXUPTWV",
                    "dataRequest": {
                        "partition": 12
                    },
                    "time": 1642752327238,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "Eymre34BxIQ_dYXUGG87",
                    "dataRequest": {
                        "partition": 11
                    },
                    "time": 1642752317675,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "FRGpe34BxIQ_dYXU69uw",
                    "dataRequest": {
                        "partition": 12
                    },
                    "time": 1642752240737,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "Rgype34BxIQ_dYXUqZ87",
                    "dataRequest": {
                        "partition": 12
                    },
                    "time": 1642752223491,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "9eyoe34BxIQ_dYXUEeOf",
                    "dataRequest": {
                        "partition": 13
                    },
                    "time": 1642752119376,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "1eqne34BxIQ_dYXU7QkK",
                    "dataRequest": {
                        "partition": 11
                    },
                    "time": 1642752109960,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "ydKme34BxIQ_dYXUwuo3",
                    "dataRequest": {
                        "partition": 12
                    },
                    "time": 1642752033512,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "cNCme34BxIQ_dYXUoTpi",
                    "dataRequest": {
                        "partition": 11
                    },
                    "time": 1642752025104,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                },
                {
                    "id": "BqKke34BxIQ_dYXUUGi9",
                    "dataRequest": {
                        "partition": 11
                    },
                    "time": 1642751873379,
                    "type": "Topic",
                    "keyResponse": "topic",
                    "action": "updateConfig",
                    "status": "success"
                }
            ],
            "count": 133
        }
    }
}

function ass () {
    const test = 123
    const aa = 124;
    for(const i = 1; i < 0; i++) {
        console.log(1);
    }
    return 1 + 1;
}

const ac = 123;
// khapuDebug.show(value, {debug: true, showFunction: true});
khapuDebug.showMultiple([value, ass, ac]);

const test = 1 + 1;
console.log(test);