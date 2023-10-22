let fullname = document.getElementById("fullname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let address = document.getElementById("address");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");

function checkNumber(pass){
    for(let i = 0; i < pass.length; i++){
        if(isNaN(pass[i]) == false){
            return true;
        }
    }
    return false;
}

function validation(){
    var flag = 0;

    fullname = document.getElementById("fullname");
    username = document.getElementById("username");
    email = document.getElementById("email");
    address = document.getElementById("address");
    password = document.getElementById("password");
    confirmpassword = document.getElementById("confirmpassword");

    if(fullname.value.length < 2){
        errorfullname.innerHTML = "Full Name must be at least 2 characters";
        flag++;
    }

    if(username.value.length < 5 || username.value.length > 15){
        errorusername.innerHTML = "Username must be between 5-15 characters";
        flag++;
    }

    if(email.value.includes("@") == false){
        erroremail.innerHTML = "Email must include '@'";
        flag++;
    }

    if(address.value.length < 10){
        erroraddress.innerHTML = "Address must be at least 10 characters";
        flag++;
    }

    if(password.value.length < 8 || !checkNumber(password.value)){
        errorpassword.innerHTML = "Password must be at least 8 characters with a number";
        flag++;
    }

    if(confirmpassword.value != password.value){
        errorconfirmpassword.innerHTML = "Confirm Password must be same as Password";
        flag++;
    }

    if(confirmpassword.value == ""){
        errorconfirmpassword.innerHTML = "Please fill the Password first";
        flag++;
    }

    if(flag == 0){
        alert("Your account has been registered successfuly!");
        window.open("index.html", "_self");
    }
}