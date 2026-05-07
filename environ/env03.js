
<script
    src="https://code.jquery.com/jquery-3.7.1.min.js"
    src="env03.js">
    <link rel="stylesheet" href="env03.css"/>
</script>

let environmentTitle = "IVTI";

let environmentElements = [happy, lettinggo, ermsmaller, leaving, iknewit];

IVTI [0];
IVTI [1];
IVTI [2];
IVTI [3];
IVTI [4];

let joycount=0;
let lettinggocount=0;
let ermcount=0;
let leavingcount=0;
let iknewitcount=0;

function showIVTIImage(IVTIName){
$("img").hide();
$("body").append("<img class='img' src='" + IVTIName + ".jpg'>");
};

$("img").hide();

function IVTIClick(IVTIName) {
    // increase count
    IVTICount[IVTIName]++;

    console.log(IVTIName + " clicked");
    console.log("Hangouts with " + IVTIName + ": " + hangoutCount[IVTIName])
};

$("#happy").click(function(){
    joycount= joycount +1;
console.log("happy clicker");
showIVTIImage("tillhappy");
$("#happy").html();
IVTIClick("Joy");
});

$("#lettinggo").click(function(){
    lettinggocount = lettinggocount +1;
console.log("letting go clicker");
showIVTIImage("lettinggo");
$("#lettinggo").html();
IVTIClick("Letting Go");
});

$("#erm").click(function(){
    ermcount = ermcount +1;
console.log("erm clicker");
showIVTIImage("ermactually");
$("#erm").html();
IVTIClick("Hesitation");
});

$("#leaving").click(function(){
console.log("leaving clicker");
showIVTIImage("tillleaving");
$("#leaving").html();
IVTIClick("Leave");
});

$("#iknewit").click(function(){
console.log("expected clicker");
showIVTIImage("iknewit");
$("#iknewit").html();
IVTIClick("Expected");
});

function IVTIClick(IVTIName) {

    console.log(IVTIName + " clicked");

    // show image
    showFriendImage(IVTIName);

};
