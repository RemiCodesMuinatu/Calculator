// Get Element by id
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const answer = document.getElementById("answer");

//Add event Listener to IDS
document.getElementById("add").addEventListener("click", addNum);
document.getElementById("minus").addEventListener("click", minusNum);
document.getElementById("multiply").addEventListener("click", multiplyNum);
document.getElementById("divide").addEventListener("click", divideNum);



function addNum(e) { 

  const addition = parseInt(num1.value) + parseInt(num2.value);
   answer.innerHTML = addition;

  
}

function minusNum(e) { 
const subtracted = parseInt(num1.value) - parseInt(num2.value);
  answer.innerHTML = subtracted;
  

}

function multiplyNum(e) { 

 
  const multiplyer = parseInt(num1.value) * parseInt(num2.value);
   answer.innerHTML = multiplyer;
}

function divideNum(e) { 

  const quotient = parseInt(num1.value) / parseInt(num2.value);
   answer.innerHTML = quotient;
  
}



