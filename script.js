var modal = document.getElementById("myModal");

var closeBtn = document.getElementsByClassName("close")[0];

window.onload = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const items = document.querySelectorAll('.animated-item');

items.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-100%)';
});

window.addEventListener('load', () => {
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, 200 * index);
  });
});

