// login button 
document.getElementById("loginButton").addEventListener("click",function (e){
  e.preventDefault();
  
  const mobilNumber = 10339613197
  const pinNumber = 9701
  

const mobilNumberValue = document.getElementById("Mobil-number").value
const pinNumberValue = document.getElementById("Mobile-pin").value

const mobilNumberValueConverted = parseInt (mobilNumberValue);
const pinNumberValueConverted = parseInt (pinNumberValue);

  if(mobilNumberValueConverted === mobilNumber && pinNumberValueConverted === pinNumber){
    window.location.href="./home.html"
  }
else {
  alert("Invalid information")
}
})










