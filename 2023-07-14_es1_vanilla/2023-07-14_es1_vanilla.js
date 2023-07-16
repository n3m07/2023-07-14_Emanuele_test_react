function $(id){
    return document.getElementById(id)
}

const formSection= $('formSection')
const header= $('header')
const iptUserName= $('iptUserName')
const iptPw= $('iptPw')
const btnLogIn= $('btnLogIn')
const body= $('body')
let currentUser= ''
let counterLogs= 1

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
    }
]

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

function iptHandler(){
    let user= iptUserName.value
    let pw= iptPw.value
    for(let i=0; i<arrUserData.length; i++){
        if(arrUserData[i].userName== user.trim().toLowerCase() && arrUserData[i].pw == pw.trim().toLowerCase())
        {
            //console.log('nuovo form')
            currentUser= arrUserData[i]
            successForm()
            return
        }
        else{
            return counterLogs += 1
            
        }
    }
}

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

function errorForm(){
    formSection.classList.replace('flex', 'hidden')
    let errorMsg= document.createElement('div')
    errorMsg.textContent= 'Numero massimo tentativi effettuati!!'
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


