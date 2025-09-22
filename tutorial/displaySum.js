function displaySum() {
    let firstNum = Number(document.getElementById('firstNum').innerHTML)
    let secondNum = Number(document.getElementById('secondNum').innerHTML)
  
    let total = firstNum + secondNum;
    document.getElementById("answer").innerHTML = `${total}` ;
  }
  
  document.getElementById('sumButton').addEventListener("click", displaySum);