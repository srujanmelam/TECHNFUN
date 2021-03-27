function gaming(){
  window.open("gaming.html");
}
function others() {
  window.open("others.html");
}
function tech() {
  window.open("tech.html");
}
function Odyssey() {
  window.open("Odyssey.html");
}
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
var j = 0;
function change(){
    var i=document.getElementById("step");
    var col = ["silver","white","#3e8e41"];
    i.style.color=col[j];
    i.style.transition="3s";
    j=(j+1)%col.length;
}
setInterval(change,3000);

j=0;
function changer() {
                    i = document.getElementById("tim");
                    var col = ["50%","90%","100%","130%","200%"];
                    i.style.fontSize = col[j];
                    i.style.transition = "2s";
                    j = (j + 1) % col.length;
            }
            setInterval(changer,2000);