var fnm=document.myForm.txt.value;
function val(){
    
    var lnm=document.getElementById("txt1").value;
    var add=document.getElementById("txtar").value;
    var p=document.getElementById("pwd").value;
    var cp=document.getElementById("cpwd").value;

    if(fnm== ""){
        alert("firstname is complusary");
    }

    if(lnm== ""){
        alert("lastname is complusary");
    }

    if(add== ""){
        alert("address is complusary");
    }

    if(p== ""){
        alert("Enter the password");
    }

    if(p!==cp){
        alert("password and confirm password should match");
    }

}

function cls(){

    document.getElementById("txt").value="";
    document.getElementById("txt1").value="";
    document.getElementById("txtar").value="";
    document.getElementById("pwd").value="";
    document.getElementById("cpwd").value="";
    document.getElementById("phno").value="";
    document.getElementById("dob").value="";
}