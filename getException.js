let _ = require('lodash');

let status = {
    invalid: [
        { type: "Invalid", text: "123" },
        { type: "Invalid", text: "456" },
        { type: "Invalid", text: "789" }
    ]
}

let status2 = {
    dupe: [
        { type: "Dupe", text: "12345" },
        { type: "Dupe", text: "67890" }
    ]
}


function getException(status, type) {
    let exceptionData = "";
    if (status[type] && status[type].length > 0) {
        exceptionData = _.reduce(status[type], (result, value, key) => {
            let valueText = result + value.text;
            return parseInt(key) != status[type].length - 1 ?
                valueText + ", " : valueText;
        }, type + " id: ")
    }
    return exceptionData;
}

console.log(getException(status, "invalid")); // invalid id: 123, 456, 789
console.log(getException(status2, "dupe")); // dupe id: 12345, 67890