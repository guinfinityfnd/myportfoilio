const email = document.getElementById("exampleInputEmail1").indexOf("@");
const user_name = document.getElementById("exampleInputPassword1");
const agree = document.getElementById("exampleCheck1");
submitOK = "true";
function myFunction() {
    if(email.value == -1){
        alert('invalid email');
        submitOK = "false";
    }
    if(user_name.value.length < 3){
        alert("The name may have more than 4 characters");
        submitOK = "false";
    }
    if (submitOK == "false") {
        return false;
    }
    alert('Thanks for submitting......');
}