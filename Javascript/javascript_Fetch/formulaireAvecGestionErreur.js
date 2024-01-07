let myForm = document.querySelector('#myForm');

let firstName;
let lastName;
let email;
let phone;
let user_message;

//! Validation du prénom.

myForm.firstName.addEventListener('change', function () {
  firstNameValidator(this);
});

const firstNameValidator = (myInput) => {
  let myRegExp = new RegExp('^[a-zA-Z-]{2,50}$', 'g');
  let testInputValue = myRegExp.test(myInput.value);

  let fieldBox = document.querySelector('#firstNameId');
  let mySpanAlert = document.querySelector('#firstNameSpan');

  if (testInputValue === false) {
    console.log('condition firstName fausse :', testInputValue);

    fieldBox.classList.remove('fieldBox');
    fieldBox.classList.add('fieldBoxError');

    mySpanAlert.classList.remove('inputTextValidatorOff');
    mySpanAlert.classList.add('inputTextValidatorOn');

    firstName = null;

    console.log('Valeur du champs : ', firstName);
  } else if (testInputValue === true) {
    console.log('condition firstName vrai :', testInputValue);

    fieldBox.classList.remove('fieldBoxError');
    fieldBox.classList.add('fieldBoxOk');

    mySpanAlert.classList.add('inputTextValidatorOff');
    mySpanAlert.classList.remove('inputTextValidatorOn');

    firstName = myInput.value;

    console.log('Valeur du champs : ', firstName);
  }
};

//! -------------------------------------------------

//! Validation du nom.

myForm.lastName.addEventListener('change', function () {
  lastNameValidator(this);
});

const lastNameValidator = (myInput) => {
  let myRegExp = new RegExp('^[a-zA-Z-]{2,50}$', 'g');
  let testInputValue = myRegExp.test(myInput.value);

  let fieldBox = document.querySelector('#lastNameId');
  let mySpanAlert = document.querySelector('#lastNameSpan');

  if (testInputValue === false) {
    console.log('condition lastName fausse :', testInputValue);

    fieldBox.classList.remove('fieldBox');
    fieldBox.classList.add('fieldBoxError');

    mySpanAlert.classList.remove('inputTextValidatorOff');
    mySpanAlert.classList.add('inputTextValidatorOn');

    lastName = null;

    console.log('Valeur du champs : ', lastName);
  } else if (testInputValue === true) {
    console.log('condition lastName vrai :', testInputValue);

    fieldBox.classList.remove('fieldBoxError');
    fieldBox.classList.add('fieldBoxOk');

    mySpanAlert.classList.add('inputTextValidatorOff');
    mySpanAlert.classList.remove('inputTextValidatorOn');

    lastName = myInput.value;

    console.log('Valeur du champs : ', lastName);
  }
};

//! -------------------------------------------------

//! Validation du email.

myForm.email.addEventListener('change', function () {
  emailValidator(this);
});

const emailValidator = (myInput) => {
  let myRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
    'g'
  );
  let testInputValue = myRegExp.test(myInput.value);

  let fieldBox = document.querySelector('#emailId');
  let mySpanAlert = document.querySelector('#emailSpan');

  if (testInputValue === false) {
    console.log('condition email fausse :', testInputValue);

    fieldBox.classList.remove('fieldBox');
    fieldBox.classList.add('fieldBoxError');

    mySpanAlert.classList.remove('inputTextValidatorOff');
    mySpanAlert.classList.add('inputTextValidatorOn');

    email = null;

    console.log('Valeur du champs : ', email);
  } else if (testInputValue === true) {
    console.log('condition email vrai :', testInputValue);

    fieldBox.classList.remove('fieldBoxError');
    fieldBox.classList.add('fieldBoxOk');

    mySpanAlert.classList.add('inputTextValidatorOff');
    mySpanAlert.classList.remove('inputTextValidatorOn');

    email = myInput.value;

    console.log('Valeur du champs : ', email);
  }
};

//! -------------------------------------------------

//! Validation du téléphone.

myForm.phone.addEventListener('change', function () {
  phoneValidator(this);
});

const phoneValidator = (myInput) => {
  let myRegExp = new RegExp('^[0-9+]{10,12}$', 'g');
  let testInputValue = myRegExp.test(myInput.value);

  let fieldBox = document.querySelector('#phoneId');
  let mySpanAlert = document.querySelector('#phoneSpan');

  if (testInputValue === false) {
    console.log('condition phone fausse :', testInputValue);

    fieldBox.classList.remove('fieldBox');
    fieldBox.classList.add('fieldBoxError');

    mySpanAlert.classList.remove('inputTextValidatorOff');
    mySpanAlert.classList.add('inputTextValidatorOn');

    phone = null;

    console.log('Valeur du champs : ', phone);
  } else if (testInputValue === true) {
    console.log('condition phone vrai :', testInputValue);

    fieldBox.classList.remove('fieldBoxError');
    fieldBox.classList.add('fieldBoxOk');

    mySpanAlert.classList.add('inputTextValidatorOff');
    mySpanAlert.classList.remove('inputTextValidatorOn');

    phone = myInput.value;

    console.log('Valeur du champs : ', phone);
  }
};

//! -------------------------------------------------

//! Validation du message.

myForm.user_message.addEventListener('change', function () {
  user_messageSpanValidator(this);
});

const user_messageSpanValidator = (myInput) => {
  let myRegExp = new RegExp('^[a-z]{2,256}$', 'g');
  let testInputValue = myRegExp.test(myInput.value);

  let fieldBox = document.querySelector('#user_messageId');
  let mySpanAlert = document.querySelector('#user_messageSpan');

  if (testInputValue === false) {
    console.log('condition user_message fausse :', testInputValue);

    fieldBox.classList.remove('fieldBox');
    fieldBox.classList.add('fieldBoxError');

    mySpanAlert.classList.remove('inputTextValidatorOff');
    mySpanAlert.classList.add('inputTextValidatorOn');

    user_message = null;

    console.log('Valeur du champs : ', user_message);
  } else if (testInputValue === true) {
    console.log('condition user_message vrai :', testInputValue);

    fieldBox.classList.remove('fieldBoxError');
    fieldBox.classList.add('fieldBoxOk');

    mySpanAlert.classList.add('inputTextValidatorOff');
    mySpanAlert.classList.remove('inputTextValidatorOn');

    user_message = myInput.value;

    console.log('Valeur du champs : ', user_message);
  }
};

//! -------------------------------------------------
