function asd()
{
   alert("wsedfsdfsdf");
}
function Display()
{
   var date = new Date(); 
   var hh = date.getHours();
   var mm = date.getMinutes();
   var ss = date.getSeconds();
   //document.getElementById("Clock").innerHTML=hh+":"+mm+":"+ss;
}
setTimeout(showTime, 1000);
document.getElementById("Clock").innerHTML=hh+":"+mm+":"+ss;