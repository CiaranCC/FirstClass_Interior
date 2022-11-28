
var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};
var button1 = document.getElementById('button1');
button1.style.visibility = "hidden";

function changeMD()
{
   /* Find all the elements*/

   var CEO_heading = document.getElementById('CEO_HD');
   var CEO_des = document.getElementById('CEO_DES');
   var CEO_img = document.getElementById('CEOimg');
   var CEO_btn = document.getElementById('CEO_BTN');


   if(CEO_heading.textContent == "CEO")
   {
        CEO_heading.innerHTML = "MD";
        CEO_heading.style.color = "blue";
        CEO_heading.style.fontSize = "50px";
        CEO_des.innerHTML = "Inspecting and updating patients' charts. Diagnosing common ailments such as colds, flu, and diabetes. Administering medication topically, orally, and via intravenous or intramuscular injections. Prescribing apt medications and lifestyle alterations..";
       /* CEO_img.src = "https://images.squarespace-cdn.com/content/53b599ebe4b08a2784696956/1482287990797-VY0DDX7AE1UKLY3OZGXV/Headshots-NYC-CEOportrait-027.jpg?format=1000w&content-type=image%2Fjpeg"*/
        CEO_img.src = "../images/md.webp";
        CEO_btn.innerHTML = "Change to CEO";
   }
   else
   {
        CEO_heading.innerHTML = "CEO";
        CEO_heading.style.color = "blue";
        CEO_heading.style.fontSize = "50px";
        CEO_des.innerHTML = "Making major corporate decisions, managing the overall operations and resources of a company. Communicating, on behalf of the company, with shareholders, government entities, and the public. Maintaining awareness of the competitive market landscape, expansion opportunities, industry developments, etc.";
        CEO_img.src = "../images/CEO.jpg";
        CEO_btn.innerHTML = "Change to MD"
   }
}


function hideStaff1(){
  var staff = document.getElementById('staff1');
  staff.style.visibility = "hidden";
}

function showButton1(){
  button1.style.visibility = "visible";
}

function hideButton1(){
  button1.style.visibility = "hidden";
}

function hideStaff2(){
  var staff = document.getElementById('staff2');
  staff.style.visibility = "hidden";
}

function showButton2(){
  button2.style.visibility = "visible";
}

function hideButton2(){
  button2.style.visibility = "hidden";
}

function hideStaff3(){
  var staff = document.getElementById('staff3');
  staff.style.visibility = "hidden";
}

function showButton3(){
  button3.style.visibility = "visible";
}

function hideButton3(){
  button3.style.visibility = "hidden";
}

function hideStaff4(){
  var staff = document.getElementById('staff4');
  staff.style.visibility = "hidden";
}

function showButton4(){
  button4.style.visibility = "visible";
}

function hideButton4(){
  button4.style.visibility = "hidden";
}

function hideStaff5(){
  var staff = document.getElementById('staff5');
  staff.style.visibility = "hidden";
}

function showButton5(){
  button5.style.visibility = "visible";
}

function hideButton5(){
  button5.style.visibility = "hidden";
}

function hideStaff6(){
  var staff = document.getElementById('staff6');
  staff.style.visibility = "hidden";
}

function showButton6(){
  button6.style.visibility = "visible";
}

function hideButton6(){
  button6.style.visibility = "hidden";
}















function headingchange(){

    var Change_heading = document.getElementById("HEADING");

    Change_heading.style.fontSize = "100px";

    Change_heading.style.color = "#6495ED";

  }
  function align() {
    document.getElementById("align").style.textAlign = "right";
    document.getElementById("align1").style.textAlign = "right";
    document.getElementById("align2").style.textAlign = "right";
    document.getElementById("align3").style.textAlign = "right";
    document.getElementById("align4").style.textAlign = "right";
  }
