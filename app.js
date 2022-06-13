// selecting elements
const loginForm=document.querySelector('form')

//event functions
const login=(e)=>{
    e.preventDefault()
    let email=document.getElementById('inputEmail3').value
    let password=document.getElementById('inputPassword3').value

    if(email !=='' && password !==''){
        location.href='/manager-dashboard.html'
    }
    else{
        alert('incorrect email or password!')
    }
}


//event listeners
loginForm.addEventListener('submit',login)