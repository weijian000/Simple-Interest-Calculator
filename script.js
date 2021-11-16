

function updateTextInput(val) {

    document.getElementById('textInput').innerHTML = parseFloat(val).toFixed(2)+"%"; 
}

function compute()
{
    let amountval=document.getElementById("amount").value;
    let rateval = document.getElementById("rate").value;
    let yearsval = document.getElementById("years").value;
    let date = new Date();
    let dateval= parseInt(date.getFullYear())+parseInt(yearsval);   
    let resultval = amountval*(rateval/100)*yearsval;
    let displayval=document.getElementById('result');
    
    if(amountval>0){
    displayval.style.display='inline';
    document.getElementById("result1").innerHTML=amountval;
    document.getElementById("result2").innerHTML=rateval+'%';
    document.getElementById("result3").innerHTML=resultval;
    document.getElementById("result4").innerHTML= dateval;
    }else if(amountval==0){
        alert('Please enter a positive number');
    }if(amountval<0){
        alert('Please enter a positive number');
    }
    
    
}        