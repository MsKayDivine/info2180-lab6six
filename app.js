"use strict";

function loadAwesome(){
    var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange =function()
 {
     if (this.readyState == 4 && this.status == 200){
         document.getElementById("searchOption").innerHTML = this.responseText;
     }
 };
 xhttp.open("GET", "superheroes.php", true);
 xhttp.send();   
}
