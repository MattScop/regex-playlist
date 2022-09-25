// validation script here
// Mode 1
// let regex = /[a-z]/gi;
// Mode 2
// let regexTwo = new RegExp(/[a-z]/, 'ig');

const regex = {
    username: /^[a-z\d]{5,12}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/,
    telephone: /^\d{11}$/,
    slug: /^[a-z\d-]{8,20}$/
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
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
};