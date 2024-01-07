// console.log('TEST');

document.querySelector('#myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log(e);

    let firstName;
    let lastName;
    let email;
    let phone;
    let userMessage;

    const form = e.currentTarget;
    const data = new FormData(form);

    firstName = data.get('firstName')
    lastName = data.get('lastName')
    email = data.get('email')
    phone = data.get('phone')
    userMessage = data.get('userMessage')

    console.log('firstName :', firstName);
    console.log('lastName :', lastName);
    console.log('email :', email);
    console.log('phone :', phone);
    console.log('userMessage :', userMessage);

})