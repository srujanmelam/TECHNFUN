function gaming(){
  window.open("gaming.html");
}
function others() {
  window.open("others.html");
}
function tech() {
  window.open("tech.html");
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