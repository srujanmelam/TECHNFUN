const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

var j=0;
function changer() {
                    i = document.getElementById('tim');
                    var col = ["white","green","black","silver"];
                    i.style.color = col[j];
                    i.style.transition = "2s";
                    j = (j + 1) % col.length;
            }
            setInterval(changer,2000);
function home() {
  window.open("home.html");
}