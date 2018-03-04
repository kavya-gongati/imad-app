console.log('Loaded!');
var element=document.getElementById('main'
);
element.innerHTMl='new';
var img = document.getElementById('madi');


var marginleft =0;
function movieRight () {
 marginleft = marginleft + 10;
 img.style.marginleft = marginleft + 'px';
}
img.onClick = function () {
    var interval = setInterval(moveRight, 100);
};