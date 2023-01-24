document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener('click',()=>{
  document.querySelector('.sidebar').classList.toggle('sidebarGo')
   if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.ham').style.display = 'inline';
    document.querySelector('.cross').style.display = 'none'
   }else{
    document.querySelector('.ham').style.display = 'none';
  setTimeout(()=>{
    document.querySelector('.cross').style.display = 'inline'
  },350)
   }
})
let name = document.querySelector('.name');
let nameVal = "Vishal kumar";
name.innerText = " "
function appendName(val){
    let count = 0
     setInterval(()=>{
       if(count<nameVal.length){
        name.innerText+=nameVal[count]
        count++;
       }else{
        count = 0;
        name.innerText = ""
       }
     },500)
}
appendName(nameVal)
