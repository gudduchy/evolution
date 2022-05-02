// write js code here corresponding to index.html
// You should add submit event on the forrm
document.querySelector("#masaiForm").addEventListener("submit",myfunction)
 var Arr=JSON.parse(localStorage.getItem("schedule"))||[]
 
  function myfunction(){
      event.preventDefault()
      
        var obj={
           matchNum:masaiForm.matchNum.value,
           teamA:masaiForm.teamA.value,
           teamB:masaiForm.teamB.value, 
           date:masaiForm.date.value,
           venue:masaiForm.venue.value,
        }
      
     
      Arr.push(obj)
      console.log(obj)
      localStorage.setItem("schedule",JSON.stringify(Arr))
  }
 
