window.onload =function() {
     var searchbtn= document.querySelector("#search");
     console.log(searchbtn);
     var httpRequest;

     searchbtn.addEventListener('click', function(element){
         element.preventDefault();
         httpRequest= new XMLHttpRequest();

         //GET REQUEST
         var url= "superheroes.php";
         httpRequest.onreadystatechange = loadList;
         httpRequest.open('GET', url);
         httpRequest.send();
     });

     function loadList(){
         if (httpRequest.readyState === XMLHttpRequest.DONE){
             if (httpRequest.status === 200){
                 var response= httpRequest.responseText;
                 alert(response)
             }else{
                 alert("not displaying php");
             }
         }
     }

 }