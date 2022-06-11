const tttt = document.getElementById('touch');
tttt.style.backgroundColor="red";
// const ttt = document.getElementById('backgroundColor');
// ttt.style.backgroundColor ="tomato";
// const to = document.getElementById("card");
// to.style.backgroundColor ="red";
//   //to.style.borderRadius="30px";
// // console.log("radius");
const nodeList = document.querySelectorAll(".card");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.borderRadius = "30px";
}
 document.getElementById('big').addEventListener('click',function(){
       document.body.style.color="red";
 })
 document.getElementById('deleteButton').addEventListener("click",function(){
       document.getElementById('deleteButton').style.display='none';
 })