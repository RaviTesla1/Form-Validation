let userName = document.getElementById("userName");
let password = document.getElementById("password");

let userNameError = document.getElementById("userNameError");
let passwordNameError = document.getElementById("passwordNameError");


console.log(userNameError)
console.log(passwordNameError)

let flag ;
let flag2;



function formValidate(){

    if(userName.value == ""){
        console.log("Empty string")
        document.getElementById("userNameError").innerText = "User Name should not be empty";
        flag = 0;
    }
    else if(userName.value.length < 3){
        console.log("Length less than 3")
        document.getElementById("userNameError").innerText = "User Name should have atleat 3 char";
        flag = 0;
    }
    else {
        document.getElementById("userNameError").innerText = "";
        flag = 1;
    }

    // CONDITION FOR PASSWORD
    if(password.value == ""){
        console.log("Empty string")
        document.getElementById("passwordNameError").innerText = "Password should not be empty";
        flag2 = 0;
    }else{
        document.getElementById("passwordNameError").innerText = "";
        flag2 = 1;
    }
    



    if(flag && flag2){
        return true;
    }else{
        return false;
    }
}