


function sabiranje(){
  let zbirovi;
  const prvi = Number(document.getElementById("xx").value);
  const drugi = Number(document.getElementById("yy").value);
  const zbir = document.getElementById("zbir");
  const prostor = document.getElementById("prostor");
  zbirovi = prvi + drugi;
  prostor.innerHTML = "rezultat je: " + zbirovi;
  }


/*function ispis(){
  prostor.innerHTML = "rezultat je: " + zbirovi;
}*/
zbir.addEventListener("click", sabiranje);
//zbir.addEventListener("click", ispis);
//console.log(sabiranje(2, 3));

//moj pokusaj gore

//dole radi sa internet

/*function myFunction() {
  var y = document.getElementById("txt1").value;
  var z = document.getElementById("txt2").value;
  var x = Number(y) + Number(z);
  document.getElementById("demo").innerHTML = x;
}

<p>
  Click the button to calculate x.
  <button onclick="myFunction()">Try it</button>
</p>
<p>
  Enter first number:
  <input type="text" id="txt1" name="text1" value="1">
  Enter second number:
  <input type="text" id="txt2" name="text2" value="2">
</p>
<p id="demo"></p>*/

function oduzimanje(){
  let razlike = 0;
  const prvi2 = Number(document.getElementById("kk").value);
  const drugi2 = Number(document.getElementById("ll").value);
  const razlika = document.getElementById("razlika");
  const prostor = document.getElementById("prostorminus");
  razlike = prvi2 - drugi2;
  prostorminus.innerHTML = "Rezultat je: " + razlike;
}
razlika.addEventListener("click", oduzimanje);

function mnozenje(){
  let mnozenja = 1;
  const prvi3 = Number(document.getElementById("pp").value);
  const drugi3 = Number(document.getElementById("rr").value);
  const proizvod = document.getElementById("proizvod");
  const prostor = document.getElementById("prostorputa");
  mnozenja = prvi3 * drugi3;
  prostorputa.innerHTML = "Rezultat je: " + mnozenja;
}
proizvod.addEventListener("click", mnozenje);

function deljenje(){
  let deljenja = 1;
  const prvi4 = Number(document.getElementById("dd").value);
  const drugi4 = Number(document.getElementById("jj").value);
  const kolicnik = document.getElementById("kolicnik");
  const prostor = document.getElementById("prostordeljenje");
  deljenja = prvi4 / drugi4;
  prostordeljenje.innerHTML = "Rezultat je: " + deljenja;
}
kolicnik.addEventListener("click", deljenje);

/*if(korisnik napise +){
   dugmezajednako.addEventListener("click", sabiranje);
   else if(){
   oduzimanje
 }
 else{
 nista ako nema znakovi;
 imaZnakovi = false;
}
}*/
const reset = document.getElementById("reset");
function brisanje(){
  prostor.innerHTML = "";
  prostorminus.innerHTML ="";
  prostorputa.innerHTML = "";
  prostordeljenje.innerHTML = "";
  xx.value = "";
  yy.value = "";
  kk.value = "";
  ll.value = "";
  pp.value = "";
  rr.value = "";
  dd.value = "";
  jj.value = "";
}
reset.addEventListener("click", brisanje);
