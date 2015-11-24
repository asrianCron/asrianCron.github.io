
function resolutionClicked() {
    console.log("resolution clicked");
    var res = document.getElementById("resolutionInput").value;
    generateSquares(parseInt(res));
    
}

function hexColourClicked() {
    console.log("resolution clicked");
    var res = document.getElementById("colourInput").value;
    generateSquares(parseInt(res));

}

function changeColour(arg1) {
    if(arg1.buttons == 1){
        console.log(arg1);
        var toChange = arg1.srcElement;
        var colour = document.getElementById("colourInput").value;
        toChange.style.backgroundColor = colour;
    }    
}
