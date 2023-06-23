function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  window.addEventListener('scroll', function() {
    var button = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });

var modal = document.getElementById("modal");
var modalButton = document.getElementById("modalButton");
var closeBtn = document.getElementsByClassName("close")[0];

modalButton.onclick = function() {
  modal.style.display = "block"; 

  modal.classList.add("open");
  modal.classList.remove("close");
}

closeBtn.onclick = function() {
  modal.classList.add("close");
  modal.classList.remove("open");

  setTimeout(function() {
    modal.style.display = "none";
  }, 300);
}