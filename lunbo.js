window.onload = function () {
    var huadong = document.getElementsByClassName('huadong')[0];
    var dibu = document.querySelector('.dibu')
    var ul = document.querySelector('ul');
    var width = ul.children.length * (ul.children[0].offsetWidth + 10);
    ul.style.width =width + "px";
    var lastWidth =width -ul.parentNode.offsetWidth;
    var lastwidth =dibu.offsetWidth - huadong.offsetWidth;
    huadong.onmousedown =function (e) {
        var ml =this.offsetParent.offsetParent.offsetLeft;
        var l = parseInt(this.style.left) || 0 ;
        var offsetX = e.clientX - ml - l ;
       document.onmousemove = function (e) {
           var X = e.clientX -ml -offsetX ;
           X = X<0 ? 0:X;
           X = X > lastWidth ? lastwidth :X;
           huadong.style.left =X + "px" ;
           ul.style.marginLeft = -X * lastwidth / lastwidth + "px" ;
       }
   }
   document.onmouseup = function () {
    document.onmousemove = null;
 }
}


 