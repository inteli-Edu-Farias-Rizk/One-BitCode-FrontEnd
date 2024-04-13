function useLightTheme(){
    //this is going to add for 
    console.log(document.body.style)

    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9' 
}
function DarkTheme(){
    
    document.body.style.color ='#f1f5f9' 
    document.body.style.backgroundColor = '#212529'
}

function switchTheme(){
    //going tonget access to all of the list of the classes 
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}
document.getElementById('lightBtn').addEventListener('click',useLightTheme())   

document.getElementById('darkBtn').addEventListener('click',useLightTheme())

document.getElementById('switchBtn').addEventListener('click',switchTheme())