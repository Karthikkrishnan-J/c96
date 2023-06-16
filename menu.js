var score=0;
function add(){
    score=score+1;
    document.getElementById("quantity").innerHTML=score;
}
function subtract(){
    score=score-1;
    document.getElementById("quantity").innerHTML=score;
}
function salad(){
    var display_1="<div><h1>Spinach Apple Salad</h1><h1>Kale Salad</h1><h1>Mexican Salad</h1><h1>Fennel Orange Salad</h1><h1>Strawberry Salad</h1>";
        document.getElementById("salad_name").innerHTML=display_1;
}
function soup(){
    var display_2="<div><h1>Pumpkin Soup</h1></div><div><h1>Cellery Soup</h1></div><div><h1>Traditional Paya Soup</h1></div><div><h1>Sliced Black Bean Chicken Soup With Kale</h1></div><div><h1>Lendle Soup</h1></div>";
    document.getElementById("soup_name").innerHTML=display_2;
}
function starters(){
    var display_3="<div><h1>Air Fries Egg Rolls</h1></div><div><h1>Tava Paneer</h1></div><div><h1>Oats Moong Dal Tikki</h1></div><div><h1>Tandoori Chicken</h1></div><div><h1>Mutton Kebeb</h1></div>";
    document.getElementById("starters_name").innerHTML=display_3;
}
function snack(){
     var display_4="<div><h1>Stuffed Capsicum</h1></div><div><h1>Spinach Cheese Rolls</h1></div><div><h1>Avacado Sandwhich</h1></div><div><h1>Sabudana Vada</h1></div><div><h1>Baked Chicken Wings</h1></div>";
     document.getElementById("snack_name").innerHTML=display_4;
}
function juice(){
    var display_5="<div><h1>Cranberry Juice</h1></div><div><h1>Beet Juice</h1></div><div><h1>Amla Juice</h1></div><div><h1>Pomogranate Juice</h1></div><div><h1>Acai Berry Juice</h1></div>";
     document.getElementById("juice_name").innerHTML=display_5;
}
function ord(){
    window.location="details.html";
}
function herbs(){
    var herbs="<div><h1>Parsley</h1><br><h1>Mint</h1><br><h1>Coriander</h1><br><h1>RoseMary</h1><br><h1>Oregano</h1></div>"
    document.getElementById("herbDiv").innerHTML=herbs;
}