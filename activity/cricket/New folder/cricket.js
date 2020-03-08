<!DOCTYPE html>
<html>
<body>

<p>Click the button to display a random number between 1 and 6.</p>

<button onclick="hello()">Try it</button>

<p id="demo"></p>

<script>
class team {

 constructor()
 {
  this.score=0;
  this.i=0;
  this.x =0;
  }

  function myFunction(){
  if(this.i<=9){
  this.x = Math.floor(Math.random() * 7 );
  if(this.x == 0)
  {
  this.i+=1;
  }
  this.score+=this.x;
  document.getElementById("demo").innerHTML= "score is:"+ this.score + "/" +  this.i;
  }
  }
  
  }

 function hello(){
 alert("hello");
 var ss=new team();
 ss.myFunction();
 }
</script>

</body>
</html>
