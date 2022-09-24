// validation script here
// Mode 1
// let regex = /[a-z]/gi;
// Mode 2
// let regexTwo = new RegExp(/[a-z]/, 'ig');

const regex = {
    telephone: /^\d{11}$/
};

const inputs = document.getElementsByTagName('input');
Array.from(inputs).forEach(input => {
    input.addEventListener('keyup', () => {
        validate(input, regex[input.name])
    });
});

// validation function
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid'
    } else {
        field.className = 'invalid'
    }
};