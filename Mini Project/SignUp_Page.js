///script de Sign up form///////////

var nom=document.getElementById("username");
var mail=document.getElementById("email");
var passwd=document.getElementById("password");
var conf=document.getElementById("confirm");
var RegExpEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var RegExpPasswd=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

//class="btn btn-light btn-lg
signup.addEventListener("click",function(){
var correct=0;
var error=0
/*console.log( RegExpEmail.test(email.value));
console.log(RegExpPasswd.test(passwd.value));
 console.log(nom.value);
 console.log(nom.value.length);
 console.log(mail.value);
 console.log(passwd.value);
 console.log(conf.value);*/
 if(nom.value=="" || nom.value.length <5 || nom.value.length>25)
 {
    error++;
  document.getElementById("errorUser").style.display='block';
  document.getElementById("errorUser").innerHTML="username invalid";
 

 }
 else
 {
    correct++;
  document.getElementById("errorUser").style.display='none';
 }
 if(RegExpEmail.test(mail.value)==false || mail.value== "")
 {
    error++;
  document.getElementById("errorEmail").style.display='block';
  document.getElementById("errorEmail").innerHTML="email invalid";
 }
 else
 {
    correct++;
  document.getElementById("errorEmail").style.display='none';
 }
 if( passwd.value=="" || RegExpPasswd.test(passwd.value)==false)
 {
   error++;
  document.getElementById("errorPasswd").style.display='block';
  document.getElementById("errorPasswd").innerHTML="password invalid";
 }
 else
 {
   correct++;
  document.getElementById("errorPasswd").style.display='none';
 }
 if(passwd.value!=conf.value ||conf.value=="")
 {

    error++;
  document.getElementById("errorConf").style.display='block';
  document.getElementById("errorConf").innerHTML="confirm passwod invalid";
 }
 else
 {
    correct++;
  document.getElementById("errorConf").style.display='none';
 }

 console.log("correct: "+correct);
console.log("error: "+error);
if(error==0)
{
   // window.open("file:///C:/Users/HP/Downloads/3IIR%20emsi/langage%20de%20script/Mini%20Project/Courses_Page.html");
   window.open("page2.html");
}
 
  
})

