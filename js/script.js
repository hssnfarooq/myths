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
  var ext = url.split('.').pop();
  var modalVid = document.getElementById('vid');
  var modalImg = document.getElementById('img01');
  var imageTitle = document.getElementById('image-title');
  var imageDescription = document.getElementById('image-description');

  modal.style.display = 'block';
  if (ext === 'png' || ext === 'jpg' || ext === 'jpeg') {
    modalImg.src = url;
    modalVid.style.display = 'none';
    modalImg.style.display = 'block';
  } else {
    modalVid.src = url;
    modalImg.style.display = 'none';
    modalVid.style.display = 'block';
  }
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
  let cards = document.querySelectorAll('.gallery-card');
  let search_query = document.getElementById('search-items').value;
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
      cards[i].classList.remove('is-hidden');
    } else {
      cards[i].classList.add('is-hidden');
    }
  }
}

$(function () {
  $('.lazy').lazy({
    effect: 'fadeIn',
  });
});

(function scrollReveal() {
  window.sr = ScrollReveal();

  sr.reveal(
    '.gallery-card',
    {
      duration: 600,
      distance: '70px',
      easing: 'ease-out',
      origin: 'bottom',
      reset: true,
      scale: 1,
      viewFactor: 0,
      afterReveal: revealChildren,
    },
    150
  );

  var revealChildren = sr.reveal(
    '.collection-name, ."card-content',
    {
      duration: 500,
      scale: 1,
      distance: '70px',
      origin: 'bottom',
      reset: true,
      easing: 'ease-out',
      viewFactor: 1,
    },
    75
  );
});
