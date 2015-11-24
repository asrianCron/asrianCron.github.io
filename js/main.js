$(window).load(function (){
//    generateSquares(16);
//    $( "#placeholderSquares" ).draggable();
});
function generateShits(){
//        var newDiv = document.createElement("div");
            
//            var fragment = document.createDocumentFragment();

            var i, sprite, div;

            // Example 1
            div = document.createElement('div');
//            div.appendChild(document.createElement('hr'));
            div.classList.add("filler");

            for (i = 0; i < SPRITE_COUNT; i++) {
                sprite = new psg.Sprite(spaceship, {
                    colored         : true
                });
                div.appendChild(resize(sprite.canvas, SPRITE_SCALE));
            }

//            fragment.appendChild(div);
            
            // Example 2
//            div = document.createElement('div');
//            div.innerText = 'Colored ship sprites (with low saturation)';
//            div.appendChild(document.createElement('hr'));
//            
//            for (i = 0; i < SPRITE_COUNT; i++) {
//                sprite = new psg.Sprite(spaceship, {
//                    colored         : true,
//                    saturation      : 0.1
//                });
//                div.appendChild(resize(sprite.canvas, SPRITE_SCALE));
//            }

//            fragment.appendChild(div);
    
//            document.body.appendChild(fragment);

//            // Example 3
//            div = document.createElement('div');
//            div.innerText = 'Colored ship sprites (with many color variations per ship)';
//            div.appendChild(document.createElement('hr'));
//            
//            for (i = 0; i < SPRITE_COUNT; i++) {
//                sprite = new psg.Sprite(spaceship, {
//                    colored         : true,
//                    colorVariations : 0.9,
//                    saturation      : 0.8
//                });
//                div.appendChild(resize(sprite.canvas, SPRITE_SCALE));
//            }
//
//            fragment.appendChild(div);
//            
//            // Example 4
//            div = document.createElement('div');
//            div.innerText = 'Colored dragon sprites';
//            div.appendChild(document.createElement('hr'));
//            
//            for (i = 0; i < SPRITE_COUNT; i++) {
//                sprite = new psg.Sprite(dragon, {
//                    colored         : true
//                });
//                div.appendChild(resize(sprite.canvas, SPRITE_SCALE));
//            }
//
//            fragment.appendChild(div);
//
//            // Example 5
//            div = document.createElement('div');
//            div.innerText = 'Black & white robot sprites';
//            div.appendChild(document.createElement('hr'));
//
//            for (i = 0; i < SPRITE_COUNT; i++) {
//                sprite = new psg.Sprite(robot);
//                div.appendChild(resize(sprite.canvas, SPRITE_SCALE));
//            }
//
//            fragment.appendChild(div);
        $("body").append(div);

}

$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()){

        generateShits();
        
    }

});
var SPRITE_SCALE = 4;
var SPRITE_COUNT = 100 + 17;

var spaceship = new psg.Mask([
        0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1,
        0, 0, 0, 0, 1,-1,
        0, 0, 0, 1, 1,-1,
        0, 0, 0, 1, 1,-1,
        0, 0, 1, 1, 1,-1,
        0, 1, 1, 1, 2, 2,
        0, 1, 1, 1, 2, 2,
        0, 1, 1, 1, 2, 2,
        0, 1, 1, 1, 1,-1,
        0, 0, 0, 1, 1, 1,
        0, 0, 0, 0, 0, 0
], 6, 12, true, false);

var dragon = new psg.Mask([
        0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,1,1,1,1,0,0,0,0,
        0,0,0,1,1,2,2,1,1,0,0,0,
        0,0,1,1,1,2,2,1,1,1,0,0,
        0,0,0,0,1,1,1,1,1,1,1,0,
        0,0,0,0,0,0,1,1,1,1,1,0,
        0,0,0,0,0,0,1,1,1,1,1,0,
        0,0,0,0,1,1,1,1,1,1,1,0,
        0,0,1,1,1,1,1,1,1,1,0,0,
        0,0,0,1,1,1,1,1,1,0,0,0,
        0,0,0,0,1,1,1,1,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0
], 12, 12, false, false); 

var robot = new psg.Mask([
        0, 0, 0, 0,
        0, 1, 1, 1,
        0, 1, 2, 2,
        0, 0, 1, 2,
        0, 0, 0, 2,
        1, 1, 1, 2,
        0, 1, 1, 2,
        0, 0, 0, 2,
        0, 0, 0, 2,
        0, 1, 2, 2,
        1, 1, 0, 0
], 4, 11, true, false);

var check = 0;
$(window).on("mousewheel", function(event){

    if($(window).scrollTop() == 0 && check == 0){
        
        generateShits();

    } else {
        check = 1;
    }

});

function powerOfTwo(arg1){
    if(!isNaN(arg1)){
        return (arg1 & (arg1 - 1)) == 0;
    }
}

function canSquare(arg1){
    if(!isNaN(arg1)){
        return (Math.sqrt(arg1) % 1) == 0;
    }
}

function generateSquares(arg1){
    console.log("generating squares : " + arg1);
    if(!isNaN(arg1) && canSquare(arg1)){
        var containerDiv = document.getElementById("placeholderSquares");
        while (containerDiv.firstChild) {
            containerDiv.removeChild(containerDiv.firstChild);
        }
        var toBreak = Math.sqrt(arg1);
        console.log("toBreak = " + toBreak);
        
        for(var i=0;i<toBreak;i++){
            var squareRow = document.createElement("div");
            squareRow.classList.add("squareRow");
            for(var j=0;j<toBreak;j++){
                var newSquare = document.createElement("div");
                newSquare.classList.add("square");
                newSquare.addEventListener("mouseover", changeColour);
                newSquare.addEventListener("mousedown", changeColour);
                squareRow.appendChild(newSquare);

            }
            containerDiv.appendChild(squareRow);
        }
        
    }
    else{
        console.log("shit, man, it's all wrong");
    }
}


