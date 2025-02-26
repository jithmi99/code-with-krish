module.exports = {
    getMinNumber: getMinNumber,
    getMaxNumber: getMaxNumber,
    getAverage: getAverage,
    getSort: getSort,
}

function getMinNumber (num1, num2) {
    
    if ( isNaN(num1) || isNaN(num2) ){
        return "Not a number"
    }

    return Math.min(num1,num2);

}

function getMaxNumber (numbers) {
    let values = numbers.split(',');

    let maxValue = 0;
    for (let index = 0; index < values.length - 1; index++) {
        if (isNaN(values[index])) {
            return "Not a number";
        }

        if (maxValue < parseInt(values[index])) {
            maxValue = parseInt(values[index]);
        }
    }

    return maxValue;
}

function getAverage (numbers) {
    let values = numbers.split(',');

    let avgValue = 0;
    for (let index = 0; index < values.length - 1; index++) {
        if (isNaN(values[index])) {
            return "Not a number";
        }

        avgValue = avgValue + parseInt(values[index]);
    }

    return avgValue/(values.length - 1);
}

function getSort (numbers, type) {
    let values = numbers.split(',');

    for (let index = 0; index < values.length - 1; index++) {
        if (isNaN(values[index])) {
            return "Not a number";
        }

        values[index] = parseInt(values[index]);
    }

    let swapped = 0;
    if (type == 'asc') {
        for (let x = 0; x < values.length - 1; x++) {
            for (let y = 0; y < values.length - 1 - x; y++) {
                if (values[y] > values[y + 1]) {
                    swapped = values[y + 1];
                    values[y + 1] = values[y];
                    values[y] = swapped;
                }
            }
        }
    } else {
        for (let x = 0; x < values.length - 1; x++) {
            for (let y = 0; y < values.length - 1 - x; y++) {
                if (values[y] < values[y + 1]) {
                    swapped = values[y + 1];
                    values[y + 1] = values[y];
                    values[y] = swapped;
                }
            }
        }
    }

    return values;
}