
let userNameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passInput");
let signupBtn = document.getElementById("signup");
let alertMassage = document.getElementById("alertMassage");
let loginBtn = document.getElementById('login');
let welcomeMassege = document.getElementById('welcomeMassege');
let logoutBtn = document.getElementById('logout');

let allUser = [];

if(localStorage.getItem('Users') != null){

    allUser = JSON.parse(localStorage.getItem('Users'));
}
if(signupBtn != null){
    signupBtn.addEventListener("click",signup)
}
if(loginBtn != null){
    loginBtn.addEventListener("click",login)
}
if(logoutBtn != null){
    logoutBtn.addEventListener("click",logOut)
}
if(welcomeMassege!= null){
    let user = JSON.parse(localStorage.getItem('userName'))
    welcomeMassege.innerHTML='welcome '+ user
}

function signup(){

    let user={
        name: userNameInput.value,
        email: emailInput.value,
        password: passInput.value
    }
    if(userNameInput.value=='' || emailInput.value=='' || passInput.value=='' || checkEmailExict() != -1 ){

        if(userNameInput.value=='' || emailInput.value=='' || passInput.value=='' ){
            getAlertMassege('all inputs required' , '#dc3545');
        }
        
        if(checkEmailExict() != -1){
            getAlertMassege('Email Exict' , '#ffc107');
        }
    }
    
    else{
        getAlertMassege('success' , 'green');
        allUser.push(user);
        localStorage.setItem('Users' , JSON.stringify(allUser));
        clearForm();
    }


}
function clearForm() {
    userNameInput.value = '';
    emailInput.value = '';
    passInput.value = '';
}
function getAlertMassege(str , color){
    alertMassage.innerHTML=str;
    alertMassage.classList.replace('d-none' , 'd-block');
    alertMassage.style.color=color;
}

function checkEmailExict(){
    let res= allUser.findIndex(ele => ele.email == emailInput.value);
    return res;
}

function login(){

    if(emailInput.value =='' || passInput.value==''){

        getAlertMassege('all inputs required' , '#dc3545');

    }
    else{
        let res = allUser.find(ele => ele.email == emailInput.value && ele.password == passInput.value);
        if(res == undefined){
            getAlertMassege('Email or password not correct' , 'red');
        }
        else{

            localStorage.setItem('userName',JSON.stringify(res.name));

            window.open('home.html'); // to open new tap without any history (to don't go to login page )
             // window.location.href='home.html'
        }
    }
    
}
function logOut(){ 

    // window.location.href='index.html'; 
    window.open('index.html'); // to open new tap without any history (to don't go to home page )
}