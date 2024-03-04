let  holder = document.getElementById('holder')
let  num = document.getElementById('num')
let  mm = document.getElementById('mm')
let  yy = document.getElementById('yy')
let cvc = document.getElementById('cvc')
let btn = document.getElementById('button')
let col = document.querySelector('.col-2');
let content = document.querySelector('.content')
    // Error Element

let errholder = document.getElementById('error-holder')
let errnum = document.getElementById('error-num')
let errmm= document.getElementById('error-month')
let erryy = document.getElementById('error-year')
let errcvc = document.getElementById('error-cvc')
let isvalid=false;

//display elements
let holderdis = document.getElementById('holdername-display')
let numdis = document.getElementById('cardnum-display')
let mmdis = document.getElementById('mm-display')
let yydis = document.getElementById('yy-display')
let cvcdis = document.getElementById('cvc-display')

// btn.addEventListener('click',a(e))
holder.addEventListener("input",()=>{
    if(holder.value){
        isvalid=true;
       holderdis.innerText=`${holder.value}`
    }
    else{
        holderdis.innerText="JANE APPLESSED"
        isvalid=false;

    }

    if(holder.value==""){
        isvalid=true;
        errholder.textContent="can`t be empty"
        return 
    }
    else if(!isNaN(holder.value)){
        errholder.textContent="wrong format,Alphabets only"
        isvalid=true;
        return
    }
    else{
        errholder.textContent=""
        isvalid=false;
        return
    }

})



num.addEventListener("input",()=>{
    if(num.value){
        isvalid=true;
      numdis.innerText=`${num.value}`
    }
    else{
        numdis.innerText="0000 0000 0000 0000"
        isvalid=false;


    }

    if(num.value==""){
        errnum.textContent="can`t be empty"
        isvalid=true;

        return
    }
    else if(isNaN(num.value)){
        errnum.textContent="wrong format,numbers only"
        isvalid=true;

        return
    }
    else if((num.value).length>16){
        errnum.textContent="wrong number"  
        isvalid=true;

    }
    else if((num.value).length<16){
        errnum.textContent="enter correct number"  
        isvalid=true;

    }
    else{
        errnum.textContent=""
        isvalid=false;
        return
    }
})
mm.addEventListener("input",()=>{
    if(mm.value){
      mmdis.innerText=`${mm.value}`
      isvalid=true;
    }
    else{
        mmdis.innerText="01"
        isvalid=false;
    }

    if(mm.value==""||mm.value==0) {
        errmm.textContent="can`t be empty"
        isvalid=true;
        return
    }
    else if(mm.value>12){
        errmm.textContent="correct month"
        isvalid=true;
        return
    }
    else{
        errmm.textContent=""
        isvalid=false;
        return
    }
})

yy.addEventListener("input",()=>{
    if(yy.value){
    yydis.innerText=`${yy.value}`
    isvalid=true;
    }
    else{
        yydis.innerText="02"
        isvalid=false;

    }

    if(yy.value==""||yy.value==0) {
        erryy.textContent="can`t be empty"
        return
    }
    else if(yy.value>24){
        erryy.textContent="correct year"
        return
    }
    else{
        erryy.textContent=""
        return
    }
})
cvc.addEventListener("input",()=>{
    if(cvc.value){
        cvcdis.innerText=`${cvc.value}`

    }
    else{
        cvcdis.innerText="012"
    }

    if(cvc.value==""||cvc.value==0) {
        errcvc.textContent="can`t be empty"
        return
    }
    else if((cvc.value).length>3||(cvc.value).length<3){
        errcvc.textContent="3 digits only"
        return
    }
    else{
        errcvc.textContent=""
        return
    }
})
btn.addEventListener('click',(e)=> {
        e.preventDefault()
        
          content.classList.remove('hide')
          col.classList.add('hide')
})
