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


  // ---------- UPLOAD DOCUMENT IN FILE INPUT ------------
  document.getElementById('cv_file').addEventListener('change', function() {
    var fileInput = this;
    var fileItem = fileInput.parentNode.querySelector('.file-item');
    
    if (fileItem) {
      fileItem.style.display = 'block';
    } else {
      fileItem = document.createElement('div');
      fileItem.classList.add('file-item');
      
      var deleteButton = document.createElement('button');
      deleteButton.classList.add('file-delete');
      deleteButton.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#5B534D"/><path d="M8.00035 7.29325L10.4752 4.81836L11.1823 5.52546L8.70745 8.00035L11.1823 10.4752L10.4752 11.1823L8.00035 8.70745L5.52546 11.1823L4.81836 10.4752L7.29325 8.00035L4.81836 5.52546L5.52546 4.81836L8.00035 7.29325Z" fill="white"/></svg>';
      deleteButton.addEventListener('click', function() {
        fileInput.value = '';
        fileItem.style.display = 'none';
      });
      
      var fileItemIcon = document.createElement('div');
      fileItemIcon.classList.add('file-item-icon');
      
      fileItem.appendChild(deleteButton);
      fileItem.appendChild(fileItemIcon);
      
      // fileInput.parentNode.appendChild(fileItem);
      fileInput.parentNode.parentNode.appendChild(fileItem);
    }
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