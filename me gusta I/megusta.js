var count = 3; 
var countElement = document.querySelector("#like");

//console.log(countElement);

function add1(){  
    count++;
    //console.log(count);
    countElement.innerText = count + " like(s)";
}