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



// fullpage customization
$('#fullpage').fullpage({
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
    }
  } 
}); 