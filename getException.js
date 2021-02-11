let _ = require('lodash');

let status = {
    invalid: [
        { type: "Invalid", text: "123" },
        { type: "Invalid", text: "456" },
        { type: "Invalid", text: "789" }
    ],
    added: [{ type: "Rows Added", text: "O row added" }],
    updated: [{ type: "Rows Updated", text: "7 row added" }]
}

let status2 = {
    dupe: [
        { type: "Dupe", text: "12345" },
        { type: "Dupe", text: "67890" }
    ],
    added: [{ type: "Rows Added", text: "O row added" }],
    updated: [{ type: "Rows Updated", text: "5 row added" }]
}


function getException(status, type) {
    let exceptionData = [];
    let invalidItems = "";
    if (status[type] && status[type].length > 0) {
        invalidItems = _.reduce(status[type], (result, value, key) => {
            let invalidData = result + value.text;
            return parseInt(key) != status[type].length - 1 ?
                invalidData + ", " : invalidData;
        },
            type + " id: "
        )
    }
    if (invalidItems) {
        exceptionData.push(invalidItems);
    }
    return exceptionData;
}

console.log(getException(status, "invalid")); // [ 'invalid id: 123, 456, 789' ]
console.log(getException(status2, "dupe")); // [ 'dupe id: 12345, 67890' ]