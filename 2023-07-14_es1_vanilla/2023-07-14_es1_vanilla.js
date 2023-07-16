function $(id){
    return document.getElementById(id)
}

/* global variables */
const formSection= $('formSection')
const header= $('header')
const iptUserName= $('iptUserName')
const iptPw= $('iptPw')
const btnLogIn= $('btnLogIn')
const body= $('body')
let currentUser= ''
let counterLogs= 1

/* array that contains the infos of each user */
let arrUserData= [
    {
        userName: 'eliaspower',
        pw: 'cicalino',
        gender: 'male'
    },
    {
        userName: 'minnie',
        pw: 'topolino',
        gender: 'female'
    },
    {
        userName: 'ziopaperone',
        pw: 'soldi',
        gender: 'male'
    }
]


/* handler event of the 'enter' button in the form */
btnLogIn.addEventListener('click', () => {
    //console.log('castori')
    //console.log(iptPw.value)
    //console.log(iptUserName.value)

    if(counterLogs <=3){
        console.log(counterLogs)
        iptHandler()
    }
    else{
        errorForm()
    }
})


/*this function checks if the value of the password and username exist in the array; if it does it calls the function 'successForm', otherwise it increases the counter of the attempetd logins*/
function iptHandler(){
    let user= iptUserName.value
    let pw= iptPw.value
    let flag= false
    for(let i=0; i<arrUserData.length; i++){
        if(arrUserData[i].userName== user.trim().toLowerCase() && arrUserData[i].pw == pw.trim().toLowerCase())
        {
            //console.log('nuovo form')
            currentUser= arrUserData[i]
            successForm()
            flag= true
            return flag
        }
    }
    if(flag==false){
        return counterLogs += 1

    }
}

/* in case of succesfull login this function hides the form and creates a new div with a welcome message */
function successForm(){
    formSection.classList.replace('flex', 'hidden')
    let welcomeMsg= document.createElement('div')
    welcomeMsg.textContent= `${currentUser.gender== 'male' ? 'benvenuto' : 'benvenuta'} ${currentUser.userName}`
    welcomeMsg.classList.add(
        'w-[80%]',
        'flex',
        'justify-center',
        'items-center',
        'border-[4px]',
        'border-black',
        'bg-green-400',
        'text-2xl',
        'font-extrabold',
        'p-4',
        'text-black',
        'h-1/3',
        'underline'
    )
    body.appendChild(welcomeMsg)
    return

    
}

/* in case the login counter's value is higher than 3 this function shows an error message*/
function errorForm(){
    formSection.classList.replace('flex', 'hidden')
    let errorMsg= document.createElement('div')
    errorMsg.textContent= 'Vergogna!! la prossima volta scriviti la password sulla mano con il pennarello'
    errorMsg.classList.add(
        'w-[80%]',
        'flex',
        'justify-center',
        'items-center',
        'border-[4px]',
        'border-black',
        'bg-red-500',
        'text-2xl',
        'font-extrabold',
        'p-4',
        'text-black',
        'h-1/3',
        'underline'
    )
    body.appendChild(errorMsg)
    return
}


