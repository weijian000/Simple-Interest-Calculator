function compute()
{
    let amountval=document.getElementById("amount").value;
    let rateval = document.getElementById("rate").value;
    let yearsval = document.getElementById("years").value;
    let date = new Date();
    let dateval= parseInt(date.getFullYear())+parseInt(yearsval);
   
    let resultval = amountval*(rateval/100)*yearsval;
    while(resultval>=0){
    document.getElementById('result').style.display='inline';
    document.getElementById("result1").innerHTML=amountval;
    document.getElementById("result2").innerHTML=rateval;
    document.getElementById("result3").innerHTML=resultval;
    document.getElementById("result4").innerHTML= dateval;
    }
    
    
}

function updateTextInput(val) {

    document.getElementById('textInput').innerHTML = parseFloat(val).toFixed(2)+"%"; 
  }
        