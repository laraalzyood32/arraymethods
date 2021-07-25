
const cars=["nissan","kia","hondai","rengrover","kadelak"];
document.getElementById("demo1").innerHTML = cars;
cars.shift();
document.getElementById("demo2").innerHTML = cars;
let country= "jordan,jermany,canada,italy";
document.getElementById("demo").innerHTML = country.slice(-12,-6);
document.getElementById("demo").innerHTML = country.substring(7,14);
document.getElementById("demo").innerHTML = country.substr(7);





function showtime(){
    var date= new Date();
    var hours =date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    var timezone="AM";
    if (hours===0){
        hours=12;

    }
    if (hours>12){
        hours=hours-12;
        timezone="PM";
    }
    hours=(hours<10) ?"0" + hours : hours;
    minute=(minute<10) ?"0" + minute : minute;
    second=(second<10) ?"0" + second : second;


    var finaltime=hours + ':' + minute + ':' + second + ':' + timezone ;

    document.getElementById("myclock").innerHTML=finaltime;
    setTimeout(finaltime,1000);

}
showtime();


function opennav(){
    document.getElementById("sidebar").style.width="300px";
    document.getElementById("main").style.marginLeft="300px";
}

function closenav(){
    document.getElementById("sidebar").style.width="0px";
    document.getElementById("main").style.marginLeft="0px";
}
function  aboutme(){
   var x= document.getElementById("button")
   if( x.innerHTML=="more details"){
       document.getElementById("me").innerHTML="I am a Computer engineer who creates high-performing applications with organized architecture.I'm also experienced in product design and client relations, with hands-on experience in all levelsof testing, including performance, functional, integration, system, and user acceptance.";
       x.innerHTML="less details";
   }
       else {
           x.innerHTML="more details";
           document.getElementById("me").innerHTML=" ";
       }

}
var icon=document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("dark");
    document.body.style.transition="all ease 2s";
    if(document.body.classList.contains("dark"))
    {
        icon.src="https://e7.pngegg.com/pngimages/1010/463/png-clipart-smiling-sun-cartoon-pictures-cartoon-icon.png";
    }
    else{
        icon.src="https://w7.pngwing.com/pngs/300/617/png-transparent-computer-icons-crescent-cdr-text-monochrome-thumbnail.png";
    }
}
function  changeclick(){
    var k=document.querySelector('Input[type= "button"]').style.backgroundcolor = "red";
    
}
var mydiv=document.createElement("div");
document.body.appendChild(mydiv);
console.log(mydiv);
var mytext=document.createTextNode("hello every one");
mydiv.appendChild(mytext);
console.log(mydiv);


var input= document.querySelector('input');
var  button= document.querySelector(".add > button");

button.addEventListener("click",addlist);

function addlist(e) {
    var notcompleted=document.querySelector(".notcompleted");
    var  completed=document.querySelector(".completed");
    var newli=document.createElement("li");
    var checkbtn=document.createElement("button");
    var deletebtn=document.createElement("button");
    checkbtn.innerHTML= '<i  class="fa  fa-check"></i>';
    deletebtn.innerHTML= '<i  class="fa  fa-trash"></i>';
    

    if (input.value !== ''){
        newli.textContent=input.value;
        input.value='';
        notcompleted.appendChild(newli);
        newli.appendChild(checkbtn);
        newli.appendChild(deletebtn);
        console.log(newli);

        checkbtn.addEventListener("click",function(){
            var parent=this.parentNode;
            parent.remove();
            completed.appendChild(parent);
            checkbtn.style.display= "none";
        });

        deletebtn.addEventListener("click",function(){
            var parent=this.parentNode;
            parent.remove();
            
        });



    } 

}
function getNewColor(){
    var color , char ;
     char = "0123456789ABCDEF";
     color="#";
     for  (var i=0 ;i<6 ;i++){
        color= color+char[Math.floor(Math.random()*16)];
     }
     document.body.style.background=color;
     document.getElementById("color1").innerHTML=color;
}





    


    



