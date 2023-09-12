let Today=new Date().getDay()
switch(Today){
    case 1:
    document.querySelector('.Day').textContent="Monday"
    break
    case 2:
        document.querySelector('.Day').textContent="Tuesday" 
        break
    case 3:
        document.querySelector('.Day').textContent="Wednesday" 
        break
    case 4:
        document.querySelector('.Day').textContent="Thurday" 
        break
    case 5:
        document.querySelector('.Day').textContent=" Friday" 
        break
    case 6:
        document.querySelector('.Day').textContent=" Saturday"
        break
    case 0:
        document.querySelector('.Day').textContent=" Sunday" 
        break
   
}
// Create a new Date object
const currentUtcTime = new Date().toUTCString();
// Get the current time
// const now = new Date();
// const utcHours = now.getUTCHours();
// const utcMinutes = now.getUTCMinutes();
// const utcSeconds = now.getUTCSeconds();
const currentUtcTimeMilliseconds = new Date().getTime();
document.querySelector('.time').textContent=` ${currentUtcTimeMilliseconds}`

