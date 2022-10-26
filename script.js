const buttton = document.getElementsByClassName("submit")[0]
const inputs = document.getElementsByClassName("inputs")[0].children
const pass = document.getElementById("pass")
const email = document.getElementById("email")
const msg = document.getElementById("msg")

let emailBool = false
let passBool = false
let buttonPos = 0

const changeButtonPos = () => {
    if(buttonPos == 0 ){
        buttton.style.marginLeft = "-245px"
        buttonPos = -1
    } 
    else if (buttonPos == -1) {
        buttton.style.marginLeft = "245px"
        buttonPos = 1
    } else {
        buttton.style.marginLeft = "0"
        buttonPos = 0
    }

}

const addMsg = () => {
    if(!emailBool && !passBool){
        msg.textContent = "Email and Password are invalid!"
        msg.style.color = "#e95151"
    } else if(!emailBool){
        msg.textContent = "Email is invalid!"
        msg.style.color = "#e95151"
    } else if(!passBool){
        msg.textContent = "Password is invalid!"
        msg.style.color = "#e95151"
    } else{
        msg.textContent = ""
        msg.style.color = "#4b8efa"
    }
}

pass.addEventListener('input', () => {
    if(pass.value.length >= 8 && pass.value.length <= 12){
        passBool = true
    } else {
        passBool = false
    }
})

email.addEventListener('input', () => {
    if(validateEmail(email.value)){
        emailBool = true
    } else {
        emailBool = false
    }
})

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

buttton.addEventListener('mouseover', (e) => {
    if(!(emailBool && passBool)){
        changeButtonPos()
        console.log("yessss")
        e.target.style.background = "#e95151"
        addMsg();
    } else {
        e.target.style.background = "#4b8efa"
    }
})

console.log(pass)




