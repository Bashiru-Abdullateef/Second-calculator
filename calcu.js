let first = document.getElementById('first');

function pick(params) {
    first.value += params;
}

function clear2() {
    if (first.value == '') {
        alert('You self check am now');
    } else {
        first.value = first.value.slice(0, -1);
    }
}

function one() {
    if (first.value == '') {
        alert('Are you blind nii');
    } else {
        first.value = '';
    }
}

function both() {
    if (first.value == '') {
        alert('Put something in it first');
    } else {

        first.value = '';
    }
}

function add(params) {
    first.value += params
}

function subtract(params) {
    first.value += params
}
function multiply(params) {
    first.value += params
}
function divide(params) {
    first.value += params
}

function equal() {
    result = eval(first.value)
    first.value = result
}


