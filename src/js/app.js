$(document).ready(function () {
  // VARS
  const body = document.querySelector('body');
  const header = document.getElementById('header');

  // ------ Padding top for sections on Desktop ------
  if (window.innerWidth >= 1025) {
    const headerHeight = header.offsetHeight;
    const elements = document.querySelectorAll('.vertical-scrolling');
    elements.forEach(element => {
      element.style.paddingTop = headerHeight + 'px';
    });
  }

  // ---------------- HEADER MOBILE ------------------
  if (window.innerWidth <= 1024) {
    const scrollHeader = () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 100) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    };
    window.addEventListener('scroll', scrollHeader);
  }

  // ------------------ FULL PAGE --------------------
  if (window.innerWidth >= 1025) {
    $('#fullpage').fullpage({
      sectionSelector: '.vertical-scrolling',
      navigation: true,
      slidesNavigation: true,
      controlArrows: false,
      anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
      menu: '#menu',

      afterLoad: function(anchorLink, index, origin, destination, direction) {
        if (destination.anchor !== 'firstSection') {
          $('#header').addClass('active');
        } else {
          $('#header').removeClass('active');
        }
      },
    });
  }

  // -------------------- MAIN GRID ----------------------
  var mainCards = document.querySelector('.main__cards');
  if (mainCards) {
    var mainCardsArray = mainCards.querySelectorAll('.main-card.one, .main-card.two, .main-card.three, .main-card.four, .main-card.five');
    mainCardsArray.forEach(function(element) {
      element.addEventListener('mouseover', function() {
        mainCards.classList.add(element.classList[1]);
      });
      element.addEventListener('mouseout', function() {
        mainCards.classList.remove(element.classList[1]);
      });
    });
  }

  // ------------------- BURGER MENU ---------------------
  const burgerMenu = document.getElementById('burger-menu'),
        burgerOpen = document.getElementById('burger-open'),
        burgerClose = document.getElementById('burger-close'),
        burgerLinks = document.querySelectorAll('.burger__menu>ul>li>a, .burger__menu .nav__links a')
  burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.add('open-menu');
    body.classList.add('dis-scroll');
  })
  burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('open-menu');
    body.classList.remove('dis-scroll');
  })
  const linkAction = () => {
    const burgerMenu = document.getElementById('burger-menu');
    burgerMenu.classList.remove('open-menu');
    body.classList.remove('dis-scroll');
  }
  burgerLinks.forEach(n => n.addEventListener('click', linkAction));

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