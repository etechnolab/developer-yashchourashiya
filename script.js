const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const mobileNumber = document.getElementById('mobileNumber');
const address = document.getElementById('address');
const message = document.getElementById('message');

const regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regxNumber = /^[0-9]{10}$/


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Getting values from inputs

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const mobileNumberValue = mobileNumber.value.trim();
    const addressValue = address.value.trim();
    const messageValue = message.value.trim()

   // name
    if(nameValue === ''){
        setErrorFor(name, "Name is required.")
    }else if(nameValue.length < 3){
        setErrorFor(name, "name must have atleast 3 character")
    }else{
        setSuccessFor(name);
    }

    // email
    if(emailValue === ''){
        setErrorFor(email, "Email is required.")
    }else if(!emailValue.match(regxEmail)){
        setErrorFor(email, 'Please enter a genuine email.')
    }else{
        setSuccessFor(email);
    }

    // mobile
    if(!mobileNumberValue.match(regxNumber)){
        setErrorFor(mobileNumber, 'Please enter 10 degit mobile number.')
    }else{
        setSuccessFor(mobileNumber);
    }

    // address
    if(addressValue === ''){
        setErrorFor(address, "Address is required.")
    }else if(addressValue.length < 10){
        setErrorFor(address, "Address must have atleast 10 character")
    }else{
        setSuccessFor(address);
    }

    // message
    if(messageValue === ''){
        setErrorFor(message, "Message is required.")
    }else if(messageValue.length < 15){
        setErrorFor(message, "Message must have atleast 15 character")
    }else{
        setSuccessFor(message);
    }

    console.log([nameValue, emailValue, mobileNumberValue, addressValue, messageValue]);
});


function setErrorFor(input, message){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');

    small.innerText = message;

    formGroup.className = 'form-group error'
}

function setSuccessFor(input){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success'
    
}



// if(nameValue ==='' || emailValue ==='' || mobileNumberValue ==='' || addressValue ==='' || messageValue ===''){
//     setErrorFor(name, 'Name is required.')
//     setErrorFor(email, 'Email is required.')
//     setErrorFor(mobileNumber, 'Mobile number is required.')
//     setErrorFor(address, 'Address is required.')
//     setErrorFor(message, 'Message is required.')

// }if(nameValue.length <=3){
//     setErrorFor(name, 'Name must have atleast 4 characters.')

// }if(!emailValue.match(regxEmail)){
//     setErrorFor(email, 'Please enter a genuine email.')

// }if(!mobileNumberValue.match(regxNumber)){
//     setErrorFor(mobileNumber, 'Please enter 10 degit mobile number.')
// }
// else{
//     // Adding Success Class
//     setSuccessFor(name)
//     setSuccessFor(email)
//     setSuccessFor(mobileNumber)
//     setSuccessFor(address)
//     setSuccessFor(message)
//  
//     alert('Form Submitted')
// }