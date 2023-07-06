function toggler() {
  var x = document.getElementById("mynavbar");
  x.style.display = x.style.display === "none" ? "block" : "none";
}


const toggleButton = document.getElementById('toggleButton');
const toggleIcon = document.getElementById('toggleIcon');

toggleButton.addEventListener('click', function() {
  toggleButton.classList.toggle('active');
  if (toggleButton.classList.contains('active')) {
    toggleIcon.classList.remove('fa-bars');
    toggleIcon.classList.add('fa-close');
  } else {
    toggleIcon.classList.remove('fa-close');
    toggleIcon.classList.add('fa-bars');
  }
});
