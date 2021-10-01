var song=[
"https://www.youtube.com/watch?v=PT2_F-1esPk",
"https://www.youtube.com/watch?v=yWWqcupqUo4",
"https://www.youtube.com/watch?v=O1-4u9W-bns",
];
    var i = 0;
function play(){
    document.getElementById("audio").play();
    i++;
    if (i == 3)
        i = 0;
}

function re() {
    if (i == 1)
        i = 3;
    if (i == 3)
        i = 0;
    if (i == 2)
        i = 1;    
}