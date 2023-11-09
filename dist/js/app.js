$(document).ready(function () {

  // -------------------- MAIN GRID ----------------------
  var mainCards = document.querySelector('.main__cards');
  var mainCardsArray = mainCards.querySelectorAll('.main-card.one, .main-card.two, .main-card.three, .main-card.four, .main-card.five');
  mainCardsArray.forEach(function(element) {
    element.addEventListener('mouseover', function() {
      mainCards.classList.add(element.classList[1]);
    });
    element.addEventListener('mouseout', function() {
      mainCards.classList.remove(element.classList[1]);
    });
  });

});