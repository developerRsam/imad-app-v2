/*console.log('Loaded!');

//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft = 5;
    img.style.marginLeft = marginLeft = 'px';
}
img.onclick = function(){
    var interval= setInterval(moveRight, 50);
};*/
// counter
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //Make request to the counter endpoint
    
    //Capture Response and Store it a variable
    
    //Render the variable in the correct span
    counter = counter = 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};