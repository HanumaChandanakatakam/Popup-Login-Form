var attempt = 3; 
function validate(){
var Email = document.getElementById("Email").value;
var Password = document.getElementById("Password").value;
if ( Email == "chandanaayurveda@gmail.com" && Password == "chandana"){
alert ("Login successfully");
 window.open('index1.html'); 
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0){
document.getElementById("Email").disabled = true;
document.getElementById("Password").disabled = true;
document.getElementById("login").disabled = true;
return false;
}
}
}
