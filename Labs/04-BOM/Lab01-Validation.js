alert("Implement relevant code in Lab01-Validation.js file");

//Use classes (.error and .valid) defined in html style element as shown in example fields

//1) validation should occur after 

// 1.1) user enters data field by field 
// 1.1) user clicks on submit for all fields

//2) On validation failure message box should be displayed with relevant message

//3) error message should disappear when user clicks on it (use class .message-box-closed) 


function validateTxtName() {
    if ((document.getElementById("txtName").value) == "") {
        document.getElementById("txtName").classList.add("error");
        document.getElementById("nameAlert").style.visibility = "visible";

    } else {
        document.getElementById("txtName").classList.add("valid");
        document.getElementById("nameAlert").style.visibility = "hidden";
    }
}

function validateAge() {
    let age = document.getElementById("txtAge").value;
    if (isNaN(age) || age < 0 || age > 140) {
        document.getElementById("txtAge").classList.add("error");
        document.getElementById("ageAlert").style.visibility = "visible";

    } else {
        document.getElementById("txtAge").classList.add("valid");
        document.getElementById("ageAlert").style.visibility = "hidden";
    }
}

function validateEmail() {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!(document.getElementById("txtEmail").value.match(mailformat))) {
        document.getElementById("txtEmail").classList.add("error");
        document.getElementById("emailAlert").style.visibility = "visible";

    } else {
        document.getElementById("txtEmail").classList.add("valid");
        document.getElementById("emailAlert").style.visibility = "hidden";
    }
}
function validatePassword() {
    if ((document.getElementById("txtPassword").value).length < 8) {
        document.getElementById("txtPassword").classList.add("error");
        document.getElementById("passAlert").style.visibility = "visible";

    } else {
        document.getElementById("txtPassword").classList.add("valid");
        document.getElementById("passAlert").style.visibility = "hidden";
    }
}
function validateRepeatPassword() {
    if ((document.getElementById("txtPassword").value)!==(document.getElementById("txtRepeatPassword").value)) {
        document.getElementById("txtRepeatPassword").classList.add("error");
        document.getElementById("passRepeatAlert").style.visibility = "visible";

    } else {
        document.getElementById("txtRepeatPassword").classList.add("valid");
        document.getElementById("passRepeatAlert").style.visibility = "hidden";
    }
}
function validateIdCode(){
    let code = document.getElementById("txtIdCode").value;
    const weights1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    const weigths2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
    let sum = 0;
    for(let i = 0; i< weights1.length; i++){
        sum +=  weights1[i] * +code.substr(i,1); 
    }
    let calculatedCheckNumber = sum % 11;
    if (calculatedCheckNumber !== 10){
        document.getElementById("txtIdCode").classList.add("valid");
        document.getElementById("idCodeAlert").style.visibility = "hidden";
    }else{
        
        sum = 0;
        for (let i = 0; i< weigths2.length;i++){
            sum += weigths2[i] * +code.substr(i,1);
        }
        calculatedCheckNumber = sum % 11;
        if (calculatedCheckNumber === 10){
            document.getElementById("txtIdCode").classList.add("valid");
            document.getElementById("idCodeAlert").style.visibility = "hidden";
        }else{
            document.getElementById("txtIdCode").classList.add("error");
            document.getElementById("idCodeAlert").style.visibility = "visible";
        }
    }
}

function validateEvenNumber() {
    let evenNum = +document.getElementById("txtEvenNumber").value;
    if (evenNum % 2 == 0) {
        document.getElementById("txtEvenNumber").classList.add("valid");
        document.getElementById("evenNumAlert").style.visibility = "hidden";
        

    } else {
        document.getElementById("txtEvenNumber").classList.add("error");
        document.getElementById("evenNumAlert").style.visibility = "visible";

    }
}

function validateCreditCard() {
    if ((document.getElementById("txtCreditCard").value.length < 16)) {
        document.getElementById("txtCreditCard").classList.add("error");
        document.getElementById("creditAlert").style.visibility = "visible";

    } else {
        document.getElementById("txtCreditCard").classList.add("valid");
        document.getElementById("creditAlert").style.visibility = "hidden";
    }
}
function validateIsbn() {
    if ((document.getElementById("txtIsbn").value.length < 13)) {
        document.getElementById("txtIsbn").classList.add("error");
        document.getElementById("isbnAlert").style.visibility = "visible";

    } else {
        document.getElementById("txtIsbn").classList.add("valid");
        document.getElementById("isbnAlert").style.visibility = "hidden";
    }
}
function saveData(){
    validateTxtName();
    validateAge();
    validateEmail();
    validatePassword();
    validateRepeatPassword();
    validateIdCode();
    validateEvenNumber();
    validateCreditCard();
    validateIsbn();

}