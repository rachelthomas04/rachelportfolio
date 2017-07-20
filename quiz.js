var gry = 0;
var huff = 0;
var sly = 0;
var rav = 0;

function add_points_question(name_var){
    
    
     var answer = $("input[name=" + name_var + "]:checked").val();
    if (answer==="gry"){
        gry = gry +1;
    }
    else if (answer==="huff"){
        huff = huff +1;
    }
    else if (answer==="sly"){
        sly = sly +1;
    }
    else if (answer ==="rav"){
        rav = rav +1;  
    }       
    
}

$("#submit").click(function() {

    add_points_question("person");
    add_points_question("hobby");
    add_points_question("show");
    add_points_question("trait");


    
if(gry >= huff && gry >= sly && gry>=rav){
    $("h2").append ("You are Gryffindor!");
}
if(huff >= gry && huff>= sly && huff>=rav){
    $("h2").append ("You are Hufflepuff!");
}
if (sly >=gry && sly>=huff && sly>= rav){
    $("h2").append ("You are Slytherin!");
}
if(rav>=gry && rav>=sly && rav>=huff){
    $("h2").append ("You are Ravenclaw!");
}
});
