// Hamburger
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});
var modal = document.getElementById('myModal');
// Modal
const showModal = (url, title, text) => {
  var modalImg = document.getElementById('img01');
  var imageTitle = document.getElementById('image-title');
  var imageDescription = document.getElementById('image-description');

  modal.style.display = 'block';
  modalImg.src = url;
  imageTitle.innerHTML = title;
  imageDescription.innerHTML = text;

  var span = document.getElementById('close');

  span.onclick = function () {
    modal.style.display = 'none';
  };
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Search Items functionality

function liveSearch() {
  let cards = document.querySelectorAll(".gallery-card");
  let search_query = document.getElementById("search-items").value;
  for (var i = 0; i < cards.length; i++) {
    console.log(cards[i].innerText)
    if (
      cards[i].innerText
        .toLowerCase()
        .includes(search_query.toLowerCase())
    ) {
      cards[i].classList.remove("is-hidden");
    } else {
      cards[i].classList.add("is-hidden");
    }
  }
}